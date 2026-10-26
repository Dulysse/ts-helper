import type { _LowerEq, LowerEq } from "../modules/lowerEq";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Check if a number is lower or equal than another",
		Test.It<LowerEq<10, 2>, true, typeof Test.Out.FAIL>(),
		Test.It<LowerEq<2, 2>, true, typeof Test.Out.PASS>(),
		Test.It<LowerEq<number, 2>, boolean, typeof Test.Out.PASS>(),
	);
});
