import type {
	Comparators,
	_CompareDecimals,
	_ComparePositive,
	_Compare,
	Compare,
} from "../modules/compare";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Compare a number to another",
		Test.It<Compare<1, 1>, Comparators.EQUAL, typeof Test.Out.PASS>(),
		Test.It<Compare<1.01, 1.02>, Comparators.LOWER, typeof Test.Out.PASS>(),
		Test.It<Compare<230, 890>, Comparators.GREATER, typeof Test.Out.FAIL>(),
	);
});
