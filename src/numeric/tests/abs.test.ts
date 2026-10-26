import type { Abs } from "../modules/abs";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Check if a number is a float number",
		Test.It<Abs<number>, number, typeof Test.Out.PASS>(),
		Test.It<Abs<2.33>, 2, typeof Test.Out.PASS>(),
		Test.It<Abs<-5>, -5, typeof Test.Out.PASS>(),
	);
});
