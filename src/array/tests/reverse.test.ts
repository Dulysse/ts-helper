import type { Reverse } from "../modules/reverse";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Get a reversed array type",
		Test.It<Reverse<[1, 2]>, [2, 1], typeof Test.Out.PASS>(),
		Test.It<Reverse<string[]>, string[], typeof Test.Out.PASS>(),
		Test.It<Reverse<[]>, [], typeof Test.Out.PASS>(),
		Test.It<
			Reverse<readonly [2, 3, 4, "5"]>,
			["5", 4, 3, 2],
			typeof Test.Out.PASS
		>(),
	);
});
