import type { _Subtract } from "@/numeric/modules/subtract";
import type { _Add, Add } from "../modules/add";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Add a number to another",
		Test.It<Add<1.1, 30>, 31.1, typeof Test.Out.PASS>(),
		Test.It<Add<5, -10>, -5, typeof Test.Out.PASS>(),
		Test.It<Add<5, -10>, number, typeof Test.Out.FAIL>(),
	);
});
