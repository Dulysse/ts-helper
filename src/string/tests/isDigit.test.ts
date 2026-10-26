import type { IsDigit } from "../modules/isDigit";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"TypeScript utility type to check if a string is a digit",
		Test.It<IsDigit<"5">, true, typeof Test.Out.PASS>(),
		Test.It<IsDigit<"a">, false, typeof Test.Out.PASS>(),
		Test.It<IsDigit<"123">, true, typeof Test.Out.PASS>(),
		Test.It<IsDigit<"">, false, typeof Test.Out.PASS>(),
	);
});
