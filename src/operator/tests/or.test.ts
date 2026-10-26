import type { Or } from "../modules/or";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Check if one of condition is true",
		Test.It<Or<true, false>, true, typeof Test.Out.PASS>(),
		Test.It<Or<true, boolean>, true, typeof Test.Out.PASS>(),
		Test.It<Or<true, true>, true, typeof Test.Out.PASS>(),
		Test.It<Or<false, false>, true, typeof Test.Out.FAIL>(),
	);
});
