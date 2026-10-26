import type { IsLiteral } from "../modules/isLiteral";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Check if a type is a literal type",
		Test.It<IsLiteral<"hello">, true, typeof Test.Out.PASS>(),
		Test.It<IsLiteral<1 | 2 | 3>, true, typeof Test.Out.PASS>(),
		Test.It<IsLiteral<true>, true, typeof Test.Out.PASS>(),
		Test.It<IsLiteral<bigint>, false, typeof Test.Out.PASS>(),
		Test.It<IsLiteral<symbol>, false, typeof Test.Out.PASS>(),
		Test.It<IsLiteral<string | number>, false, typeof Test.Out.PASS>(),
		Test.It<IsLiteral<string | 1>, boolean, typeof Test.Out.PASS>(),
	);
});
