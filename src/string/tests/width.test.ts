import type { Width } from "../modules/width";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Get the length of a string type",
		Test.It<Width<"hello">, 5, typeof Test.Out.PASS>(),
		Test.It<Width<`demo ${string} `>, number, typeof Test.Out.PASS>(),
		Test.It<Width<string>, number, typeof Test.Out.PASS>(),
	);
});
