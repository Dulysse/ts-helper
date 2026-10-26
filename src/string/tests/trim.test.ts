import type { Trim } from "../modules/trim";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"TypeScript utility type to trim whitespace from the start and end of a string",
		Test.It<Trim<"    hello    ">, "hello", typeof Test.Out.PASS>(),
		Test.It<
			Trim<`   ${string} demo    `>,
			`${string} demo`,
			typeof Test.Out.PASS
		>(),
		Test.It<Trim<string>, string, typeof Test.Out.PASS>(),
		Test.It<Trim<"noSpaces">, "noSpaces", typeof Test.Out.PASS>(),
		Test.It<Trim<"     ">, "", typeof Test.Out.PASS>(),
		Test.It<Trim<`     ${string} `>, string, typeof Test.Out.PASS>(),
	);
});
