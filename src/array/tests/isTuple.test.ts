import type { IsTuple } from "../modules/isTuple";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Check whether an array type is a tuple or not",
		Test.It<IsTuple<[[1, 2], [3, 4]]>, true, typeof Test.Out.PASS>(),
		Test.It<IsTuple<string[][]>, false, typeof Test.Out.PASS>(),
		Test.It<IsTuple<readonly string[]>, false, typeof Test.Out.PASS>(),
	);
});
