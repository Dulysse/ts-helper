import type { _Add } from "@/numeric/modules/add";
import type { _Subtract, Subtract } from "../modules/subtract";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Substract a number from another",
		Test.It<Subtract<10, 3>, 7, typeof Test.Out.PASS>(),
		Test.It<Subtract<134.67, 45.87>, 88.8, typeof Test.Out.PASS>(),
		Test.It<Subtract<typeof Infinity, -10>, number, typeof Test.Out.PASS>(),
	);
});
