import type { ParseInt } from "../modules/parseInt";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Parse a string litteral to integer number",
		Test.It<ParseInt<"10.23">, 10.23, typeof Test.Out.FAIL>(),
		Test.It<ParseInt<`${string}.2`>, number, typeof Test.Out.PASS>(),
		Test.It<ParseInt<"0">, 0, typeof Test.Out.PASS>(),
		Test.It<ParseInt<"0.34" | "1">, 0.34 | 1, typeof Test.Out.FAIL>(),
	);
});
