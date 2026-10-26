import type { Unique } from "../modules/unique";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Remove duplicate elements from an array type",
		Test.It<Unique<[1, 2, 2, 3]>, [1, 2, 3], typeof Test.Out.PASS>(),
		Test.It<Unique<[1, 2, 3]>, [1, 2, 3], typeof Test.Out.PASS>(),
		Test.It<Unique<["a", "b", "a"]>, ["a", "b"], typeof Test.Out.PASS>(),
		Test.It<Unique<string[]>, string[], typeof Test.Out.PASS>(),
	);
});
