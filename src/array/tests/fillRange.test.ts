import type { FillRange } from "../modules/fillRange";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Fill an array type as an union array type from a range",
		Test.It<
			FillRange<2, 1>,
			[undefined, undefined] | [undefined],
			typeof Test.Out.PASS
		>(),
		Test.It<FillRange<-1, 2>, never, typeof Test.Out.PASS>(),
		Test.It<FillRange<1, number, string>, string[], typeof Test.Out.PASS>(),
	);
});
