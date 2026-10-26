import type { Eval } from "../modules/eval";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Type safe evaluation of mathematical expressions represented as string",
		Test.It<Eval<"2+2*2">, 6, typeof Test.Out.PASS>(),
		Test.It<Eval<"20.2-4/2">, 18.2, typeof Test.Out.PASS>(),
		Test.It<Eval<"HELLO">, unknown, typeof Test.Out.PASS>(),
		Test.It<Eval<"23.3/32323">, number, typeof Test.Out.PASS>(),
	);
});
