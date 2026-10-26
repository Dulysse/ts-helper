import type { Required } from "../modules/required";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Required keys from object type",
		Test.It<
			Required<{ a?: string; b: number }>,
			{ a: string; b: number },
			typeof Test.Out.PASS
		>(),
		Test.It<
			Required<{ a?: string; b?: number }, "deep">,
			{ a: string; b: number },
			typeof Test.Out.PASS
		>(),
		Test.It<
			Required<{ a?: string; b?: { c?: number } }, "deep">,
			{ a: string; b: { c: number } },
			typeof Test.Out.PASS
		>(),
	);
});
