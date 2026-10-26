import type { Count } from "../modules/count";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Count the number of occurrences of a specific element",
		Test.It<Count<[3, 1, 2, 3], 3>, 2, typeof Test.Out.PASS>(),
		Test.It<Count<[1, 2, 3], number>, 0, typeof Test.Out.PASS>(),
		Test.It<Count<number[], "1">, 0, typeof Test.Out.PASS>(),
		Test.It<Count<number[], 1>, number, typeof Test.Out.PASS>(),
	);
});
