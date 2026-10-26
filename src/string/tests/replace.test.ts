import type { Replace } from "../modules/replace";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Replace the first iteration of the character with another character",
		Test.It<Replace<"hello", "l", "x">, "hexlo", typeof Test.Out.PASS>(),
		Test.It<Replace<"hello", "l", string>, string, typeof Test.Out.PASS>(),
		Test.It<Replace<string, "b", "a">, string, typeof Test.Out.PASS>(),
	);
});
