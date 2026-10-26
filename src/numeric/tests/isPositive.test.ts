import type { IsPositive } from "../modules/isPositive";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Check if a number is a positive number",
		Test.It<IsPositive<number>, boolean, typeof Test.Out.PASS>(),
		Test.It<IsPositive<2.33>, true, typeof Test.Out.PASS>(),
		Test.It<IsPositive<-5>, false, typeof Test.Out.PASS>(),
	);
});
