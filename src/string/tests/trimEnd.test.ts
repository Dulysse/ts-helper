import type { TrimEnd } from "../modules/trimEnd";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"TypeScript utility type to trim whitespace from the end of a string",
		Test.It<TrimEnd<"hello    ">, "hello", typeof Test.Out.PASS>(),
		Test.It<
			TrimEnd<`${string} demo   `>,
			`${string} demo`,
			typeof Test.Out.PASS
		>(),
		Test.It<TrimEnd<string>, string, typeof Test.Out.PASS>(),
	);
});
