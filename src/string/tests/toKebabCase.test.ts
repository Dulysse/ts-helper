import { it, describe, expect } from "vitest";
import { str, Str } from "@/string";
import { Test } from "@/test";

Test.Describe(
	"Str",
	Test.Describe(
		"Convert a string to kebab-case",
		Test.It<
			Str.ToKebabCase<"This text will be converted into kebab-case">,
			"this-text-will-be-converted-into-kebab-case",
			typeof Test.Out.PASS
		>(),
		Test.It<
			Str.ToKebabCase<"Hello World">,
			"hello-world",
			typeof Test.Out.PASS
		>(),
		Test.It<
			Str.ToKebabCase<"some-mixed_string With spaces_underscores-and-hyphens">,
			"some-mixed-string-with-spaces-underscores-and-hyphens",
			typeof Test.Out.PASS
		>(),
		Test.It<Str.ToKebabCase<"DEMO">, "demo", typeof Test.Out.PASS>(),
		Test.It<
			Str.ToKebabCase<"IAmEditingSomeXMLAndHTML">,
			"i-am-editing-some-xml-and-html",
			typeof Test.Out.PASS
		>(),
		Test.It<
			Str.ToKebabCase<"IAmEdiét22222ingAAA">,
			"i-am-edi-t22222-ing-aaa",
			typeof Test.Out.PASS
		>(),
		Test.It<Str.ToKebabCase<`demo ${string}`>, string, typeof Test.Out.PASS>(),
		Test.It<
			Str.ToKebabCase<"D5Z3Rh,iLw{*zOdb&JwWpG8(DONLMN&">,
			"d-5-z-3-rh-i-lw-z-odb-jw-wp-g-8-donlmn",
			typeof Test.Out.PASS
		>(),
	),
);

describe("str", () => {
	describe("Convert a string to kebab-case", () => {
		it("[empty string]", () => {
			expect(str.toKebabCase("")).toBe("");
		});
		it("This text will be converted into kebab-case", () => {
			expect(
				str.toKebabCase("This text will be converted into kebab-case"),
			).toBe("this-text-will-be-converted-into-kebab-case");
		});
		it("Hello World", () => {
			expect(str.toKebabCase("Hello World")).toBe("hello-world");
		});
		it("some-mixed_string With spaces_underscores-and-hyphens", () => {
			expect(
				str.toKebabCase(
					"some-mixed_string With spaces_underscores-and-hyphens",
				),
			).toBe("some-mixed-string-with-spaces-underscores-and-hyphens");
		});
		it("DEMO", () => {
			expect(str.toKebabCase("DEMO")).toBe("demo");
		});
		it("IAmEditingSomeXMLAndHTML", () => {
			expect(str.toKebabCase("IAmEditingSomeXMLAndHTML")).toBe(
				"i-am-editing-some-xml-and-html",
			);
		});
		it("IAmEdiét22222ingAAA", () => {
			expect(str.toKebabCase("IAmEdiét22222ingAAA")).toBe(
				"i-am-edi-t22222-ing-aaa",
			);
		});
		it("D5Z3Rh,iLw{*zOdb&JwWpG8(DONLMN&", () => {
			expect(str.toKebabCase("D5Z3Rh,iLw{*zOdb&JwWpG8(DONLMN&")).toBe(
				"d-5-z-3-rh-i-lw-z-odb-jw-wp-g-8-donlmn",
			);
		});
	});
});
