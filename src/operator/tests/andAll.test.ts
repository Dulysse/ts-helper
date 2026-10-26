import type { AndAll } from "../modules/andAll";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Check if all conditions are true",
		Test.It<AndAll<[true, true, true]>, true, typeof Test.Out.PASS>(),
		Test.It<AndAll<[true, false, true]>, false, typeof Test.Out.PASS>(),
		Test.It<AndAll<[true, true, boolean]>, boolean, typeof Test.Out.PASS>(),
	);
});
