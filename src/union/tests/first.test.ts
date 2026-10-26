import type { First } from "../modules/first";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Get the first element of an union type",
		Test.It<First<1 | 2 | 3>, 1, typeof Test.Out.PASS>(),
		Test.It<First<number>, number, typeof Test.Out.PASS>(),
		Test.It<First<`${1 | 2 | 3}`>, `${1}`, typeof Test.Out.PASS>(),
	);
});
