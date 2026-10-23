import { describe, expect, it } from "vitest";
import { obj } from "@/object";
import type { KeyOf } from "@/object";
import { Test } from "@/test";

Test.Describe(
	"Get keys of an object type by an optional filter value",
	Test.It<KeyOf<{}, number>, never, typeof Test.Out.PASS>(),
	Test.It<KeyOf<{ a: string; b: number }, string>, "a", typeof Test.Out.PASS>(),
	Test.It<KeyOf<{ a: string; b: number }, number>, "b", typeof Test.Out.PASS>(),
	Test.It<KeyOf<{ a: string; b: number }>, "a" | "b", typeof Test.Out.PASS>(),
);

describe("obj.keys", () => {
	it("returns the enumerable own string keys in their JavaScript order", () => {
		const symbol = Symbol("hidden");
		const object = Object.assign(
			Object.create({ inherited: true }),
			{ second: 2, first: 1, 3: "three" },
			{ [symbol]: "symbol" },
		);

		expect(obj.keys(object)).toEqual(["3", "second", "first"]);
	});

	it("returns an empty array for an object without enumerable own keys", () => {
		expect(obj.keys({})).toEqual([]);
	});
});
