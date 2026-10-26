import type { And } from "../modules/and";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Check if both condition are true",
		Test.It<And<true, false>, false, typeof Test.Out.PASS>(),
		Test.It<And<true, boolean>, boolean, typeof Test.Out.PASS>(),
		Test.It<And<true, true>, true, typeof Test.Out.PASS>(),
		Test.It<And<false, true>, true, typeof Test.Out.FAIL>(),
	);
});
