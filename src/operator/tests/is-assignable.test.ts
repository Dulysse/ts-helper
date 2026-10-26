import type { Implicit } from "@/any";
import type { IsAssignable } from "../modules/is-assignable";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Check if first type is strictly equal to second type",
		Test.It<IsAssignable<1, 1 | 2>, true, typeof Test.Out.PASS>(),
		Test.It<IsAssignable<"hello", Implicit>, false, typeof Test.Out.PASS>(),
		Test.It<IsAssignable<Implicit, Implicit>, false, typeof Test.Out.PASS>(),
		Test.It<IsAssignable<1 | 2, 1>, false, typeof Test.Out.PASS>(),
		Test.It<IsAssignable<1 | 2, 1 | 2>, true, typeof Test.Out.PASS>(),
		Test.It<IsAssignable<1 | 2, number>, true, typeof Test.Out.PASS>(),
	);
});
