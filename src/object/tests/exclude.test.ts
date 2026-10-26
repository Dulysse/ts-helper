import type { Exclude } from "../modules/exclude";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Exclude the properties of an object type that satisfy a condition",
		Test.It<
			Exclude<{ a: string; b: number; c: boolean; d: string }, string>,
			{ b: number; c: boolean },
			typeof Test.Out.PASS
		>(),
		Test.It<
			Exclude<{ a: string; b: number; c: boolean; d: string }, number>,
			{ a: string; c: boolean; d: string },
			typeof Test.Out.PASS
		>(),
		Test.It<
			Exclude<
				{ a: { x: string }; b: { y: number }; c: boolean },
				string,
				"deep"
			>,
			{ b: { y: number }; c: boolean },
			typeof Test.Out.PASS
		>(),
		Test.It<
			Exclude<{ a: { x: string }; b: { y: number }; c: boolean }, string>,
			{ a: { x: string }; b: { y: number }; c: boolean },
			typeof Test.Out.PASS
		>(),
		Test.It<
			Exclude<{ a: number; b: { c: string }; d: { e: number } }, object>,
			{ a: number },
			typeof Test.Out.PASS
		>(),
		Test.It<
			Exclude<
				{ a: number; b: { c: string }; d: { e: number } },
				number,
				"deep"
			>,
			{ b: { c: string } },
			typeof Test.Out.PASS
		>(),
	);
});
