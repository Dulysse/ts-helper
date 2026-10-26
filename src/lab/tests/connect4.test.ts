import type {
	Check2DVectors,
	VICTORY,
	DRAW,
	CONTINUE,
	ERRORS,
} from "@/lab/utils/2d";
import type { Connect4 } from "../modules/connect4";
import { Test } from "@/test";
import { it } from "vitest";

type EmptyBoardExample = [
	[".", ".", ".", ".", ".", ".", "."],
	[".", ".", ".", ".", ".", ".", "."],
	[".", ".", ".", ".", ".", ".", "."],
	[".", ".", ".", ".", ".", ".", "."],
	[".", ".", ".", ".", ".", ".", "."],
	[".", ".", ".", ".", ".", ".", "."],
];

type FullBoardExample = [
	["O", "X", "X", "O", "O", "X", "O"],
	["X", "O", "O", "X", "X", "O", "X"],
	["O", "O", "X", "O", "O", "X", "O"],
	["X", "X", "O", "X", "O", "O", "X"],
	["O", "O", "X", "O", "X", "X", "O"],
	["X", "O", "X", "X", "X", "O", "X"],
];

type VictoryBoardExample = [
	[".", ".", ".", ".", ".", ".", "."],
	[".", ".", ".", ".", ".", ".", "."],
	[".", ".", ".", ".", ".", ".", "."],
	[".", ".", ".", "X", "O", ".", "."],
	[".", ".", ".", "O", "O", ".", "."],
	[".", ".", "O", "X", "X", "X", "X"],
];

type IncorrectBoardExample = [
	[".", ".", ".", ".", ".", ".", "."],
	[".", ".", ".", ".", ".", ".", "."],
	[".", ".", ".", ".", ".", ".", "."],
	[".", ".", "X", ".", ".", ".", "."],
	[".", ".", ".", ".", ".", ".", "."],
	[".", ".", ".", ".", ".", ".", "."],
];

type BadRulesInt = {
	COL: -1;
	ROW: 6;
	TARGET_SCORE: 4;
	PLAYERS: ["X", "O"];
	EMPTY_CELL: ".";
};

type BadRulesScore = {
	COL: 7;
	ROW: 6;
	TARGET_SCORE: 90;
	PLAYERS: ["X", "O"];
	EMPTY_CELL: ".";
};

interface Connect4DefaultRules {
	COL: 7;
	ROW: 6;
	TARGET_SCORE: 4;
	PLAYERS: ["X", "O"];
	EMPTY_CELL: ".";
}

it("type tests pass for this module", () => {
	Test.Describe(
		"The Connect4 type is a type level implementation of the Connect 4 game",
		Test.It<
			Connect4<EmptyBoardExample>,
			CONTINUE<EmptyBoardExample, Connect4DefaultRules>,
			typeof Test.Out.PASS
		>(),
		Test.It<Connect4<FullBoardExample>, DRAW, typeof Test.Out.PASS>(),
		Test.It<
			Connect4<VictoryBoardExample>,
			VICTORY<Check2DVectors<VictoryBoardExample, Connect4DefaultRules>>,
			typeof Test.Out.PASS
		>(),
		Test.It<
			Connect4<IncorrectBoardExample>,
			ERRORS<Connect4DefaultRules>["GRAVITY"],
			typeof Test.Out.PASS
		>(),
		Test.It<
			Connect4<never, BadRulesInt>,
			ERRORS<BadRulesInt>["RULE_COL_INT"],
			typeof Test.Out.PASS
		>(),
		Test.It<
			Connect4<never, BadRulesScore>,
			ERRORS<BadRulesScore>["RULE_SCORE_GTR_ROW"],
			typeof Test.Out.PASS
		>(),
	);
});
