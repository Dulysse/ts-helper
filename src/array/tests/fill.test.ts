import type { Fill } from "../modules/fill";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Fill an array type with a specified length",
		Test.It<Fill<3>, [undefined, undefined, undefined], typeof Test.Out.PASS>(),
		Test.It<Fill<3, string>, [string, string, string], typeof Test.Out.PASS>(),
		Test.It<Fill<number, string>, string[], typeof Test.Out.PASS>(),
	);
});
