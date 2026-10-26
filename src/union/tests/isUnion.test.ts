import type { Range } from "@/numeric";
import type { IsUnion } from "../modules/isUnion";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Check if union type is an union with many choices",
		Test.It<IsUnion<string>, false, typeof Test.Out.PASS>(),
		Test.It<IsUnion<1 | 2 | 3>, true, typeof Test.Out.PASS>(),
		Test.It<IsUnion<Range<1, 4>[number]>, true, typeof Test.Out.PASS>(),
	);
});
