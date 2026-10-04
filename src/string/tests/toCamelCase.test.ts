import { it, describe, expect } from "vitest";
import { str, Str } from "@/string";
import { Test } from "@/test";

Test.Describe(
	"Str",
	Test.Describe(
		"Convert a string to camelCase",
		Test.It<
			Str.ToCamelCase<"This text will be converted into camelCase">,
			"thisTextWillBeConvertedIntoCamelCase",
			typeof Test.Out.PASS
		>(),
		Test.It<
			Str.ToCamelCase<"  he  l lo    Wo    rld     ">,
			"heLLoWoRld",
			typeof Test.Out.PASS
		>(),
		Test.It<
			Str.ToCamelCase<"some_database_field_name">,
			"someDatabaseFieldName",
			typeof Test.Out.PASS
		>(),
		Test.It<
			Str.ToCamelCase<"Some label that needs to be camelized">,
			"someLabelThatNeedsToBeCamelized",
			typeof Test.Out.PASS
		>(),
		Test.It<
			Str.ToCamelCase<"some-javascript-property2">,
			"someJavascriptProperty2",
			typeof Test.Out.PASS
		>(),
		Test.It<
			Str.ToCamelCase<"some-mixed_string with spaces_underscores-and-hyphens">,
			"someMixedStringWithSpacesUnderscoresAndHyphens",
			typeof Test.Out.PASS
		>(),
	),
);

describe("str", () => {
	describe("Convert a string to camelCase", () => {
		it("[empty string]", () => {
			expect(str.toCamelCase("")).toBe("");
		});
		it("This text will be converted into camelCase", () => {
			expect(
				str.toCamelCase("This text will be converted into camelCase"),
			).toBe("thisTextWillBeConvertedIntoCamelCase");
		});
		it("  he  l lo    Wo    rld     ", () => {
			expect(str.toCamelCase("  he  l lo    Wo    rld     ")).toBe(
				"heLLoWoRld",
			);
		});
		it("some_database_field_name", () => {
			expect(str.toCamelCase("some_database_field_name")).toBe(
				"someDatabaseFieldName",
			);
		});
		it("Some label that needs to be camelized", () => {
			expect(str.toCamelCase("Some label that needs to be camelized")).toBe(
				"someLabelThatNeedsToBeCamelized",
			);
		});
		it("some-javascript-property2", () => {
			expect(str.toCamelCase("some-javascript-property2")).toBe(
				"someJavascriptProperty2",
			);
		});
		it("some-mixed_string with spaces_underscores-and-hyphens", () => {
			expect(
				str.toCamelCase(
					"some-mixed_string with spaces_underscores-and-hyphens",
				),
			).toBe("someMixedStringWithSpacesUnderscoresAndHyphens");
		});
	});
});
