import type { IsFloat } from "../modules/isFloat";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Check if a number is a float number",
		Test.It<IsFloat<number>, boolean, typeof Test.Out.PASS>(),
		Test.It<IsFloat<2.33>, true, typeof Test.Out.PASS>(),
		Test.It<IsFloat<-5>, false, typeof Test.Out.PASS>(),
	);
});
