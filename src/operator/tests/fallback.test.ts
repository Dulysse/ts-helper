import type { Fallback } from "../modules/fallback";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Return type A unless it is unknown, in which case return type B",
		Test.It<Fallback<unknown, string>, string, typeof Test.Out.PASS>(),
		Test.It<Fallback<number, string>, number, typeof Test.Out.PASS>(),
	);
});
