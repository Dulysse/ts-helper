import type { Includes } from "../modules/includes";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Check if a type is an element into an array type",
		Test.It<Includes<[[1, 2], [3, 4]], [1, 2]>, true, typeof Test.Out.PASS>(),
		Test.It<Includes<string[][], string>, false, typeof Test.Out.PASS>(),
		Test.It<Includes<string[], string>, boolean, typeof Test.Out.PASS>(),
	);
});
