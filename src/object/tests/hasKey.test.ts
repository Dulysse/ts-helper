import type { HasKey } from "../modules/hasKey";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Check if an object has a specific key",
		Test.It<HasKey<{}, number>, false, typeof Test.Out.PASS>(),
		Test.It<HasKey<{ name: string }, "name">, true, typeof Test.Out.PASS>(),
		Test.It<HasKey<{ name: string }, "age">, false, typeof Test.Out.PASS>(),
		Test.It<
			HasKey<{ name: string; age?: number }, "age" | "test">,
			boolean,
			typeof Test.Out.PASS
		>(),
		Test.It<HasKey<string, "toString">, true, typeof Test.Out.PASS>(),
	);
});
