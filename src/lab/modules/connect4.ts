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
	ERRORS,
} from "@/lab/utils/2d";

import * as Test from "@/test/local";

declare type EmptyBoardExample = [
	[".", ".", ".", ".", ".", ".", "."],
	[".", ".", ".", ".", ".", ".", "."],
	[".", ".", ".", ".", ".", ".", "."],
	[".", ".", ".", ".", ".", ".", "."],
	[".", ".", ".", ".", ".", ".", "."],
	[".", ".", ".", ".", ".", ".", "."],
];

declare type FullBoardExample = [
	["O", "X", "X", "O", "O", "X", "O"],
	["X", "O", "O", "X", "X", "O", "X"],
	["O", "O", "X", "O", "O", "X", "O"],
	["X", "X", "O", "X", "O", "O", "X"],
	["O", "O", "X", "O", "X", "X", "O"],
	["X", "O", "X", "X", "X", "O", "X"],
];

declare type VictoryBoardExample = [
	[".", ".", ".", ".", ".", ".", "."],
	[".", ".", ".", ".", ".", ".", "."],
	[".", ".", ".", ".", ".", ".", "."],
	[".", ".", ".", "X", "O", ".", "."],
	[".", ".", ".", "O", "O", ".", "."],
	[".", ".", "O", "X", "X", "X", "X"],
];

declare type IncorrectBoardExample = [
	[".", ".", ".", ".", ".", ".", "."],
	[".", ".", ".", ".", ".", ".", "."],
	[".", ".", ".", ".", ".", ".", "."],
	[".", ".", "X", ".", ".", ".", "."],
	[".", ".", ".", ".", ".", ".", "."],
	[".", ".", ".", ".", ".", ".", "."],
];

declare type BadRulesInt = {
	COL: -1;
	ROW: 6;
	TARGET_SCORE: 4;
	PLAYERS: ["X", "O"];
	EMPTY_CELL: ".";
};

declare type BadRulesScore = {
	COL: 7;
	ROW: 6;
	TARGET_SCORE: 90;
	PLAYERS: ["X", "O"];
	EMPTY_CELL: ".";
};

Test.Describe(
	"The Connect4 type is a type level implementation of the Connect 4 game",
	Test.It<
		Connect4<EmptyBoardExample>,
		CONTINUE<EmptyBoardExample, Connect4DefaultRules>,
		Test.Out.PASS
	>(),
	Test.It<Connect4<FullBoardExample>, DRAW, Test.Out.PASS>(),
	Test.It<
		Connect4<VictoryBoardExample>,
		VICTORY<Check2DVectors<VictoryBoardExample, Connect4DefaultRules>>,
		Test.Out.PASS
	>(),
	Test.It<
		Connect4<IncorrectBoardExample>,
		ERRORS<Connect4DefaultRules>["GRAVITY"],
		Test.Out.PASS
	>(),
	Test.It<
		Connect4<never, BadRulesInt>,
		ERRORS<BadRulesInt>["RULE_COL_INT"],
		Test.Out.PASS
	>(),
	Test.It<
		Connect4<never, BadRulesScore>,
		ERRORS<BadRulesScore>["RULE_SCORE_GTR_ROW"],
		Test.Out.PASS
	>(),
);

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
	 * - The default player one is represented by "X".
	 * - The default player two is represented by "O".
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
 * - The board is represented as a 2D array of cells, where each cell can be a player ({@link Connect4DefaultRules}).
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
