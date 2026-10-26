import type { _Lower, Lower } from "../modules/lower";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Check if a number is lower than another",
		Test.It<Lower<1, 2>, true, typeof Test.Out.PASS>(),
		Test.It<Lower<2, 2>, true, typeof Test.Out.FAIL>(),
		Test.It<Lower<number, 2>, boolean, typeof Test.Out.PASS>(),
	);
});
