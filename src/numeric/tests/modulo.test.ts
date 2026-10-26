import type { Modulo } from "../modules/modulo";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Get the remaining integer after the division of two numbers",
		Test.It<Modulo<0, 0>, never, typeof Test.Out.PASS>(),
		Test.It<Modulo<0, 10>, 0, typeof Test.Out.PASS>(),
		Test.It<Modulo<100, 25>, 0, typeof Test.Out.PASS>(),
		Test.It<Modulo<20, 3>, 2, typeof Test.Out.PASS>(),
	);
});
