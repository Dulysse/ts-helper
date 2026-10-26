import type {
	BuildTuple,
	DecimalMap,
	IsValidNumberInput,
	PositiveRange,
	SubstractPositive,
} from "../utils";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for numeric utilities", () => {
	Test.Describe(
		"IsValidNumberInput",
		Test.It<IsValidNumberInput<23>, true, typeof Test.Out.PASS>(),
		Test.It<IsValidNumberInput<23 | 3434>, false, typeof Test.Out.PASS>(),
		Test.It<IsValidNumberInput<number>, false, typeof Test.Out.PASS>(),
		Test.It<IsValidNumberInput<23.34>, true, typeof Test.Out.PASS>(),
		Test.It<IsValidNumberInput<23.345>, false, typeof Test.Out.PASS>(),
	);

	Test.Describe(
		"BuildTuple",
		Test.It<BuildTuple<0>, [], typeof Test.Out.PASS>(),
		Test.It<BuildTuple<3>, [unknown, unknown, unknown], typeof Test.Out.PASS>(),
		Test.It<
			BuildTuple<5>,
			[unknown, unknown, unknown, unknown, unknown],
			typeof Test.Out.PASS
		>(),
		Test.It<
			BuildTuple<10>,
			[
				unknown,
				unknown,
				unknown,
				unknown,
				unknown,
				unknown,
				unknown,
				unknown,
				unknown,
				unknown,
			],
			typeof Test.Out.PASS
		>(),
	);

	Test.Describe(
		"SubstractPositive",
		Test.It<SubstractPositive<10, 3>, 7, typeof Test.Out.PASS>(),
		Test.It<SubstractPositive<100, 0>, 100, typeof Test.Out.PASS>(),
	);

	Test.Describe(
		"PositiveRange",
		Test.It<PositiveRange<0>, [], typeof Test.Out.PASS>(),
		Test.It<PositiveRange<5>, [1, 2, 3, 4, 5], typeof Test.Out.PASS>(),
	);

	Test.Describe(
		"DecimalMap",
		Test.It<DecimalMap[1], 99, typeof Test.Out.PASS>(),
		Test.It<DecimalMap[50], 50, typeof Test.Out.PASS>(),
		Test.It<DecimalMap[99], 1, typeof Test.Out.PASS>(),
	);
});
