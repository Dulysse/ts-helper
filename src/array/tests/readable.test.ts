import type { Readable } from "../modules/readable";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Get a readonly array type as writable",
		Test.It<Readable<[1, 2]>, [1, 2], typeof Test.Out.PASS>(),
		Test.It<Readable<string[]>, string[], typeof Test.Out.PASS>(),
		Test.It<Readable<[] | readonly [1]>, [1] | [], typeof Test.Out.PASS>(),
		Test.It<
			Readable<readonly [2, 3, 4, "5"]>,
			[2, 3, 4, "5"],
			typeof Test.Out.PASS
		>(),
	);
});
