import type { Omit } from "../modules/omit";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Omit keys from object type",
		Test.It<
			Omit<{ a: string; b: number }, "a">,
			{ b: number },
			typeof Test.Out.PASS
		>(),
		Test.It<
			Omit<{ a: string; b: { c: number } }, "b", "deep">,
			{ a: string },
			typeof Test.Out.PASS
		>(),
		Test.It<
			Omit<{ a: string; b: { c: number } }, "c", "deep">,
			{ a: string; b: { c: number } },
			typeof Test.Out.PASS
		>(),
		Test.It<
			Omit<{ a: string; b?: number }, "b">,
			{ a: string },
			typeof Test.Out.PASS
		>(),
	);
});
