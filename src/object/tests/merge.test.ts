import type { Merge } from "../modules/merge";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Merge two object types",
		Test.It<
			Merge<{ a: string }, { b: number }>,
			{ a: string; b: number },
			typeof Test.Out.PASS
		>(),
		Test.It<
			Merge<{ a: string; b: { c: number } }, { b: { d: boolean } }, "deep">,
			{
				a: string;
				b: { c: number; d: boolean };
			},
			typeof Test.Out.PASS
		>(),
		Test.It<
			Merge<{ a: string }, { a: number }>,
			{ a: string | number },
			typeof Test.Out.PASS
		>(),
		Test.It<
			Merge<{ a: string }, { b: number } | { c: boolean }>,
			{
				a: string;
				b?: number;
				c?: boolean;
			},
			typeof Test.Out.PASS
		>(),
		Test.It<
			Merge<{ a: string }, { a: number } | { a: string; b?: number }>,
			{ a: string | number; b?: number },
			typeof Test.Out.PASS
		>(),
	);
});
