import type { Zip } from "../modules/zip";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Combine two tuple types into a tuple of pairs",
		Test.It<Zip<[], []>, [], typeof Test.Out.PASS>(),
		Test.It<
			Zip<[1, 2, 3], ["a", "b"]>,
			[[1, "a"], [2, "b"]],
			typeof Test.Out.PASS
		>(),
		Test.It<
			Zip<[1, 2, 3], ["a", "b", "c"]>,
			[[1, "a"], [2, "b"], [3, "c"]],
			typeof Test.Out.PASS
		>(),
		Test.It<
			Zip<number[], ["1", "2", "3"]>,
			(number | "3" | "1" | "2")[][],
			typeof Test.Out.PASS
		>(),
	);
});
