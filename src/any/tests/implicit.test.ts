import type { Implicit } from "../modules/implicit";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"an implicit any type",
		Test.It<Implicit, string, typeof Test.Out.FAIL>(),
		Test.It<Implicit, number, typeof Test.Out.FAIL>(),
		Test.It<Implicit, unknown, typeof Test.Out.FAIL>(),
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		Test.It<Implicit, any, typeof Test.Out.PASS>(),
	);
});
