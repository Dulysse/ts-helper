import type { Multiply } from "../modules/multiply";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Multiply one number with another",
		Test.It<Multiply<10, 2>, 20, typeof Test.Out.PASS>(),
		Test.It<Multiply<-100, 5>, -500, typeof Test.Out.PASS>(),
		Test.It<Multiply<2.2, 2>, 4.4, typeof Test.Out.PASS>(),
	);
});
