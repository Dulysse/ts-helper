import type { Split } from "../modules/split";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Split a type to an array for each string characters apparition",
		Test.It<Split<"hello">, ["h", "e", "l", "l", "o"], typeof Test.Out.PASS>(),
		Test.It<Split<`demo ${string}`>, string[], typeof Test.Out.PASS>(),
		Test.It<Split<string>, string[], typeof Test.Out.PASS>(),
	);
});
