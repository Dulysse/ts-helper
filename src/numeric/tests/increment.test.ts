import type { Increment } from "../modules/increment";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Increment a number of one unit",
		Test.It<Increment<1>, 2, typeof Test.Out.PASS>(),
		Test.It<Increment<-0.56>, 0.44, typeof Test.Out.PASS>(),
		Test.It<Increment<1.902>, number, typeof Test.Out.PASS>(),
	);
});
