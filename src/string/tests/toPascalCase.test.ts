import { describe, expect, it } from "vitest";
import { str, Str } from "@/string";
import { Test } from "@/test";

Test.Describe(
	"Str",
	Test.Describe(
		"Convert a string to PascalCase",
		Test.It<
			Str.ToPascalCase<"This text will be converted into PascalCase">,
			"ThisTextWillBeConvertedIntoPascalCase",
			typeof Test.Out.PASS
		>(),
		Test.It<
			Str.ToPascalCase<"Hello Wo-rld">,
			"HelloWoRld",
			typeof Test.Out.PASS
		>(),
		Test.It<Str.ToPascalCase<"22222">, "22222", typeof Test.Out.PASS>(),
		Test.It<Str.ToPascalCase<"eÂxs">, "EXs", typeof Test.Out.PASS>(),
		Test.It<
			Str.ToPascalCase<"   he  l lo    Wo    rld     ">,
			"HeLLoWoRld",
			typeof Test.Out.PASS
		>(),
		Test.It<
			Str.ToPascalCase<"DeDOJZEDOZODmo">,
			"DeDojzedozoDmo",
			typeof Test.Out.PASS
		>(),
		Test.It<
			Str.ToPascalCase<"some-javascript-property2">,
			"SomeJavascriptProperty2",
			typeof Test.Out.PASS
		>(),
	),
);

describe("str", () => {
	describe("Convert a string to PascalCase", () => {
		it("[empty string]", () => {
			expect(str.toPascalCase("")).toBe("");
		});
		it("This text will be converted into PascalCase", () => {
			expect(
				str.toPascalCase("This text will be converted into PascalCase"),
			).toBe("ThisTextWillBeConvertedIntoPascalCase");
		});
		it("Hello Wo-rld", () => {
			expect(str.toPascalCase("Hello Wo-rld")).toBe("HelloWoRld");
		});
		it("22222", () => {
			expect(str.toPascalCase("22222")).toBe("22222");
		});
		it("eÂxs", () => {
			expect(str.toPascalCase("eÂxs")).toBe("EXs");
		});
		it("   he  l lo    Wo    rld     ", () => {
			expect(str.toPascalCase("   he  l lo    Wo    rld     ")).toBe(
				"HeLLoWoRld",
			);
		});
		it("DeDOJZEDOZODmo", () => {
			expect(str.toPascalCase("DeDOJZEDOZODmo")).toBe("DeDojzedozoDmo");
		});
		it("some-javascript-property2", () => {
			expect(str.toPascalCase("some-javascript-property2")).toBe(
				"SomeJavascriptProperty2",
			);
		});
	});
});
