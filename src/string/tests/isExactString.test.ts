import type { IsExactString } from "../modules/isExactString";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Check if a string type is exactly a string type",
		Test.It<IsExactString<"hello">, false, typeof Test.Out.PASS>(),
		Test.It<IsExactString<string>, true, typeof Test.Out.PASS>(),
		Test.It<IsExactString<`hello${string}`>, false, typeof Test.Out.PASS>(),
		Test.It<IsExactString<"hello" | string>, true, typeof Test.Out.PASS>(),
	);
});
