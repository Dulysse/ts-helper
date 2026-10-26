import type { Update } from "../modules/update";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Update a property in an object type",
		Test.It<
			Update<{ a: string; b: number }, "a", boolean>,
			{ a: boolean; b: number },
			typeof Test.Out.PASS
		>(),
		Test.It<
			Update<{ name: string; age: number; active: boolean }, "age", string>,
			{ name: string; age: string; active: boolean },
			typeof Test.Out.PASS
		>(),
		Test.It<
			Update<{ x: number; y: number; z: number }, "y", null>,
			{ x: number; y: null; z: number },
			typeof Test.Out.PASS
		>(),
		Test.It<
			Update<
				{ user: { name: string; age: number }; age: boolean },
				"age",
				string,
				"deep"
			>,
			{ user: { name: string; age: string }; age: string },
			typeof Test.Out.PASS
		>(),
	);
});
