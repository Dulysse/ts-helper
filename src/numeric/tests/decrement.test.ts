import type { Decrement } from "../modules/decrement";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Decrement a number of one unit",
		Test.It<Decrement<1>, 0, typeof Test.Out.PASS>(),
		Test.It<Decrement<0.88>, -0.12, typeof Test.Out.PASS>(),
		Test.It<Decrement<number>, number, typeof Test.Out.PASS>(),
	);
});
