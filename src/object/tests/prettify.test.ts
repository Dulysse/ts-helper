import type { Prettify } from "../modules/prettify";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Prettify object type",
		Test.It<
			Prettify<
				{
					a: string;
				} & {
					b: number;
				} & {
					c: boolean;
				}
			>,
			{ a: string; b: number; c: boolean },
			typeof Test.Out.PASS
		>(),
	);
});
