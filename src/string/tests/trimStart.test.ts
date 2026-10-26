import type { TrimStart } from "../modules/trimStart";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"TypeScript utility type to trim whitespace from the start of a string",
		Test.It<TrimStart<"    hello">, "hello", typeof Test.Out.PASS>(),
		Test.It<
			TrimStart<`   ${string} demo`>,
			`${string} demo`,
			typeof Test.Out.PASS
		>(),
		Test.It<TrimStart<string>, string, typeof Test.Out.PASS>(),
	);
});
