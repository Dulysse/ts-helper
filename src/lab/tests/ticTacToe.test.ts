import type {
	Check2DVectors,
	VICTORY,
	DRAW,
	CONTINUE,
	ERRORS,
} from "@/lab/utils/2d";
import type { TicTacToe } from "../modules/ticTacToe";
import { Test } from "@/test";
import { it } from "vitest";

type EmptyBoardExample = [[".", ".", "."], [".", ".", "."], [".", ".", "."]];

type FullBoardExample = [["X", "X", "O"], ["O", "O", "X"], ["X", "O", "X"]];

type VictoryBoardExample = [["X", ".", "."], ["X", "X", "O"], ["O", "O", "X"]];

type IncorrectBoardExample = [
	["X", "X", "X"],
	["X", "X", "O"],
	["O", "O", "X"],
];

interface TicTacToeDefaultRules {
	COL: 3;
	ROW: 3;
	TARGET_SCORE: 3;
	PLAYERS: ["X", "O"];
	EMPTY_CELL: ".";
}

it("type tests pass for this module", () => {
	Test.Describe(
		"The TicTacToe type is a type level implementation of the Tic Tac Toe game",
		Test.It<
			TicTacToe<EmptyBoardExample>,
			CONTINUE<EmptyBoardExample, TicTacToeDefaultRules>,
			typeof Test.Out.PASS
		>(),
		Test.It<TicTacToe<FullBoardExample>, DRAW, typeof Test.Out.PASS>(),
		Test.It<
			TicTacToe<VictoryBoardExample>,
			VICTORY<Check2DVectors<VictoryBoardExample, TicTacToeDefaultRules>>,
			typeof Test.Out.PASS
		>(),
		Test.It<
			TicTacToe<IncorrectBoardExample>,
			ERRORS<TicTacToeDefaultRules>["PLAYER_TURN"],
			typeof Test.Out.PASS
		>(),
	);
});
