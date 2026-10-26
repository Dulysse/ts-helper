import type { Implicit } from "@/any";
import type { IsAny } from "../modules/isAny";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Check if a type is exact type any",
		Test.It<IsAny<Implicit>, true, typeof Test.Out.PASS>(),
		Test.It<IsAny<unknown>, true, typeof Test.Out.FAIL>(),
		Test.It<IsAny<string>, true, typeof Test.Out.FAIL>(),
		Test.It<IsAny<number>, true, typeof Test.Out.FAIL>(),
		Test.It<IsAny<{}>, true, typeof Test.Out.FAIL>(),
		Test.It<IsAny<[]>, true, typeof Test.Out.FAIL>(),
		Test.It<IsAny<Implicit[]>, true, typeof Test.Out.PASS>(),
		Test.It<IsAny<never>, true, typeof Test.Out.FAIL>(),
	);
});
