import { describe, expect, it } from "vitest";
import { obj, type Entries } from "@/object";
import { Test } from "@/test";

Test.Describe(
	"Get a tuple of an object's entries",
	Test.It<Entries<{ a: string; b: number; c: boolean }>["length"], 3>(),
	Test.It<
		Entries<{ a: string; b: number; c: boolean }>[number],
		["a", string] | ["b", number] | ["c", boolean]
	>(),
	Test.It<Entries<{}>, []>(),
	Test.It<Entries<Record<"demo", unknown>>, [["demo", unknown]]>(),
	Test.It<Entries<Record<string, unknown>>, [string, unknown][]>(),
	Test.It<
		Entries<{
			[key in symbol]: boolean | string;
		}>,
		[symbol, boolean | string][]
	>(),
);

describe("obj.entries", () => {
	it("returns enumerable own string-keyed entries in JavaScript order", () => {
		const symbol = Symbol("ignored");
		const object = Object.assign(
			Object.create({ inherited: true }),
			{ second: 2, first: 1, 3: "three" },
			{ [symbol]: "ignored" },
		);

		expect(obj.entries(object)).toEqual([
			["3", "three"],
			["second", 2],
			["first", 1],
		]);
	});

	it("returns an empty array for an object without enumerable own keys", () => {
		expect(obj.entries({})).toEqual([]);
	});
});
