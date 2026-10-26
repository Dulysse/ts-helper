import type { IsNegative } from "../modules/isNegative";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Check if a number is a negative number",
		Test.It<IsNegative<number>, boolean, typeof Test.Out.PASS>(),
		Test.It<IsNegative<2.33>, false, typeof Test.Out.PASS>(),
		Test.It<IsNegative<-5>, true, typeof Test.Out.PASS>(),
	);
});
