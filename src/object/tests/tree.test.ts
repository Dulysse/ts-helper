import type { Tree } from "../modules/tree";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Generate a tree structure from an object type",
		Test.It<
			Tree<
				{ a: { b: { c: number } }; d: string },
				{ showValues: false; pathSeparator: "/" }
			>,
			"a/b/c" | "d",
			typeof Test.Out.PASS
		>(),
		Test.It<
			Tree<
				{ x: { y: { z: boolean } }; w: number },
				{ pathSeparator: "->"; valueSeparator: "="; showValues: true }
			>,
			`x->y->z=true` | "x->y->z=false" | `w=${number}`,
			typeof Test.Out.PASS
		>(),
		Test.It<
			Tree<{ foo: { bar: { baz: string } }; qux: boolean }>,
			`foo.bar.baz` | "qux",
			typeof Test.Out.PASS
		>(),
		Test.It<
			Tree<
				{ foo: { bar: { baz: string }; sdk: string }; qux: boolean },
				{ valueSatisfy: string }
			>,
			`foo.bar.baz` | `foo.sdk`,
			typeof Test.Out.PASS
		>(),
	);
});
