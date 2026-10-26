import type { Range } from "@/numeric";
import type { Through } from "../modules/through";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Get the element from the index of union type",
		Test.It<Through<string, 1>, undefined, typeof Test.Out.PASS>(),
		Test.It<Through<1 | 2 | 3, 1>, 2, typeof Test.Out.PASS>(),
		Test.It<Through<Range<1, 4>[number], 3>, 4, typeof Test.Out.PASS>(),
	);
});
