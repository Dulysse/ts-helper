import { describe, expect, it } from "vitest";
import { str, Str } from "@/string";
import { Test } from "@/test";

Test.Describe(
	"Str",
	Test.Describe(
		"Convert a string to snake_case",
		Test.It<
			Str.ToSnakeCase<"This text will be converted into snake_case">,
			"this_text_will_be_converted_into_snake_case",
			typeof Test.Out.PASS
		>(),
		Test.It<
			Str.ToSnakeCase<"Hello-World?">,
			"hello_world",
			typeof Test.Out.PASS
		>(),
		Test.It<Str.ToSnakeCase<"DEMO">, "demo", typeof Test.Out.PASS>(),
		Test.It<
			Str.ToSnakeCase<"some-mixed_string With spaces_underscores-and-hyphens">,
			"some_mixed_string_with_spaces_underscores_and_hyphens",
			typeof Test.Out.PASS
		>(),
		Test.It<
			Str.ToSnakeCase<"IAmEditingSomeXMLAndHTML">,
			"i_am_editing_some_xml_and_html",
			typeof Test.Out.PASS
		>(),
		Test.It<
			Str.ToSnakeCase<"IAmEdiét22222ingAAA">,
			"i_am_edi_t22222_ing_aaa",
			typeof Test.Out.PASS
		>(),
		Test.It<
			Str.ToSnakeCase<"7%`Nl}J)HwJ!&o5`zqTOJq??g!fL~xPm#yK?j&c|{Ut$X!j}Ih">,
			"7_nl_j_hw_j_o5_zq_to_jq_g_f_l_x_pm_y_k_j_c_ut_x_j_ih",
			typeof Test.Out.PASS
		>(),
	),
);

describe("str", () => {
	describe("Convert a string to snake_case", () => {
		it("[empty string]", () => {
			expect(str.toSnakeCase("")).toBe("");
		});
		it("This text will be converted into snake_case", () => {
			expect(
				str.toSnakeCase("This text will be converted into snake_case"),
			).toBe("this_text_will_be_converted_into_snake_case");
		});
		it("Hello-World?", () => {
			expect(str.toSnakeCase("Hello-World?")).toBe("hello_world");
		});
		it("DEMO", () => {
			expect(str.toSnakeCase("DEMO")).toBe("demo");
		});
		it("some-mixed_string With spaces_underscores-and-hyphens", () => {
			expect(
				str.toSnakeCase(
					"some-mixed_string With spaces_underscores-and-hyphens",
				),
			).toBe("some_mixed_string_with_spaces_underscores_and_hyphens");
		});
		it("IAmEditingSomeXMLAndHTML", () => {
			expect(str.toSnakeCase("IAmEditingSomeXMLAndHTML")).toBe(
				"i_am_editing_some_xml_and_html",
			);
		});
		it("IAmEdiét22222ingAAA", () => {
			expect(str.toSnakeCase("IAmEdiét22222ingAAA")).toBe(
				"i_am_edi_t22222_ing_aaa",
			);
		});
		it("7%`Nl}J)HwJ!&o5`zqTOJq??g!fL~xPm#yK?j&c|{Ut$X!j}Ih", () => {
			expect(
				str.toSnakeCase("7%`Nl}J)HwJ!&o5`zqTOJq??g!fL~xPm#yK?j&c|{Ut$X!j}Ih"),
			).toBe("7_nl_j_hw_j_o5_zq_to_jq_g_f_l_x_pm_y_k_j_c_ut_x_j_ih");
		});
	});
});
