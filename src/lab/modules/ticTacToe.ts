import type {
	Is2DBoardFull,
	Check2DVectors,
	VictoryPayload,
	GameRules,
	Infer2DBoardErrors,
	Infer2DRulesErrors,
	Reactive2DBoard,
	VICTORY,
	DRAW,
	CONTINUE,
} from "@/lab/utils/2d";

/**
 * The default rules for the TicTacToe game.
 */
declare interface TicTacToeDefaultRules {
	COL: 3;
	ROW: 3;
	TARGET_SCORE: 3;
	PLAYERS: ["X", "O"];
	EMPTY_CELL: ".";
}

/**
 *
 * ![Exemple here](https://raw.githubusercontent.com/Dulysse/ts-helper/refs/heads/main/assets/tictactoe.png)
 *
 * - Rules: {@link TicTacToeDefaultRules}
 *
 * - The TicTacToe type is a type-level implementation of the Tic Tac Toe game.
 * - It checks the current state of the game based on the provided board.
 * - It determines if the board is valid, checks for a win or draw condition, and provides the next player's turn.
 * - The board is represented as a one-dimensional array of cells, where each cell can be "X", "O", or empty.
 *
 * @template TBoard - The board type, which is an array of cells (X, O, or empty).
 * @template TRules - The game rules, which define the number of rows and columns, target score, players, and empty cell.
 * - The default rules are defined in `TicTacToeDefaultRules`.
 * - You can override these rules by providing your own rules type.
 * @example
 * ```tsx
 * import type { Lab } from "@dulysse1/ts-helper";
 *
 * type GAME = Lab.TicTacToe
 * //    ^?  "X, you won! 🎉"
 * <[
 *   ["X", "O", "X",]
 *   ["O", "X", "O",]
 *   ["O", "X", "X"]
 * ]>;
 * ```
 * ---------------------------
 * Do you have any questions about `TicTacToe` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type TicTacToe<
	TBoard extends Reactive2DBoard<TRules>,
	TRules extends GameRules = TicTacToeDefaultRules,
> =
	Infer2DRulesErrors<TRules> extends infer RULE_ERROR_MESSAGE extends string
		? RULE_ERROR_MESSAGE
		: Infer2DBoardErrors<
					TBoard,
					TRules,
					"NO_GRAVITY"
			  > extends infer BOARD_ERROR_MESSAGE extends string
			? BOARD_ERROR_MESSAGE
			: Check2DVectors<TBoard, TRules> extends infer PAYLOAD extends
						VictoryPayload
				? VICTORY<PAYLOAD>
				: Is2DBoardFull<TBoard, TRules> extends true
					? DRAW
					: CONTINUE<TBoard, TRules>;
