import type { GreaterEq } from "../modules/greaterEq";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Check if a number is greater or equal than another",
		Test.It<GreaterEq<1, 2>, true, typeof Test.Out.FAIL>(),
		Test.It<GreaterEq<2, 2>, true, typeof Test.Out.PASS>(),
		Test.It<GreaterEq<number, 2>, boolean, typeof Test.Out.PASS>(),
	);
});
