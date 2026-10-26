import type { Implicit } from "@/any";
import type { Equal } from "../modules/equal";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Check if first type is strictly equal to second type",
		Test.It<Equal<1, 1>, true, typeof Test.Out.PASS>(),
		Test.It<Equal<true, boolean>, false, typeof Test.Out.PASS>(),
		Test.It<Equal<true, true>, true, typeof Test.Out.PASS>(),
		Test.It<Equal<false, false | 0>, false, typeof Test.Out.PASS>(),
		Test.It<Equal<"hello", Implicit>, false, typeof Test.Out.PASS>(),
		Test.It<Equal<Implicit, Implicit>, true, typeof Test.Out.PASS>(),
		Test.It<Equal<object, {}>, false, typeof Test.Out.PASS>(),
		Test.It<Equal<{}, object>, false, typeof Test.Out.PASS>(),
		Test.It<Equal<object, object>, true, typeof Test.Out.PASS>(),
		Test.It<Equal<{}, {}>, true, typeof Test.Out.PASS>(),
		Test.It<Equal<{ value: 1 }, object>, false, typeof Test.Out.PASS>(),
	);
});
