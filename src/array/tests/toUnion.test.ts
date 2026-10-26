import type { ToUnion } from "../modules/toUnion";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Transform an array type to union with each properties",
		Test.It<ToUnion<[1, 2]>, 1 | 2, typeof Test.Out.PASS>(),
		Test.It<ToUnion<string[]>, string, typeof Test.Out.PASS>(),
		Test.It<ToUnion<[]>, never, typeof Test.Out.PASS>(),
		Test.It<
			ToUnion<readonly [2, 3, 4, "5"]>,
			"5" | 4 | 3 | 2,
			typeof Test.Out.PASS
		>(),
	);
});
