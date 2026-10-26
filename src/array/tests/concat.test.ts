import type { Concat } from "../modules/concat";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Concatenate two array types into a single array type",
		Test.It<Concat<[1, 2, 3], [4]>, [1, 2, 3, 4], typeof Test.Out.PASS>(),
		Test.It<
			Concat<[1, 2, 3], string[]>,
			(string | 1 | 2 | 3)[],
			typeof Test.Out.PASS
		>(),
		Test.It<Concat<[1, 2, 3], [3]>, [1, 2, 3, 3], typeof Test.Out.PASS>(),
	);
});
