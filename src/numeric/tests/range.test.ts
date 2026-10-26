import type { Range } from "../modules/range";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Get a tuple of element from a specific range",
		Test.It<Range<2, 0>, [2, 1, 0], typeof Test.Out.PASS>(),
		Test.It<Range<2, 4>, [2, 3, 4], typeof Test.Out.PASS>(),
		Test.It<
			Range<2, -5>,
			[2, 1, 0, -1, -2, -3, -4, -5],
			typeof Test.Out.PASS
		>(),
		Test.It<Range<-2, 2>, [-2, -1, 0, 1, 2], typeof Test.Out.PASS>(),
		Test.It<Range<0, 0>, [0], typeof Test.Out.PASS>(),
		Test.It<Range<-2, -2>, [-2], typeof Test.Out.PASS>(),
		Test.It<Range<2.5, 5>, never, typeof Test.Out.PASS>(),
		Test.It<Range<2, 5.5>, never, typeof Test.Out.PASS>(),
	);
});
