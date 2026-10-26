import type { PrimitiveOf } from "../modules/primitiveOf";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Extract the primitive type of a value",
		Test.It<PrimitiveOf<"hello">, string, typeof Test.Out.PASS>(),
		Test.It<PrimitiveOf<1>, number, typeof Test.Out.PASS>(),
		Test.It<PrimitiveOf<true>, boolean, typeof Test.Out.PASS>(),
		Test.It<PrimitiveOf<bigint>, bigint, typeof Test.Out.PASS>(),
		Test.It<PrimitiveOf<symbol>, symbol, typeof Test.Out.PASS>(),
		Test.It<PrimitiveOf<23 | "23">, string | number, typeof Test.Out.PASS>(),
		Test.It<PrimitiveOf<{}>, object, typeof Test.Out.PASS>(),
	);
});
