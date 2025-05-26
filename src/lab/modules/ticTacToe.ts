import type { Count } from "@/array";
import type { Increment } from "@/numeric";
import type { Equal, Or } from "@/operator";

declare type Player = "X" | "O";

declare type Cell = Player | "" | " " | undefined | null;

declare type BoardIsCorrect<TBoard extends readonly Cell[]> =
	TBoard["length"] extends 9
		? TBoard extends Cell[]
			? Or<
					Equal<Count<TBoard, "X">, Count<TBoard, "O">>,
					Equal<Count<TBoard, "X">, Increment<Count<TBoard, "O">>>
				>
			: false
		: false;

declare type GetNextPlayer<TBoard extends readonly Cell[]> =
	Count<TBoard, "X"> extends Count<TBoard, "O"> ? "X" : "O";

declare type GetCurrentPlayer<TBoard extends readonly Cell[]> =
	GetNextPlayer<TBoard> extends "O" ? "X" : "O";

declare type CheckWin<TBoard extends readonly Cell[]> = [
	TBoard[0],
	TBoard[1],
	TBoard[2],
] extends [
	GetCurrentPlayer<TBoard>,
	GetCurrentPlayer<TBoard>,
	GetCurrentPlayer<TBoard>,
]
	? true
	: [TBoard[3], TBoard[4], TBoard[5]] extends [
				GetCurrentPlayer<TBoard>,
				GetCurrentPlayer<TBoard>,
				GetCurrentPlayer<TBoard>,
		  ]
		? true
		: [TBoard[6], TBoard[7], TBoard[8]] extends [
					GetCurrentPlayer<TBoard>,
					GetCurrentPlayer<TBoard>,
					GetCurrentPlayer<TBoard>,
			  ]
			? true
			: [TBoard[0], TBoard[3], TBoard[6]] extends [
						GetCurrentPlayer<TBoard>,
						GetCurrentPlayer<TBoard>,
						GetCurrentPlayer<TBoard>,
				  ]
				? true
				: [TBoard[1], TBoard[4], TBoard[7]] extends [
							GetCurrentPlayer<TBoard>,
							GetCurrentPlayer<TBoard>,
							GetCurrentPlayer<TBoard>,
					  ]
					? true
					: [TBoard[2], TBoard[5], TBoard[8]] extends [
								GetCurrentPlayer<TBoard>,
								GetCurrentPlayer<TBoard>,
								GetCurrentPlayer<TBoard>,
						  ]
						? true
						: [TBoard[0], TBoard[4], TBoard[8]] extends [
									GetCurrentPlayer<TBoard>,
									GetCurrentPlayer<TBoard>,
									GetCurrentPlayer<TBoard>,
							  ]
							? true
							: [TBoard[2], TBoard[4], TBoard[6]] extends [
										GetCurrentPlayer<TBoard>,
										GetCurrentPlayer<TBoard>,
										GetCurrentPlayer<TBoard>,
								  ]
								? true
								: false;

declare type BoardIsFull<TBoard extends readonly Cell[]> =
	"" extends TBoard[number] ? false : true;

/**
 * - The TicTacToe type is a type-level implementation of the Tic Tac Toe game.
 *
 * @template TBoard - The board type, which is an array of cells (X, O, or empty).
 * ---------------------------
 * @example
 * ```tsx
 * import type { Lab } from "@dulysse1/ts-helper";
 *
 * type GAME = Lab.TicTacToe
 * //    ^?  "X, you won! 🎉"
 * <[
 *   "X", "O", "X",
 *   "O", "X", "O",
 *   "O", "X", "X"
 * ]>;
 * ```
 * ---------------------------
 * Do you have any questions about {@link TicTacToe} usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type TicTacToe<TBoard extends readonly Cell[]> =
	BoardIsCorrect<TBoard> extends true
		? CheckWin<TBoard> extends true
			? `${GetCurrentPlayer<TBoard>}, you won! 🎉`
			: BoardIsFull<TBoard> extends true
				? "Draw! 🤝"
				: `${GetNextPlayer<TBoard>} it's your turn. 🕹️`
		: "Invalid board! Please check the number of X and O on the board. 🧐";
