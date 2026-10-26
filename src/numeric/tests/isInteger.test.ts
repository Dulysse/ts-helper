import type { IsInteger } from "../modules/isInteger";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Check if a number is an integer number",
		Test.It<IsInteger<number>, boolean, typeof Test.Out.PASS>(),
		Test.It<IsInteger<2.33>, false, typeof Test.Out.PASS>(),
		Test.It<IsInteger<-5>, true, typeof Test.Out.PASS>(),
	);
});
