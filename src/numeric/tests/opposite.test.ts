import type { Opposite } from "../modules/opposite";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Get the opposite number sign of a number",
		Test.It<Opposite<10.23>, -10.23, typeof Test.Out.PASS>(),
		Test.It<Opposite<0>, 0, typeof Test.Out.PASS>(),
		Test.It<Opposite<number>, number, typeof Test.Out.PASS>(),
	);
});
