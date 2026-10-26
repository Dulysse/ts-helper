import type { Divide } from "../modules/divide";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Divide one number by another",
		Test.It<Divide<10, 2>, 5, typeof Test.Out.PASS>(),
		Test.It<Divide<-100, 5>, -20, typeof Test.Out.PASS>(),
		Test.It<Divide<189, 6>, number, typeof Test.Out.PASS>(),
	);
});
