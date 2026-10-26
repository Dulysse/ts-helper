import type { IsOdd } from "../modules/isOdd";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Check if a number is an odd number",
		Test.It<IsOdd<number>, boolean, typeof Test.Out.PASS>(),
		Test.It<IsOdd<2.33>, false, typeof Test.Out.PASS>(),
		Test.It<IsOdd<-5>, true, typeof Test.Out.PASS>(),
	);
});
