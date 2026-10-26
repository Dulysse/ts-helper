import type { Factorial } from "../modules/factorial";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Get the factorial of a number",
		Test.It<Factorial<0>, 1, typeof Test.Out.PASS>(),
		Test.It<Factorial<-3>, -6, typeof Test.Out.PASS>(),
		Test.It<Factorial<5>, 120, typeof Test.Out.PASS>(),
		Test.It<Factorial<1.2>, 1, typeof Test.Out.FAIL>(),
	);
});
