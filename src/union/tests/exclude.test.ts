import type { Range } from "@/numeric";
import type { Exclude } from "../modules/exclude";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Exclude an element of an union type",
		Test.It<
			Exclude<Range<1, 5>[number], 4>,
			1 | 2 | 3 | 5,
			typeof Test.Out.PASS
		>(),
		Test.It<
			Exclude<Range<1, 5>[number], number>,
			never,
			typeof Test.Out.PASS
		>(),
		Test.It<Exclude<string, "demo">, string, typeof Test.Out.PASS>(),
	);
});
