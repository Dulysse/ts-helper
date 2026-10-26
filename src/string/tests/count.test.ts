import type { Count } from "../modules/count";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Count the number of occurrences of a string into a string",
		Test.It<Count<"true", string>, number, typeof Test.Out.PASS>(),
		Test.It<Count<"Hello world!", "l">, 3, typeof Test.Out.PASS>(),
		Test.It<Count<`${string}demo`, "l">, number, typeof Test.Out.PASS>(),
	);
});
