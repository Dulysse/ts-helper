import type { Power } from "../modules/power";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Get the power of a number",
		Test.It<Power<2, 0>, 1, typeof Test.Out.PASS>(),
		Test.It<Power<2, 4>, 16, typeof Test.Out.PASS>(),
		Test.It<Power<2, -5>, number, typeof Test.Out.PASS>(),
	);
});
