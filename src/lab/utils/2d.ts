import type { Count, Fill, Flat, IsTuple } from "@/array";
import type {
	Increment,
	Decrement,
	Between,
	IsNegative,
	IsFloat,
	Greater,
	IsZero,
} from "@/numeric";
import type { And, Equal, Not, Or } from "@/operator";
import type { Split } from "@/string";
import type { IsUnion } from "@/union";

/**
 * The `Vector` enum represents the possible directions in which a player can win in game.
 * - `HORIZONTAL`: Represents a horizontal win.
 * - `VERTICAL`: Represents a vertical win.
 * - `DIAGONAL_UP`: Represents a diagonal win from bottom-left to top-right.
 * - `DIAGONAL_DOWN`: Represents a diagonal win from top-left to bottom-right.
 */
export declare enum Vector {
	HORIZONTAL = "horizontal",
	VERTICAL = "vertical",
	DIAGONAL_UP = "diagonal up",
	DIAGONAL_DOWN = "diagonal down",
}

/**
 * The `CellVector` type represents a cell in the two player game with its position and direction.
 */
export declare type CellVector = {
	/**
	 * The row index of the cell in the game board.
	 */
	row: number;
	/**
	 * The column index of the cell in the game board.
	 */
	col: number;
	/**
	 * The player who occupies the cell, either {@link DefaultPlayerOne} or {@link DefaultPlayerTwo}.
	 */
	player: string;
	/**
	 * The direction of the win {@link Vector}.
	 */
	dir: Vector;
};

/**
 * The board limit type defines the minimum and maximum limits for the game board dimensions.
 * - `row`: Defines the minimum and maximum number of rows in the game board.
 * - `col`: Defines the minimum and maximum number of columns in the game board.
 */
declare type BoardLimit = {
	/**
	 * Row limit for the game board.
	 */
	row: {
		min: 3;
		max: 10;
	};
	/**
	 * Column limit for the game board.
	 */
	col: {
		min: 3;
		max: 10;
	};
};

/**
 * The next vector type represents the next cell in a specific direction based on the current cell vector.
 * It is used to determine the next cell to check for a win condition in the two player game.
 * @template TVector - The current cell vector.
 */
export declare type NextVector<TVector extends CellVector> = {
	/**
	 * The next cell in the horizontal direction.
	 */
	[Vector.HORIZONTAL]: {
		row: TVector["row"];
		col: Increment<TVector["col"]>;
		player: TVector["player"];
		dir: Vector.HORIZONTAL;
	};
	/**
	 * The next cell in the vertical direction.
	 */
	[Vector.VERTICAL]: {
		row: Increment<TVector["row"]>;
		col: TVector["col"];
		player: TVector["player"];
		dir: Vector.VERTICAL;
	};
	/**
	 * The next cell in the diagonal up direction.
	 */
	[Vector.DIAGONAL_UP]: {
		row: Decrement<TVector["row"]>;
		col: Increment<TVector["col"]>;
		player: TVector["player"];
		dir: Vector.DIAGONAL_UP;
	};
	/**
	 * The next cell in the diagonal down direction.
	 */
	[Vector.DIAGONAL_DOWN]: {
		row: Increment<TVector["row"]>;
		col: Increment<TVector["col"]>;
		player: TVector["player"];
		dir: Vector.DIAGONAL_DOWN;
	};
};

/**
 * The `VictoryPayload` type represents the payload returned when a player wins in the two player game.
 * It contains the following properties:
 * - `dir`: The direction of the win, represented by the {@link Vector} type.
 * - `player`: The player who won, represented by the {@link Player} type.
 * - `pos`: The position of the winning cell in the game board, represented as a tuple of two numbers (row and column).
 */
export declare type VictoryPayload = {
	/**
	 * The direction of the win.
	 */
	dir: `${Vector}`;
	/**
	 * The player who won.
	 */
	player: string;
	/**
	 * The position of the winning cell in the game board.
	 */
	pos: [number, number];
};

/**
 * The `GameRules` type defines the rules for a two player game.
 * It includes the following properties:
 * - `ROW`: The number of rows in the game board.
 * - `COL`: The number of columns in the game board.
 * - `TARGET_SCORE`: The target score for a win, which is the number of consecutive cells a player needs to occupy in a row (horizontally, vertically, or diagonally) to win.
 *
 */
export declare type GameRules = {
	/**
	 * The number of rows in the board.
	 */
	ROW: number;
	/**
	 * The number of columns in the board.
	 */
	COL: number;
	/**
	 * The target score for a win.
	 */
	TARGET_SCORE: number;
	/**
	 * The players in the game.
	 */
	PLAYERS: [string, string];
	/**
	 * the empty cell charactere of the game board.
	 */
	EMPTY_CELL: string;
};

/**
 * The default cell type in the game board.
 * - It can be one of the players defined in the game rules or the empty cell.
 * - It is used to represent the state of each cell in the game board.
 */
export declare type Cell =
	| GameRules["PLAYERS"][number]
	| GameRules["EMPTY_CELL"];

/**
 * The `ReactiveBoard` type represents a two-dimensional game board.
 * - It is a 2D array where each cell can be occupied by one of the players or be empty.
 * - The dimensions of the board are defined by the `ROW` and `COL` properties in the game rules.
 * - If the game rules are invalid, it returns an error type instead of a valid board.
 */
export declare type ReactiveBoard2D<TRules extends GameRules> =
	Equal<Infer2DRulesErrors<TRules>, null> extends true ? Board<TRules> : never;

/**
 * The `Board` type represents a two-dimensional game board based on the game rules.
 * - It is a 2D array where each cell can be occupied by one of the players or be empty.
 * - The dimensions of the board are defined by the `ROW` and `COL` properties in the game rules.
 * - It uses the `Fill` utility type to create a 2D array with the specified number of rows and columns.
 * - If the game rules are invalid, it returns an error type instead of a valid board.
 */
export declare type Board<
	TRules extends GameRules,
	TValue = TRules["PLAYERS"][number] | TRules["EMPTY_CELL"],
> = Fill<Fill<TValue, TRules["COL"]>, TRules["ROW"]>;

/**
 * Check if a specific vector in the game board has a winning condition.
 * - It recursively checks the next cell in the specified direction (vertical, horizontal, diagonal up, or diagonal down).
 * - If the next cell is out of bounds or does not match the player, it returns false.
 * - The recursion continues until either a win is found or the next cell is out of bounds.
 */
export declare type Check2DVector<
	TBoard extends Cell[][],
	TRules extends GameRules,
	TVector extends CellVector,
	TScore extends number = 1,
	TNextVector extends CellVector = NextVector<TVector>[TVector["dir"]],
> =
	Equal<TScore, TRules["TARGET_SCORE"]> extends true
		? true
		: And<
					Between<TNextVector["row"], 0, Decrement<TRules["ROW"]>>,
					Between<TNextVector["col"], 0, Decrement<TRules["COL"]>>
			  > extends true
			? Equal<
					TBoard[TNextVector["row"]][TNextVector["col"]],
					TVector["player"]
				> extends true
				? Check2DVector<TBoard, TRules, TNextVector, Increment<TScore>>
				: false
			: false;

/**
 * Check for a win condition in the game board.
 * - Iterates through each cell in the board.
 * - For each cell occupied by a player, it checks in all four directions (vertical, horizontal, diagonal up, diagonal down) for a winning condition.
 */
export declare type Check2DVectors<
	TBoard extends Cell[][],
	TRules extends GameRules,
	TRowIndex extends number = 0,
	TColIndex extends number = 0,
> =
	IsTuple<TBoard> extends true
		? And<
				Equal<TColIndex, TRules["COL"]>,
				Equal<TRowIndex, TRules["ROW"]>
			> extends true
			? null
			: Equal<TColIndex, TRules["COL"]> extends true
				? Check2DVectors<TBoard, TRules, Increment<TRowIndex>, 0>
				: TBoard[TRowIndex][TColIndex] extends TRules["PLAYERS"][number]
					? Check2DVector<
							TBoard,
							TRules,
							{
								row: TRowIndex;
								col: TColIndex;
								player: TBoard[TRowIndex][TColIndex];
								dir: Vector.VERTICAL;
							}
						> extends true
						? {
								dir: `${Vector.VERTICAL}`;
								player: TBoard[TRowIndex][TColIndex];
								pos: [TRowIndex, TColIndex];
							}
						: Check2DVector<
									TBoard,
									TRules,
									{
										row: TRowIndex;
										col: TColIndex;
										player: TBoard[TRowIndex][TColIndex];
										dir: Vector.HORIZONTAL;
									}
							  > extends true
							? {
									dir: `${Vector.HORIZONTAL}`;
									player: TBoard[TRowIndex][TColIndex];
									pos: [TRowIndex, TColIndex];
								}
							: Check2DVector<
										TBoard,
										TRules,
										{
											row: TRowIndex;
											col: TColIndex;
											player: TBoard[TRowIndex][TColIndex];
											dir: Vector.DIAGONAL_UP;
										}
								  > extends true
								? {
										dir: `${Vector.DIAGONAL_UP}`;
										player: TBoard[TRowIndex][TColIndex];
										pos: [TRowIndex, TColIndex];
									}
								: Check2DVector<
											TBoard,
											TRules,
											{
												row: TRowIndex;
												col: TColIndex;
												player: TBoard[TRowIndex][TColIndex];
												dir: Vector.DIAGONAL_DOWN;
											}
									  > extends true
									? {
											dir: `${Vector.DIAGONAL_DOWN}`;
											player: TBoard[TRowIndex][TColIndex];
											pos: [TRowIndex, TColIndex];
										}
									: Check2DVectors<
											TBoard,
											TRules,
											TRowIndex,
											Increment<TColIndex>
										>
					: Check2DVectors<TBoard, TRules, TRowIndex, Increment<TColIndex>>
		: never;

/**
 * Count the number of occurrences of a specific cell type in a one-dimensional array.
 */
export declare type CountFlatten<
	TBoard extends readonly Cell[][],
	TCell,
> = Count<Flat<TBoard>, TCell>;

/**
 * Get the next player based on the current board state.
 * - If the count of DefaultPlayerOne is equal to the count of DefaultPlayerTwo, it returns DefaultPlayerOne.
 * - Otherwise, it returns DefaultPlayerTwo.
 */
export declare type NextPlayer<
	TBoard extends Cell[][],
	TRules extends GameRules,
> =
	CountFlatten<TBoard, TRules["PLAYERS"][0]> extends CountFlatten<
		TBoard,
		TRules["PLAYERS"][1]
	>
		? TRules["PLAYERS"][0]
		: TRules["PLAYERS"][1];

/**
 * Check if the game board is full.
 */
export declare type IsBoardFull<
	TBoard extends Cell[][],
	TRules extends GameRules,
> = TRules["EMPTY_CELL"] extends TBoard[number][number] ? false : true;

/**
 * Check the gravity of the pieces in a specific column.
 * - Ensures that if a cell contains a player, all cells below it in the same column must also contain players.
 * - If a cell is empty, it checks if all cells below it are also empty.
 * - If a player is found above an empty cell, it returns false, indicating an invalid gravity condition.
 */
declare type CheckColumnGravity<
	TBoard extends Cell[][],
	TRules extends GameRules,
	TColIndex extends number,
	TRowIndex extends number = 0,
	TShouldBeAtBottom extends
		boolean = TBoard[TRowIndex][TColIndex] extends TRules["PLAYERS"][number]
		? true
		: false,
> =
	Equal<TRowIndex, TRules["ROW"]> extends true
		? true
		: TBoard[TRowIndex][TColIndex] extends TRules["PLAYERS"][number]
			? CheckColumnGravity<
					TBoard,
					TRules,
					TColIndex,
					Increment<TRowIndex>,
					true
				>
			: TShouldBeAtBottom extends true
				? false
				: CheckColumnGravity<
						TBoard,
						TRules,
						TColIndex,
						Increment<TRowIndex>,
						TShouldBeAtBottom
					>;

/**
 * Check the gravity of all columns in the Connect 4 board.
 * - Iterates through each column and checks if the gravity condition is satisfied.
 * - If any column fails the gravity check, it returns false.
 * - If all columns pass the gravity
 */
declare type CheckGravity<
	TBoard extends Cell[][],
	TRules extends GameRules,
	TColIndex extends number = 0,
> =
	IsTuple<TBoard> extends true
		? Equal<Increment<TColIndex>, TRules["COL"]> extends true
			? true
			: CheckColumnGravity<TBoard, TRules, TColIndex> extends true
				? CheckGravity<TBoard, TRules, Increment<TColIndex>>
				: false
		: never;

/**
 * Infer the errors in a 2D game board based on the game rules.
 * - Validates the board structure, dimensions, and player counts.
 * - Returns a string describing the error if any, or null if the board is valid.
 */
export declare type Infer2DBoardErrors<
	TBoard extends Cell[][],
	TRules extends GameRules,
	TGravityCheck extends `GRAVITY` | `NO_GRAVITY`,
> =
	TBoard extends Board<TRules>
		? And<
				Equal<TBoard["length"], TRules["ROW"]>,
				Equal<TBoard[number]["length"], TRules["COL"]>
			> extends true
			? Or<
					Equal<
						CountFlatten<TBoard, TRules["PLAYERS"][0]>,
						CountFlatten<TBoard, TRules["PLAYERS"][1]>
					>,
					Equal<
						CountFlatten<TBoard, TRules["PLAYERS"][0]>,
						Increment<CountFlatten<TBoard, TRules["PLAYERS"][1]>>
					>
				> extends true
				? TGravityCheck extends `GRAVITY`
					? CheckGravity<TBoard, TRules> extends true
						? null
						: ` ❌ Invalid board! The gravity of the pieces is not respected. `
					: null
				: ` ❌ Invalid board! The number of '${TRules["PLAYERS"][0]}' and '${TRules["PLAYERS"][1]}' must be equal or '${TRules["PLAYERS"][0]}' must have one more than '${TRules["PLAYERS"][1]}'. `
			: ` ❌ Invalid board! The board must have ${TRules["ROW"]} rows and ${TRules["COL"]} columns. `
		: ` ❌ Invalid board! The board must be a ${TRules["ROW"]}x${TRules["COL"]} 2D array with '${TRules["PLAYERS"][0]}', '${TRules["PLAYERS"][1]}' or '${TRules["EMPTY_CELL"]}'.  `;

/**
 * Infer the errors in the game rules.
 * - Validates the game rules structure, types, and values.
 * - Returns a string describing the error if any, or null if the rules are valid.
 */
export declare type Infer2DRulesErrors<TRules extends GameRules> =
	TRules extends GameRules
		? Or<
				Or<IsUnion<TRules["ROW"]>, IsUnion<TRules["COL"]>>,
				Or<
					Or<IsUnion<TRules["PLAYERS"]>, IsUnion<TRules["TARGET_SCORE"]>>,
					Or<
						Or<IsUnion<TRules["PLAYERS"][0]>, IsUnion<TRules["PLAYERS"][1]>>,
						IsUnion<TRules["EMPTY_CELL"]>
					>
				>
			> extends true
			? ` ❌ Invalid game rules! A rule must not be a union type. `
			: Or<
						Or<
							Equal<TRules["ROW"], GameRules["ROW"]>,
							Equal<TRules["COL"], GameRules["COL"]>
						>,
						Or<
							Or<
								Equal<TRules["PLAYERS"], GameRules["PLAYERS"]>,
								Equal<TRules["TARGET_SCORE"], GameRules["TARGET_SCORE"]>
							>,
							Or<
								Or<
									Equal<TRules["PLAYERS"][0], GameRules["PLAYERS"][0]>,
									Equal<TRules["PLAYERS"][1], GameRules["PLAYERS"][1]>
								>,
								Equal<TRules["EMPTY_CELL"], GameRules["EMPTY_CELL"]>
							>
						>
				  > extends true
				? " ❌ Invalid game rules! The rule values must be different from the native types (string, number, ...). "
				: Or<IsNegative<TRules["ROW"]>, IsFloat<TRules["ROW"]>> extends true
					? ` ❌ Invalid game rules! The number of rows (${TRules["ROW"]}) must be a positive integer. `
					: Or<IsNegative<TRules["COL"]>, IsFloat<TRules["COL"]>> extends true
						? ` ❌ Invalid game rules! The number of columns (${TRules["COL"]}) must be a positive integer. `
						: Or<
									IsNegative<TRules["TARGET_SCORE"]>,
									Or<
										IsZero<TRules["TARGET_SCORE"]>,
										IsFloat<TRules["TARGET_SCORE"]>
									>
							  > extends true
							? ` ❌ Invalid game rules! The target score (${TRules["TARGET_SCORE"]}) must be a positive integer. `
							: Not<Equal<TRules["PLAYERS"]["length"], 2>> extends true
								? " ❌ Invalid game rules! The players must be defined as a tuple of two strings. "
								: TRules["PLAYERS"] extends [
											infer P1 extends string,
											infer P2 extends string,
									  ]
									? Or<
											Or<
												Not<Equal<Split<P1>["length"], 1>>,
												Not<Equal<Split<P2>["length"], 1>>
											>,
											Not<Equal<Split<TRules["EMPTY_CELL"]>["length"], 1>>
										> extends true
										? " ❌ Invalid game rules! The players and empty cell must be single characters. "
										: Or<
													Equal<P1, P2>,
													Or<
														Equal<P1, TRules["EMPTY_CELL"]>,
														Equal<P2, TRules["EMPTY_CELL"]>
													>
											  > extends true
											? " ❌ Invalid game rules! The players must be different from each other and from the empty cell. "
											: Not<
														Between<
															TRules["COL"],
															BoardLimit["col"]["min"],
															BoardLimit["col"]["max"]
														>
												  > extends true
												? ` ❌ Invalid game rules! The number of columns (${TRules["COL"]}) must be between ${BoardLimit["col"]["min"]} and ${BoardLimit["col"]["max"]}. `
												: Not<
															Between<
																TRules["ROW"],
																BoardLimit["row"]["min"],
																BoardLimit["row"]["max"]
															>
													  > extends true
													? ` ❌ Invalid game rules! The number of rows (${TRules["ROW"]}) must be between ${BoardLimit["row"]["min"]} and ${BoardLimit["row"]["max"]}. `
													: Greater<
																TRules["TARGET_SCORE"],
																TRules["ROW"]
														  > extends true
														? ` ❌ Invalid game rules! The target score (${TRules["TARGET_SCORE"]}) must be less or equal to the number of rows (${TRules["ROW"]}). `
														: Greater<
																	TRules["TARGET_SCORE"],
																	TRules["COL"]
															  > extends true
															? ` ❌ Invalid game rules! The target score (${TRules["TARGET_SCORE"]}) must be less or equal to the number of columns (${TRules["COL"]}). `
															: null
									: " ❌ Invalid game rules! The players must be defined as a tuple of two strings. "
		: ` ❌ The rule '${Exclude<keyof GameRules, keyof TRules>}' is missing! `;
