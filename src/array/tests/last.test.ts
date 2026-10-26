import type { Last } from "../modules/last";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Get the last element of an array type",
		Test.It<Last<[1, 2]>, 2, typeof Test.Out.PASS>(),
		Test.It<Last<string[]>, string | undefined, typeof Test.Out.PASS>(),
		Test.It<Last<[]>, undefined, typeof Test.Out.PASS>(),
		Test.It<Last<[2, 3, 4] | [1, 2]>, 2 | 4, typeof Test.Out.PASS>(),
	);
});
