import type { Join } from "../modules/join";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Check whether an array type is a tuple or not",
		Test.It<Join<[1, 2]>, "1,2", typeof Test.Out.PASS>(),
		Test.It<Join<string[]>, string, typeof Test.Out.PASS>(),
		Test.It<Join<[1, {}]>, "1,[object Object]", typeof Test.Out.PASS>(),
		Test.It<Join<[1, 2, 3, 4], "/">, "1/2/3/4", typeof Test.Out.PASS>(),
	);
});
