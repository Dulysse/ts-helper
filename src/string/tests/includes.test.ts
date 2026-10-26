import type { Includes } from "../modules/includes";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Check if a string type includes an element",
		Test.It<Includes<"hello", string>, boolean, typeof Test.Out.PASS>(),
		Test.It<Includes<"hello", "">, true, typeof Test.Out.PASS>(),
		Test.It<Includes<`hello${string}`, "">, boolean, typeof Test.Out.PASS>(),
		Test.It<Includes<`hello`, "z">, false, typeof Test.Out.PASS>(),
	);
});
