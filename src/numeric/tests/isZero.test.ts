import type { IsZero } from "../modules/isZero";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Check if a number is equal to zero",
		Test.It<IsZero<0>, true, typeof Test.Out.PASS>(),
		Test.It<IsZero<2 | 0>, false, typeof Test.Out.PASS>(),
		Test.It<IsZero<typeof Infinity>, false, typeof Test.Out.PASS>(),
	);
});
