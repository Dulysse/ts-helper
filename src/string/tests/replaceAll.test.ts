import type { ReplaceAll } from "../modules/replaceAll";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Replace all iteration of the character with another character",
		Test.It<ReplaceAll<"hello", "l", "x">, "hexxo", typeof Test.Out.PASS>(),
		Test.It<ReplaceAll<"hello", "l", string>, string, typeof Test.Out.PASS>(),
		Test.It<ReplaceAll<string, "b", "a">, string, typeof Test.Out.PASS>(),
	);
});
