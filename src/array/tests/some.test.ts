import type { Some } from "../modules/some";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Check if array match with filter",
		Test.It<Some<(string | number)[], string>, boolean, typeof Test.Out.PASS>(),
		Test.It<Some<[1, 2, 3], string>, false, typeof Test.Out.PASS>(),
		Test.It<Some<[1, 2, "3"], string>, true, typeof Test.Out.PASS>(),
		Test.It<Some<[1, 2, 3], 2>, true, typeof Test.Out.PASS>(),
		Test.It<Some<(1 | 2 | 3)[], 2>, boolean, typeof Test.Out.PASS>(),
	);
});
