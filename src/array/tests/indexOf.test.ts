import type { IndexOf } from "../modules/indexOf";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Get the index of a filtered element in an array",
		Test.It<
			IndexOf<(string | number)[], string>,
			number,
			typeof Test.Out.PASS
		>(),
		Test.It<IndexOf<[1, 2, 3], string>, -1, typeof Test.Out.PASS>(),
		Test.It<IndexOf<[1, 2, "3"], string>, 2, typeof Test.Out.PASS>(),
		Test.It<IndexOf<[1, 2, 3], 2>, 1, typeof Test.Out.PASS>(),
		Test.It<IndexOf<(1 | 2 | 3)[], 2>, number, typeof Test.Out.PASS>(),
	);
});
