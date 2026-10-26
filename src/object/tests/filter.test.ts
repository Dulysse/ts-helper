import type { Filter } from "../modules/filter";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Filter the properties of an object type that satisfy a condition",
		Test.It<
			Filter<{ a: string; b: number; c: boolean; d: string }, string>,
			{ a: string; d: string },
			typeof Test.Out.PASS
		>(),
		Test.It<
			Filter<{ a: string; b: number; c: boolean; d: string }, number>,
			{ b: number },
			typeof Test.Out.PASS
		>(),
		Test.It<
			Filter<
				{ a: { x: string }; b: { y: number }; c: boolean },
				string,
				"deep"
			>,
			{ a: { x: string } },
			typeof Test.Out.PASS
		>(),
		Test.It<
			Filter<{ a: { x: string }; b: { y: number }; c: boolean }, string>,
			{},
			typeof Test.Out.PASS
		>(),
		Test.It<
			Filter<{ a: number; b: { c: string }; d: { e: number } }, object>,
			{ b: { c: string }; d: { e: number } },
			typeof Test.Out.PASS
		>(),
		Test.It<
			Filter<{ a: number; b: { c: string }; d: { e: number } }, number, "deep">,
			{ a: number; d: { e: number } },
			typeof Test.Out.PASS
		>(),
	);
});
