import type { Length } from "../modules/length";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Get the length of an array type",
		Test.It<Length<[1, 2]>, 2, typeof Test.Out.PASS>(),
		Test.It<Length<string[]>, number, typeof Test.Out.PASS>(),
		Test.It<Length<[]>, 0, typeof Test.Out.PASS>(),
		Test.It<Length<[2, 3, 4] | [1, 2]>, 2 | 3, typeof Test.Out.PASS>(),
	);
});
