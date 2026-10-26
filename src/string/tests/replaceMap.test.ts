import type { ReplaceMap } from "../modules/replaceMap";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Replace characters in a string based on a mapping object",
		Test.It<
			ReplaceMap<"Hello World", { H: "J"; o: "0" }>,
			"Jell0 W0rld",
			typeof Test.Out.PASS
		>(),
		Test.It<
			ReplaceMap<"This is a test", { T: "7"; s: "5" }>,
			"7hi5 i5 a te5t",
			typeof Test.Out.PASS
		>(),
		Test.It<
			ReplaceMap<"Hello World", { H: "J"; o: "0"; l: "1" }>,
			"Je110 W0r1d",
			typeof Test.Out.PASS
		>(),
	);
});
