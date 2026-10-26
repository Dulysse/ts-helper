import type { Range } from "@/numeric";
import type { Filter } from "../modules/filter";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Apply filter to an array",
		Test.It<
			Filter<(string | number)[], string>,
			string[],
			typeof Test.Out.PASS
		>(),
		Test.It<Filter<[1], string>, [], typeof Test.Out.PASS>(),
		Test.It<
			Filter<[10, 23, 45, 67, 78, 189, 568], Range<50, 100>[number]>,
			[67, 78],
			typeof Test.Out.PASS
		>(),
	);
});
