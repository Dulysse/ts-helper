import type { Greater } from "../modules/greater";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Check if a number is greater than another",
		Test.It<Greater<1, 2>, true, typeof Test.Out.FAIL>(),
		Test.It<Greater<2, 1>, true, typeof Test.Out.PASS>(),
		Test.It<Greater<number, 2>, boolean, typeof Test.Out.PASS>(),
	);
});
