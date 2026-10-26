import type { If } from "../modules/if";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Conditional type If that returns Then or Else based on Condition",
		Test.It<If<true, string, number>, string, typeof Test.Out.PASS>(),
		Test.It<If<false, string, number>, number, typeof Test.Out.PASS>(),
		Test.It<
			If<boolean, string, number>,
			string | number,
			typeof Test.Out.PASS
		>(),
	);
});
