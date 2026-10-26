import type { Range } from "@/numeric";
import type { ToArray } from "../modules/toArray";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Transform an union type to array type with each properties",
		Test.It<ToArray<string>, [string], typeof Test.Out.PASS>(),
		Test.It<ToArray<1 | 2 | 3>, [1, 2, 3], typeof Test.Out.PASS>(),
		Test.It<ToArray<Range<1, 4>[number]>, Range<1, 4>, typeof Test.Out.PASS>(),
	);
});
