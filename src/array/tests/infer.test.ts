import type { HasKey } from "@/object";
import type { $internal } from "@/brand/modules/symbol";
import type { Infer } from "../modules/infer";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Check if an array type satisfies the rules defined in InferArrayRules",
		Test.It<
			HasKey<Infer<[1, 2, 3], { minLength: 2 }>, typeof $internal>,
			false,
			typeof Test.Out.PASS
		>(),
		Test.It<
			HasKey<Infer<[1, 2, 3], { minLength: 4 }>, typeof $internal>,
			true,
			typeof Test.Out.PASS
		>(),
		Test.It<
			HasKey<Infer<[1, 1, 3], { unique: true }>, typeof $internal>,
			true,
			typeof Test.Out.PASS
		>(),
	);
});
