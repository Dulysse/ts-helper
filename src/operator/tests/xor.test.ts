import type { Xor } from "../modules/xor";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Check if one of condition is true",
		Test.It<Xor<true, false>, true, typeof Test.Out.PASS>(),
		Test.It<Xor<true, boolean>, boolean, typeof Test.Out.PASS>(),
		Test.It<Xor<true, true>, false, typeof Test.Out.PASS>(),
		Test.It<Xor<false, false>, true, typeof Test.Out.FAIL>(),
	);
});
