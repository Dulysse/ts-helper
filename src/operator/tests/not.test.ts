import type { Not } from "../modules/not";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Get the opposite of a boolean",
		Test.It<Not<true>, false, typeof Test.Out.PASS>(),
		Test.It<Not<boolean>, boolean, typeof Test.Out.PASS>(),
		Test.It<Not<true | false>, boolean, typeof Test.Out.PASS>(),
		Test.It<Not<false>, true, typeof Test.Out.PASS>(),
	);
});
