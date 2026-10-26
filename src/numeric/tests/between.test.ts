import type { Between } from "../modules/between";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Check if a number is between two other numbers",
		Test.It<Between<1, 1, 5>, true, typeof Test.Out.PASS>(),
		Test.It<Between<0, 10, 20>, true, typeof Test.Out.FAIL>(),
		Test.It<Between<number, 10, 7>, boolean, typeof Test.Out.PASS>(),
	);
});
