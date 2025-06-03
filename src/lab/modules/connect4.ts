import type { Count, IsTuple } from "@/array";
import type { Increment, Decrement } from "@/numeric";
import type { And, Equal, Not, Or, Satisfy } from "@/operator";

declare type Player = "X" | "O";
declare type EmptyCell = ".";
declare type Cell = Player | EmptyCell;
declare type MAX_COL = 7;
declare type MAX_ROW = 6;
declare type WIN_COUNT = 4;
declare type CellVector = {
	row: number;
	col: number;
	player: Player;
	dir: "up" | "down";
};

declare type BoardIsFull<TBoard extends readonly Cell[][]> =
	TBoard extends readonly Cell[][]
		? "." extends TBoard[number][number]
			? false
			: true
		: false;

declare type CountCell<
	TBoard extends readonly Cell[][],
	TCell extends Cell,
> = Count<ToOneDimension<TBoard>, TCell>;

declare type InferBoardError<TBoard extends readonly Cell[][]> =
	TBoard extends readonly Cell[][]
		? And<
				Equal<TBoard["length"], MAX_ROW>,
				Equal<TBoard[number]["length"], MAX_COL>
			> extends true
			? Or<
					Equal<CountCell<TBoard, "X">, CountCell<TBoard, "O">>,
					Equal<CountCell<TBoard, "X">, Increment<CountCell<TBoard, "O">>>
				> extends true
				? CheckGravity<TBoard> extends true
					? null
					: " ❌ Invalid board gravity! The pieces must fall to the bottom of the column. "
				: " ❌ Invalid board players! The number of X and O must be equal or X must have one more than O. "
			: " ❌ Invalid board count! The board must have 6 rows and 7 columns. "
		: " ❌ Invalid board shape! The board must be a 2D array. ";

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

declare type CheckRowWin<
	TRow extends readonly Cell[],
	TColIndex extends number = 0,
	TCount extends number = 0,
	TPlayer extends Player = Satisfy<TRow[TColIndex], Player>,
> =
	Equal<TCount, WIN_COUNT> extends true
		? true
		: Equal<TColIndex, MAX_COL> extends true
			? false
			: Equal<TRow[TColIndex], TPlayer> extends true
				? CheckRowWin<TRow, Increment<TColIndex>, Increment<TCount>, TPlayer>
				: CheckRowWin<
						TRow,
						Increment<TColIndex>,
						TRow[TColIndex] extends Player ? 1 : 0,
						TRow[TColIndex] extends Player ? TRow[TColIndex] : TPlayer
					>;

declare type CheckHorizontalWin<
	TBoard extends readonly Cell[][],
	TRowIndex extends number = 0,
> =
	IsTuple<TBoard> extends true
		? Equal<TRowIndex, MAX_ROW> extends true
			? false
			: CheckRowWin<TBoard[TRowIndex]> extends true
				? true
				: CheckHorizontalWin<TBoard, Increment<TRowIndex>>
		: never;

declare type CheckColumnWin<
	TBoard extends readonly Cell[][],
	TColIndex extends number,
	TRowIndex extends number = 0,
	TCount extends number = 0,
	TPlayer extends Player = Satisfy<TBoard[TRowIndex][TColIndex], Player>,
> =
	Equal<TCount, WIN_COUNT> extends true
		? true
		: Equal<TRowIndex, MAX_ROW> extends true
			? false
			: Equal<TBoard[TRowIndex][TColIndex], TPlayer> extends true
				? CheckColumnWin<
						TBoard,
						TColIndex,
						Increment<TRowIndex>,
						Increment<TCount>,
						TPlayer
					>
				: CheckColumnWin<
						TBoard,
						TColIndex,
						Increment<TRowIndex>,
						TBoard[TRowIndex][TColIndex] extends Player ? 1 : 0,
						TBoard[TRowIndex][TColIndex] extends Player
							? TBoard[TRowIndex][TColIndex]
							: TPlayer
					>;

declare type CheckVerticalWin<
	TBoard extends readonly Cell[][],
	TColIndex extends number = 0,
> =
	IsTuple<TBoard> extends true
		? Equal<TColIndex, MAX_COL> extends true
			? false
			: CheckColumnWin<TBoard, TColIndex> extends true
				? true
				: CheckVerticalWin<TBoard, Increment<TColIndex>>
		: never;

declare type CheckDiagonalVectorWin<
	TBoard extends readonly Cell[][],
	TVector extends CellVector,
	TCount extends number = 1,
> =
	Equal<TCount, WIN_COUNT> extends true
		? true
		: Equal<TVector["dir"], "up"> extends true
			? And<
					Not<Equal<Decrement<TVector["row"]>, -1>>,
					Not<Equal<Increment<TVector["col"]>, MAX_COL>>
				> extends true
				? Equal<
						TBoard[Decrement<TVector["row"]>][Increment<TVector["col"]>],
						TVector["player"]
					> extends true
					? CheckDiagonalVectorWin<
							TBoard,
							{
								row: Decrement<TVector["row"]>;
								col: Increment<TVector["col"]>;
								player: TVector["player"];
								dir: "up";
							},
							Increment<TCount>
						>
					: false
				: false
			: Equal<TVector["dir"], "down"> extends true
				? And<
						Not<Equal<Increment<TVector["row"]>, MAX_ROW>>,
						Not<Equal<Increment<TVector["col"]>, MAX_COL>>
					> extends true
					? Equal<
							TBoard[Increment<TVector["row"]>][Increment<TVector["col"]>],
							TVector["player"]
						> extends true
						? CheckDiagonalVectorWin<
								TBoard,
								{
									row: Increment<TVector["row"]>;
									col: Increment<TVector["col"]>;
									player: TVector["player"];
									dir: "down";
								},
								Increment<TCount>
							>
						: false
					: false
				: never;

declare type CheckDiagonalWin<
	TBoard extends readonly Cell[][],
	TRowIndex extends number = 0,
	TColIndex extends number = 0,
> =
	IsTuple<TBoard> extends true
		? And<Equal<TColIndex, MAX_COL>, Equal<TRowIndex, MAX_ROW>> extends true
			? false
			: Equal<TColIndex, MAX_COL> extends true
				? CheckDiagonalWin<TBoard, Increment<TRowIndex>, 0>
				: TBoard[TRowIndex][TColIndex] extends Player
					? Or<
							CheckDiagonalVectorWin<
								TBoard,
								{
									row: TRowIndex;
									col: TColIndex;
									player: TBoard[TRowIndex][TColIndex];
									dir: "up";
								}
							>,
							CheckDiagonalVectorWin<
								TBoard,
								{
									row: TRowIndex;
									col: TColIndex;
									player: TBoard[TRowIndex][TColIndex];
									dir: "down";
								}
							>
						> extends true
						? true
						: CheckDiagonalWin<TBoard, TRowIndex, Increment<TColIndex>>
					: CheckDiagonalWin<TBoard, TRowIndex, Increment<TColIndex>>
		: never;

declare type CheckWin<TBoard extends readonly Cell[][]> = Or<
	Satisfy<Or<CheckHorizontalWin<TBoard>, CheckVerticalWin<TBoard>>, boolean>,
	CheckDiagonalWin<TBoard>
>;

declare type GetNextPlayer<TBoard extends readonly Cell[][]> =
	CountCell<TBoard, "X"> extends CountCell<TBoard, "O"> ? "X" : "O";

declare type GetCurrentPlayer<TBoard extends readonly Cell[][]> =
	GetNextPlayer<TBoard> extends "O" ? "X" : "O";

declare type ToOneDimension<
	TBoard extends readonly Cell[][],
	TIndex extends number = 0,
	TResult extends Cell[] = [],
> =
	IsTuple<TBoard> extends true
		? TBoard[TIndex] extends undefined
			? TResult
			: ToOneDimension<
					TBoard,
					Increment<TIndex>,
					[...TResult, ...TBoard[TIndex]]
				>
		: never;

/**
 *
 * ![Exemple here](https://raw.githubusercontent.com/Dulysse/ts-helper/refs/heads/main/assets/connect4.png)
 *
 * - The Connect4 type is a type-level implementation of the Connect 4 game.
 * - It checks the validity of the board, determines the current player, and checks for a win or draw condition.
 * - It returns a string indicating the current player's turn, a win message, or a draw message.
 * - The board is represented as a 2D array of cells, where each cell can be a player ("X" or "O") or an empty cell (".").
 * - The type uses various utility types to ensure the board is correctly formatted and to determine the game state.
 * - The game is played on a board with 6 rows and 7 columns, and players take turns dropping their pieces into the columns.
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
 *		[".", ".", ".", ".", ".", ".", "."],
 *		[".", ".", ".", "O", ".", ".", "."],
 *		[".", ".", "X", "X", ".", ".", "."],
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
		? CheckWin<TBoard> extends true
			? ` 'Player ${GetCurrentPlayer<TBoard>}', you won! 🎉 Please reset the board to play again. 🕹️ `
			: BoardIsFull<TBoard> extends true
				? " It's a draw! 🤝 "
				: ` 'Player ${GetNextPlayer<TBoard>}' it's your turn. 🕹️ `
		: InferBoardError<TBoard>;
