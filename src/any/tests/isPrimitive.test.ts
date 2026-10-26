import type { IsPrimitive } from "../modules/isPrimitive";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Check if a type is a primitive type",
		Test.It<IsPrimitive<string>, true, typeof Test.Out.PASS>(),
		Test.It<IsPrimitive<1 | string>, boolean, typeof Test.Out.PASS>(),
		Test.It<IsPrimitive<bigint>, true, typeof Test.Out.PASS>(),
		Test.It<IsPrimitive<symbol>, true, typeof Test.Out.PASS>(),
		Test.It<IsPrimitive<{}>, false, typeof Test.Out.PASS>(),
		Test.It<IsPrimitive<string | number>, true, typeof Test.Out.PASS>(),
	);
});
