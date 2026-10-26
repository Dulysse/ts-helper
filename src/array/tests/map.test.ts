import type { Map } from "../modules/map";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Map an array type with a filter",
		Test.It<Map<[1, 2, 3], string>, ["1", "2", "3"], typeof Test.Out.PASS>(),
		Test.It<Map<[1, 2, 3], "a">, ["a", "a", "a"], typeof Test.Out.PASS>(),
		Test.It<
			Map<[1, 2, 3], `1+${number}`, "eval">,
			[2, 3, 4],
			typeof Test.Out.PASS
		>(),
	);
});
