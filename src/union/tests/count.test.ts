import type { Range } from "@/numeric";
import type { Count } from "../modules/count";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Get an union type length of possibilities",
		Test.It<Count<"hello" | "world">, 2, typeof Test.Out.PASS>(),
		Test.It<Count<string>, 1, typeof Test.Out.PASS>(),
		Test.It<Count<Range<1, 5>[number]>, 5, typeof Test.Out.PASS>(),
	);
});
