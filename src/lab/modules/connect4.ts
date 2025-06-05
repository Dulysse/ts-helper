import type {
	IsBoardFull,
	Check2DVectors,
	NextPlayer,
	VictoryPayload,
	GameRules,
	Infer2DGameErrors,
	ReactiveBoard,
} from "@/lab/utils/2d";
import type { Increment } from "@/numeric";

/**
 * The default rules for the Connect 4 game.
 * - The board is a 7x6 grid.
 * - The target score to win is 4 (four in a row).
 * - The players are represented by "X" and "O".
 * - The empty cell is represented by "." (dot).
 */
declare interface Connect4DefaultRules {
	/**
	 * The number of columns in the Connect 4 game board.
	 */
	COL: 7;
	/**
	 * The number of rows in the Connect 4 game board.
	 */
	ROW: 6;
	/**
	 * The target score for a win in Connect 4.
	 */
	TARGET_SCORE: 4;
	/**
	 * The players in the Connect 4 game.
	 * - DefaultPlayerOne is represented by "X".
	 * - DefaultPlayerTwo is represented by "O".
	 */
	PLAYERS: ["X", "O"];
	/**
	 * The empty cell in the Connect 4 game.
	 * - Represented by "." (dot).
	 */
	EMPTY_CELL: ".";
}

/**
 *
 * ![Exemple here](https://raw.githubusercontent.com/Dulysse/ts-helper/refs/heads/main/assets/connect4.png)
 *
 * - Rules: {@link Connect4DefaultRules}
 *
 * - The Connect4 type is a type-level implementation of the Connect 4 game.
 * - It checks the validity of the board, determines the current player, and checks for a win or draw condition.
 * - It returns a string indicating the current player's turn, a win message, or a draw message.
 * - The board is represented as a 2D array of cells, where each cell can be a player ({@link DefaultPlayerOne} or {@link DefaultPlayerTwo}) or an empty cell ({@link EmptyCell}).
 * - The type uses various utility types to ensure the board is correctly formatted and to determine the game state.
 * - The game is played on a board with {@link C4_DEFAULT_MAX_ROW} rows and {@link C4_DEFAULT_MAX_COL} columns, and players take turns dropping their pieces into the columns.
 * - The type is designed to be used in a TypeScript environment, providing type safety and validation for the Connect 4 game.
 *
 * @template TBoard - The board of the Connect 4 game, represented as a 2D array of cells.
 * @template TRules - The game rules, which define the number of rows and columns, target score, players, and empty cell.
 * - The default rules are defined in `Connect4DefaultRules`.
 * - You can override these rules by providing your own rules type.
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
export declare type Connect4<
	TBoard extends ReactiveBoard<TRules>,
	TRules extends GameRules = Connect4DefaultRules,
> =
	Infer2DGameErrors<TBoard, TRules, "GRAVITY"> extends null
		? Check2DVectors<TBoard, TRules> extends infer Payload extends
				VictoryPayload
			? ` 🎉 Congratulation player '${Payload["player"]}', you won by ${Payload["dir"]} line at (${Increment<Payload["pos"][0]>}, ${Increment<Payload["pos"][1]>})! 🎉 Reset the board to play again. 🕹️ `
			: IsBoardFull<TBoard, TRules> extends true
				? " 🤝 It's a draw! 🤝 Reset the board to play again. 🕹️ "
				: ` 🕹️ Player '${NextPlayer<TBoard, TRules>}' it's your turn. 🕹️ `
		: Infer2DGameErrors<TBoard, TRules, "GRAVITY">;
