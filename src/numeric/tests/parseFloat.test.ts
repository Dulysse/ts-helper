import type { ParseFloat } from "../modules/parseFloat";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Parse a string litteral to floating number",
		Test.It<ParseFloat<"10.23">, 10.23, typeof Test.Out.PASS>(),
		Test.It<ParseFloat<`${string}.2`>, number, typeof Test.Out.PASS>(),
		Test.It<ParseFloat<"0">, 0, typeof Test.Out.PASS>(),
		Test.It<ParseFloat<"0.34" | "1">, 0.34 | 1, typeof Test.Out.PASS>(),
	);
});
