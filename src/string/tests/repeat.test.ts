import type { Repeat } from "../modules/repeat";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Repeat a string an amount of time",
		Test.It<Repeat<"hello", -1>, never, typeof Test.Out.PASS>(),
		Test.It<Repeat<string, 1>, string, typeof Test.Out.PASS>(),
		Test.It<
			Repeat<`hello${string}`, 3>,
			`hello${string}hello${string}hello${string}`,
			typeof Test.Out.PASS
		>(),
		Test.It<Repeat<"hello ", 2.2>, "hello hello ", typeof Test.Out.PASS>(),
	);
});
