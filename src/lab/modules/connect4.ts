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
 * The default rules for the Connect 4 game.
 */
declare interface Connect4DefaultRules {
	COL: 7;
	ROW: 6;
	TARGET_SCORE: 4;
	PLAYERS: ["X", "O"];
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
 * - The board is represented as a 2D array of cells, where each cell can be a player ({@link Connect4DefaultRules}).
 * - The type uses various utility types to ensure the board is correctly formatted and to determine the game state.
 * - The game is played on a board with {@link Connect4DefaultRules.ROW} rows and {@link Connect4DefaultRules.COL} columns, and players take turns dropping their pieces into the columns.
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
	TBoard extends Reactive2DBoard<TRules>,
	TRules extends GameRules = Connect4DefaultRules,
> =
	Infer2DRulesErrors<TRules> extends infer RULE_ERROR_MESSAGE extends string
		? RULE_ERROR_MESSAGE
		: Infer2DBoardErrors<
					TBoard,
					TRules,
					"GRAVITY"
			  > extends infer BOARD_ERROR_MESSAGE extends string
			? BOARD_ERROR_MESSAGE
			: Check2DVectors<TBoard, TRules> extends infer PAYLOAD extends
						VictoryPayload
				? VICTORY<PAYLOAD>
				: Is2DBoardFull<TBoard, TRules> extends true
					? DRAW
					: CONTINUE<TBoard, TRules>;
