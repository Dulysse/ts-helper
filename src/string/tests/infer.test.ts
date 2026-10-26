import type { Alphanumeric } from "@/string";
import type { $internal } from "@/brand/modules/symbol";
import type { HasKey } from "@/object";
import type { Infer } from "../modules/infer";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Apply some rules to a string",
		Test.It<
			HasKey<Infer<"hello", {}>, typeof $internal>,
			false,
			typeof Test.Out.PASS
		>(),
		Test.It<
			HasKey<Infer<"hello", { minChar: 10 }>, typeof $internal>,
			true,
			typeof Test.Out.PASS
		>(),
		Test.It<
			HasKey<
				Infer<"hello Ulysse!", { pattern: `hello ${string}.` }>,
				typeof $internal
			>,
			true,
			typeof Test.Out.PASS
		>(),
		Test.It<
			HasKey<
				Infer<"Hello ulysse!", { excludeCharacters: Alphanumeric["A_Z"] }>,
				typeof $internal
			>,
			true,
			typeof Test.Out.PASS
		>(),
		Test.It<
			HasKey<Infer<"Hello ulysse!", { alphanumeric: true }>, typeof $internal>,
			true,
			typeof Test.Out.PASS
		>(),
	);
});
