import type { IsUpperCase } from "../modules/isUppercase";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"TypeScript utility type to check if a string is uppercase",
		Test.It<IsUpperCase<"hello">, false, typeof Test.Out.PASS>(),
		Test.It<IsUpperCase<`${string} demo`>, false, typeof Test.Out.PASS>(),
		Test.It<IsUpperCase<`${string} DEMO`>, boolean, typeof Test.Out.PASS>(),
		Test.It<IsUpperCase<string>, boolean, typeof Test.Out.PASS>(),
		Test.It<IsUpperCase<"DEMO">, true, typeof Test.Out.PASS>(),
	);
});
