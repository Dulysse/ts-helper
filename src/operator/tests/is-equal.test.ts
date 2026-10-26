import type { Implicit } from "@/any";
import type { IsEqual } from "../modules/is-equal";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Check if first type is strictly equal to second type",
		Test.It<IsEqual<1, 1>, true, typeof Test.Out.PASS>(),
		Test.It<IsEqual<true, boolean>, false, typeof Test.Out.PASS>(),
		Test.It<IsEqual<true, true>, true, typeof Test.Out.PASS>(),
		Test.It<IsEqual<false, false | 0>, false, typeof Test.Out.PASS>(),
		Test.It<IsEqual<"hello", Implicit>, false, typeof Test.Out.PASS>(),
		Test.It<IsEqual<Implicit, Implicit>, false, typeof Test.Out.PASS>(),
		Test.It<IsEqual<object, {}>, false, typeof Test.Out.PASS>(),
		Test.It<IsEqual<{}, object>, false, typeof Test.Out.PASS>(),
		Test.It<IsEqual<object, object>, true, typeof Test.Out.PASS>(),
		Test.It<IsEqual<{}, {}>, true, typeof Test.Out.PASS>(),
		Test.It<IsEqual<{ value: 1 }, object>, false, typeof Test.Out.PASS>(),
	);
});
