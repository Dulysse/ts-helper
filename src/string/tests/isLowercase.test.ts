import type { IsLowerCase } from "../modules/isLowercase";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"TypeScript utility type to check if a string is lowercase",
		Test.It<IsLowerCase<"hello">, true, typeof Test.Out.PASS>(),
		Test.It<IsLowerCase<`${string} demo`>, boolean, typeof Test.Out.PASS>(),
		Test.It<IsLowerCase<`${string} DEMO`>, false, typeof Test.Out.PASS>(),
		Test.It<IsLowerCase<string>, boolean, typeof Test.Out.PASS>(),
		Test.It<IsLowerCase<"DEMO">, false, typeof Test.Out.PASS>(),
	);
});
