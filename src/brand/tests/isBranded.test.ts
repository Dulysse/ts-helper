import type { $brand } from "@/brand/modules/symbol";
import type { IsBranded } from "../modules/isBranded";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Find a symbol into a type",
		Test.It<IsBranded<number, "mySymbol">, false, typeof Test.Out.PASS>(),
		Test.It<
			IsBranded<number & { [$brand]: { ["mySymbol"]: true } }, "mySymbol">,
			true,
			typeof Test.Out.PASS
		>(),
		Test.It<
			IsBranded<string & { [$brand]: { ["anotherSymbol"]: true } }, "mySymbol">,
			false,
			typeof Test.Out.PASS
		>(),
	);
});
