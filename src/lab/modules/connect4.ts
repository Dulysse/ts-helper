import type { Count, IsTuple } from "@/array";
import type { Increment, Decrement, Between } from "@/numeric";
import type { And, Equal, Or } from "@/operator";

/**
 * The `PlayerOne` type represents the first player in the Connect 4 game.
 * It is represented by the character "X".
 */
declare type PlayerOne = "X";
/**
 * The `PlayerTwo` type represents the second player in the Connect 4 game.
 * It is represented by the character "O".
 */
declare type PlayerTwo = "O";
/**
 * The `Player` type represents the two players in the Connect 4 game.
 */
declare type Player = PlayerOne | PlayerTwo;
/**
 * The `EmptyCell` type represents an empty cell in the Connect 4 game board.
 * It is represented by a dot (".") character.
 */
declare type EmptyCell = ".";
/**
 * The `Cell` type represents a cell in the Connect 4 game board.
 * It can either be occupied by a player ({@link PlayerOne} or {@link PlayerTwo}) or be an empty cell ({@link EmptyCell}).
 */
declare type Cell = Player | EmptyCell;
/**
 * The `MAX_COL` constant represents the maximum number of columns in the Connect 4 game board.
 * In this case, it is set to 7, meaning the board will have 7 columns.
 */
declare type MAX_COL = 7;
/**
 * The `MAX_ROW` constant represents the maximum number of rows in the Connect 4 game board.
 * In this case, it is set to 6, meaning the board will have 6 rows.
 */
declare type MAX_ROW = 6;
/**
 * The `WIN_SCORE_TARGET` constant represents the number of consecutive pieces required to win in Connect 4.
 * In this case, it is set to 4, meaning a player must have {@link WIN_SCORE_TARGET} pieces in a row (horizontally, vertically, or diagonally) to win.
 */
declare type WIN_SCORE_TARGET = 4;
/**
 * The `CellVector` type represents a cell in the Connect 4 game with its position and direction.
 */
declare type CellVector = {
	/**
	 * The row index of the cell in the Connect 4 board.
	 */
	row: number;
	/**
	 * The column index of the cell in the Connect 4 board.
	 */
	col: number;
	/**
	 * The player who occupies the cell, either {@link PlayerOne} or {@link PlayerTwo}.
	 */
	player: Player;
	/**
	 * The direction of the win {@link Vector}.
	 */
	dir: Vector;
};
/**
 * The `Vector` enum represents the possible directions in which a player can win in Connect 4.
 * - `HORIZONTAL`: Represents a horizontal win.
 * - `VERTICAL`: Represents a vertical win.
 * - `DIAGONAL_UP`: Represents a diagonal win from bottom-left to top-right.
 * - `DIAGONAL_DOWN`: Represents a diagonal win from top-left to bottom-right.
 */
declare enum Vector {
	HORIZONTAL = "horizontal",
	VERTICAL = "vertical",
	DIAGONAL_UP = "diagonal up",
	DIAGONAL_DOWN = "diagonal down",
}
/**
 * The next vector type represents the next cell in a specific direction based on the current cell vector.
 * It is used to determine the next cell to check for a win condition in the Connect 4 game.
 * @template TVector - The current cell vector.
 */
declare type NextVector<TVector extends CellVector> = {
	[Vector.HORIZONTAL]: {
		row: TVector["row"];
		col: Increment<TVector["col"]>;
		player: TVector["player"];
		dir: Vector.HORIZONTAL;
	};
	[Vector.VERTICAL]: {
		row: Increment<TVector["row"]>;
		col: TVector["col"];
		player: TVector["player"];
		dir: Vector.VERTICAL;
	};
	[Vector.DIAGONAL_UP]: {
		row: Decrement<TVector["row"]>;
		col: Increment<TVector["col"]>;
		player: TVector["player"];
		dir: Vector.DIAGONAL_UP;
	};
	[Vector.DIAGONAL_DOWN]: {
		row: Increment<TVector["row"]>;
		col: Increment<TVector["col"]>;
		player: TVector["player"];
		dir: Vector.DIAGONAL_DOWN;
	};
};

/**
 * The `WinPayload` type represents the payload returned when a player wins in the Connect 4 game.
 * It contains the following properties:
 * - `dir`: The direction of the win, represented by the {@link Vector} type.
 * - `player`: The player who won, represented by the {@link Player} type.
 * - `pos`: The position of the winning cell in the Connect 4 board, represented as a tuple of two numbers (row and column).
 */
declare type WinPayload = {
	/**
	 * The direction of the win.
	 */
	dir: `${Vector}`;
	/**
	 * The player who won.
	 */
	player: Player;
	/**
	 * The position of the winning cell in the Connect 4 board.
	 */
	pos: [number, number];
};

/**
 * Check if the board is full.
 */
declare type BoardIsFull<TBoard extends readonly Cell[][]> =
	TBoard extends readonly Cell[][]
		? EmptyCell extends TBoard[number][number]
			? false
			: true
		: false;

/**
 * Convert a 2D array (board) into a one-dimensional array.
 */
declare type Flat<
	TBoard extends readonly Cell[][],
	TIndex extends number = 0,
	TResult extends Cell[] = [],
> =
	IsTuple<TBoard> extends true
		? TBoard[TIndex] extends undefined
			? TResult
			: Flat<TBoard, Increment<TIndex>, [...TResult, ...TBoard[TIndex]]>
		: never;

/**
 * Count the number of occurrences of a specific cell type in a one-dimensional array.
 */
declare type CountCell<
	TBoard extends readonly Cell[][],
	TCell extends Cell,
> = Count<Flat<TBoard>, TCell>;

/**
 * Infer the board error based on the Connect 4 game rules.
 * - Checks if the board is a valid 2D array.
 * - Validates the number of rows and columns.
 * - Ensures the count of players is correct.
 * - Checks if the gravity of the pieces is correct.
 */
declare type InferBoardError<TBoard extends readonly Cell[][]> =
	TBoard extends readonly Cell[][]
		? And<
				Equal<TBoard["length"], MAX_ROW>,
				Equal<TBoard[number]["length"], MAX_COL>
			> extends true
			? Or<
					Equal<CountCell<TBoard, PlayerOne>, CountCell<TBoard, PlayerTwo>>,
					Equal<
						CountCell<TBoard, PlayerOne>,
						Increment<CountCell<TBoard, PlayerTwo>>
					>
				> extends true
				? CheckGravity<TBoard> extends true
					? null
					: " ❌ Invalid board! The pieces must fall to the bottom of the column. "
				: ` ❌ Invalid board! The number of '${PlayerOne}' and '${PlayerTwo}' must be equal or '${PlayerOne}' must have one more than '${PlayerTwo}'. `
			: ` ❌ Invalid board! The board must have ${MAX_ROW} rows and ${MAX_ROW} columns. `
		: " ❌ Invalid board! The board must be a 2D array. ";

/**
 * Check the gravity of the pieces in a specific column.
 * - Ensures that if a cell contains a player, all cells below it in the same column must also contain players.
 * - If a cell is empty, it checks if all cells below it are also empty.
 * - If a player is found above an empty cell, it returns false, indicating an invalid gravity condition.
 */
declare type CheckColumnGravity<
	TBoard extends readonly Cell[][],
	TColIndex extends number,
	TRowIndex extends number = 0,
	TShouldBeAtBottom extends
		boolean = TBoard[TRowIndex][TColIndex] extends Player ? true : false,
> =
	Equal<TRowIndex, MAX_ROW> extends true
		? true
		: TBoard[TRowIndex][TColIndex] extends Player
			? CheckColumnGravity<TBoard, TColIndex, Increment<TRowIndex>, true>
			: TShouldBeAtBottom extends true
				? false
				: CheckColumnGravity<
						TBoard,
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
	TBoard extends readonly Cell[][],
	TColIndex extends number = 0,
> =
	IsTuple<TBoard> extends true
		? Equal<Increment<TColIndex>, MAX_COL> extends true
			? true
			: CheckColumnGravity<TBoard, TColIndex> extends true
				? CheckGravity<TBoard, Increment<TColIndex>>
				: false
		: never;

/**
 * Check if a specific vector in the Connect 4 board has a winning condition.
 * - It recursively checks the next cell in the specified direction (vertical, horizontal, diagonal up, or diagonal down).
 * - If the score reaches the {@link WIN_SCORE_TARGET}, it returns true.
 * - If the next cell is out of bounds or does not match the player, it returns false.
 * - The recursion continues until either a win is found or the next cell is out of bounds.
 */
declare type CheckVectorWin<
	TBoard extends readonly Cell[][],
	TVector extends CellVector,
	TScore extends number = 1,
	TNextVector extends CellVector = NextVector<TVector>[TVector["dir"]],
> =
	Equal<TScore, WIN_SCORE_TARGET> extends true
		? true
		: And<
					Between<TNextVector["row"], 0, Decrement<MAX_ROW>>,
					Between<TNextVector["col"], 0, Decrement<MAX_COL>>
			  > extends true
			? Equal<
					TBoard[TNextVector["row"]][TNextVector["col"]],
					TVector["player"]
				> extends true
				? CheckVectorWin<TBoard, TNextVector, Increment<TScore>>
				: false
			: false;

/**
 * Check for a win condition in the Connect 4 board.
 * - Iterates through each cell in the board.
 * - For each cell occupied by a player, it checks in all four directions (vertical, horizontal, diagonal up, diagonal down) for a winning condition.
 */
declare type CheckWin<
	TBoard extends readonly Cell[][],
	TRowIndex extends number = 0,
	TColIndex extends number = 0,
> =
	IsTuple<TBoard> extends true
		? And<Equal<TColIndex, MAX_COL>, Equal<TRowIndex, MAX_ROW>> extends true
			? null
			: Equal<TColIndex, MAX_COL> extends true
				? CheckWin<TBoard, Increment<TRowIndex>, 0>
				: TBoard[TRowIndex][TColIndex] extends Player
					? CheckVectorWin<
							TBoard,
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
						: CheckVectorWin<
									TBoard,
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
							: CheckVectorWin<
										TBoard,
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
								: CheckVectorWin<
											TBoard,
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
									: CheckWin<TBoard, TRowIndex, Increment<TColIndex>>
					: CheckWin<TBoard, TRowIndex, Increment<TColIndex>>
		: never;

/**
 * Get the next player based on the current board state.
 * - If the count of PlayerOne is equal to the count of PlayerTwo, it returns PlayerOne.
 * - Otherwise, it returns PlayerTwo.
 */
declare type GetNextPlayer<TBoard extends readonly Cell[][]> =
	CountCell<TBoard, PlayerOne> extends CountCell<TBoard, PlayerTwo>
		? PlayerOne
		: PlayerTwo;

/**
 *
 * ![Exemple here](https://raw.githubusercontent.com/Dulysse/ts-helper/refs/heads/main/assets/connect4.png)
 *
 * - The Connect4 type is a type-level implementation of the Connect 4 game.
 * - It checks the validity of the board, determines the current player, and checks for a win or draw condition.
 * - It returns a string indicating the current player's turn, a win message, or a draw message.
 * - The board is represented as a 2D array of cells, where each cell can be a player ({@link PlayerOne} or {@link PlayerTwo}) or an empty cell ({@link EmptyCell}).
 * - The type uses various utility types to ensure the board is correctly formatted and to determine the game state.
 * - The game is played on a board with {@link MAX_ROW} rows and {@link MAX_COL} columns, and players take turns dropping their pieces into the columns.
 * - The type is designed to be used in a TypeScript environment, providing type safety and validation for the Connect 4 game.
 *
 * @template TBoard - The board of the Connect 4 game, represented as a 2D array of cells.
 * @example
 * ```tsx
 * import type { Lab } from "@dulysse1/ts-helper";
 *
 * type GAME = Lab.Connect4
 * //    ^?  " 'Player O', it's your turn. 🕹️ "
 * <[
 *		[".", ".", ".", ".", ".", ".", "."],
 *		[".", ".", ".", ".", ".", ".", "."],
 *		[".", ".", ".", ".", ".", ".", "."],
 *		[".", ".", ".", "X", ".", ".", "."],
 *		[".", ".", ".", "O", ".", ".", "."],
 *		[".", ".", ".", "X", ".", ".", "."],
 *]>;
 * ```
 * ---------------------------
 * Do you have any questions about `Connect4` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Connect4<TBoard extends readonly Cell[][]> =
	InferBoardError<TBoard> extends null
		? CheckWin<TBoard> extends infer Payload extends WinPayload
			? ` 🎉 Congratulation player '${Payload["player"]}', you won by ${Payload["dir"]} line at (${Payload["pos"][0]}, ${Payload["pos"][1]})! 🎉 Reset the board to play again. 🕹️ `
			: BoardIsFull<TBoard> extends true
				? " 🤝 It's a draw! 🤝 Reset the board to play again. 🕹️ "
				: ` 🕹️ Player '${GetNextPlayer<TBoard>}' it's your turn. 🕹️ `
		: InferBoardError<TBoard>;
