import type { PlacedAt } from "../modules/placedAt";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Get the string char at a specific index",
		Test.It<PlacedAt<"hello", -1>, "o", typeof Test.Out.PASS>(),
		Test.It<PlacedAt<string, 1>, string | undefined, typeof Test.Out.PASS>(),
		Test.It<
			PlacedAt<`hello${string}`, 3>,
			string | undefined,
			typeof Test.Out.PASS
		>(),
		Test.It<PlacedAt<"hello", 34>, undefined, typeof Test.Out.PASS>(),
	);
});
