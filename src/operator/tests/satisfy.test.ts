import type { Satisfy } from "../modules/satisfy";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Check if a type is satisfying another type",
		Test.It<Satisfy<true, false>, false, typeof Test.Out.PASS>(),
		Test.It<Satisfy<true, boolean>, true, typeof Test.Out.PASS>(),
		Test.It<Satisfy<1, number>, 1, typeof Test.Out.PASS>(),
		Test.It<
			Satisfy<string, `${string}.com`>,
			`${string}.com`,
			typeof Test.Out.PASS
		>(),
	);
});
