import type { Intersection } from "../modules/intersection";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Get the Intersection object type of two objects",
		Test.It<Intersection<{}, {}>, {}, typeof Test.Out.PASS>(),
		Test.It<Intersection<{ name: string }, {}>, {}, typeof Test.Out.PASS>(),
		Test.It<
			Intersection<{ name: string }, { name?: boolean }>,
			{ name: string | boolean | undefined },
			typeof Test.Out.PASS
		>(),
		Test.It<
			Intersection<{ a: string; b: number }, { b: number; c: boolean }>,
			{ b: number },
			typeof Test.Out.PASS
		>(),
	);
});
