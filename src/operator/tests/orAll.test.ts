import type { OrAll } from "../modules/orAll";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Check if all conditions are true",
		Test.It<OrAll<[true, true, true]>, true, typeof Test.Out.PASS>(),
		Test.It<OrAll<[true, false, true]>, true, typeof Test.Out.PASS>(),
		Test.It<OrAll<[true, true, boolean]>, true, typeof Test.Out.PASS>(),
		Test.It<OrAll<[false, boolean]>, boolean, typeof Test.Out.PASS>(),
		Test.It<OrAll<[false, false]>, false, typeof Test.Out.PASS>(),
	);
});
