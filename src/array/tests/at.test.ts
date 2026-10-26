import type { At } from "../modules/at";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Get an element from an array at a specific index",
		Test.It<At<[1, 2, 3], 2>, 3, typeof Test.Out.PASS>(),
		Test.It<At<string[], 1>, string | undefined, typeof Test.Out.PASS>(),
		Test.It<At<[], 1>, undefined, typeof Test.Out.PASS>(),
	);
});
