import type { Reversed } from "../modules/reversed";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Reverse a string type",
		Test.It<Reversed<"hello">, "olleh", typeof Test.Out.PASS>(),
		Test.It<Reversed<`demo ${string}`>, string, typeof Test.Out.PASS>(),
		Test.It<Reversed<string>, string, typeof Test.Out.PASS>(),
	);
});
