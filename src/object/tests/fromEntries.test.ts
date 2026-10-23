import { describe, expect, it } from "vitest";
import { obj, type FromEntries } from "@/object";
import { Test } from "@/test";

Test.Describe(
	"Get an object from given entries",
	Test.It<
		FromEntries<
			(["a", string] | ["b", number] | ["c", boolean] | ["d", string])[]
		>,
		{
			a?: string | undefined;
			b?: number | undefined;
			c?: boolean | undefined;
			d?: string | undefined;
		}
	>(),
	Test.It<
		FromEntries<[["a", string], ["b", number], ["c", boolean], ["d", string]]>,
		{
			a: string;
			b: number;
			c: boolean;
			d: string;
		}
	>(),
	Test.It<
		FromEntries<[["name", "Ulysse"], ["age", 26]]>,
		{
			name: "Ulysse";
			age: 26;
		}
	>(),
	Test.It<FromEntries<unknown[][]>, Record<PropertyKey, unknown>>(),
);

describe("obj.fromEntries", () => {
	it("creates an object from entry pairs", () => {
		expect(
			obj.fromEntries([
				["name", "Ulysse"],
				["age", 26],
			]),
		).toEqual({ name: "Ulysse", age: 26 });
	});

	it("uses the last value when a key occurs more than once", () => {
		expect(
			obj.fromEntries([
				["status", "pending"],
				["status", "complete"],
			]),
		).toEqual({ status: "complete" });
	});

	it("supports symbol keys and returns an empty object for no entries", () => {
		const symbol = Symbol("key");
		const object = obj.fromEntries([[symbol, "value"]]);

		expect(object[symbol]).toBe("value");
		expect(obj.fromEntries([])).toEqual({});
	});
});
