import type { IsReadonly } from "../modules/isReadonly";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Check if an array type is readonly or not",
		Test.It<IsReadonly<[[1, 2], [3, 4]]>, false, typeof Test.Out.PASS>(),
		Test.It<IsReadonly<string[][]>, false, typeof Test.Out.PASS>(),
		Test.It<IsReadonly<readonly string[]>, true, typeof Test.Out.PASS>(),
	);
});
