import type { Partial } from "../modules/partial";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Make all keys of object type partial",
		Test.It<
			Partial<{ a: string; b: number }>,
			{ a?: string; b?: number },
			typeof Test.Out.PASS
		>(),
		Test.It<
			Partial<{ a: string; b: { c: number } }, "deep">,
			{ a?: string; b?: { c?: number } },
			typeof Test.Out.PASS
		>(),
		Test.It<
			Partial<{ a: string; b?: number }>,
			{ a?: string; b?: number },
			typeof Test.Out.PASS
		>(),
	);
});
