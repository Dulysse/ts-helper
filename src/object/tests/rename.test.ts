import type { Rename } from "../modules/rename";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Rename a property in an object type",
		Test.It<
			Rename<{ a: string }, "a", "b">,
			{ b: string },
			typeof Test.Out.PASS
		>(),
		Test.It<
			Rename<{ a: string; b: number }, "a", "c">,
			{ c: string; b: number },
			typeof Test.Out.PASS
		>(),
		Test.It<
			Rename<{ a: string; b?: number }, "b", "d">,
			{ a: string; d?: number },
			typeof Test.Out.PASS
		>(),
	);
});
