import type { Flat } from "../modules/flat";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Flatten an array type to a specified depth",
		Test.It<Flat<[[1, 2], [3, 4]]>, [1, 2, 3, 4], typeof Test.Out.PASS>(),
		Test.It<
			Flat<[[1, 2], [3, [4, string[]]]], 2>,
			[1, 2, 3, 4, string[]],
			typeof Test.Out.PASS
		>(),
		Test.It<Flat<string[][][][][], 4>, string[], typeof Test.Out.PASS>(),
	);
});
