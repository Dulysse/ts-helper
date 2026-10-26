import type { Range } from "@/numeric";
import type { Last } from "../modules/last";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Get the last element of an union type",
		Test.It<Last<string>, string, typeof Test.Out.PASS>(),
		Test.It<Last<1 | 2 | 3>, 3, typeof Test.Out.PASS>(),
		Test.It<Last<Range<1, 4>[number]>, 4, typeof Test.Out.PASS>(),
	);
});
