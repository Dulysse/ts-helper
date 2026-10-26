import type { ContainExactString } from "../modules/containExactString";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Check if a string type contain exactly a string type as litteral string type",
		Test.It<ContainExactString<"hello">, false, typeof Test.Out.PASS>(),
		Test.It<ContainExactString<string>, true, typeof Test.Out.PASS>(),
		Test.It<ContainExactString<`hello${string}`>, true, typeof Test.Out.PASS>(),
		Test.It<
			ContainExactString<"hello" | `hello ${string}`>,
			boolean,
			typeof Test.Out.PASS
		>(),
	);
});
