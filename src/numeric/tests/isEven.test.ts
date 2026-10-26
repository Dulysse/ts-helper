import type { IsEven } from "../modules/isEven";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Check if a number is an even number",
		Test.It<IsEven<number>, boolean, typeof Test.Out.PASS>(),
		Test.It<IsEven<2.33>, true, typeof Test.Out.PASS>(),
		Test.It<IsEven<-5>, false, typeof Test.Out.PASS>(),
	);
});
