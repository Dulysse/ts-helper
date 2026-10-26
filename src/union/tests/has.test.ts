import type { Has } from "../modules/has";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Check if a type is an element of an union type",
		Test.It<Has<1 | 2 | 3, number>, boolean, typeof Test.Out.PASS>(),
		Test.It<Has<1 | 2 | 3, 2>, true, typeof Test.Out.PASS>(),
		Test.It<Has<string, "demo">, false, typeof Test.Out.PASS>(),
	);
});
