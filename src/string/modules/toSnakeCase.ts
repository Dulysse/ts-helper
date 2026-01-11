import type { ContainExactString, ReplaceAll, ToKebabCase } from "@/string";

import { Test } from "@/test";

Test.Describe(
	"Convert a string to snake_case",
	Test.It<
		ToSnakeCase<"This text will be converted into snake_case">,
		"this_text_will_be_converted_into_snake_case",
		typeof Test.Out.PASS
	>(),
	Test.It<ToSnakeCase<"Hello-World?">, "hello_world", typeof Test.Out.PASS>(),
	Test.It<ToSnakeCase<"DEMO">, "demo", typeof Test.Out.PASS>(),
	Test.It<
		ToSnakeCase<"some-mixed_string With spaces_underscores-and-hyphens">,
		"some_mixed_string_with_spaces_underscores_and_hyphens",
		typeof Test.Out.PASS
	>(),
	Test.It<
		ToSnakeCase<"IAmEditingSomeXMLAndHTML">,
		"i_am_editing_some_xml_and_html",
		typeof Test.Out.PASS
	>(),
	Test.It<
		ToSnakeCase<"IAmEdiét22222ingAAA">,
		"i_am_edi_t22222_ing_aaa",
		typeof Test.Out.PASS
	>(),
);

/**
 * - Converts a string to `snake_case`. (This means that all words are in lower case and separated by underscores `_`.)
 * @template TString The string to convert to `snake_case`.
 *
 *
 * @example
 * ```tsx
 * import type { Str } from "@dulysse1/ts-helper";
 *
 * // Typescript implementation example:
 * const toSnakeCase = <T extends string>(str: T): Str.ToSnakeCase<T> => str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join("_") as Str.ToSnakeCase<T>;
 * 
 * // More examples:
 * type A = Str.ToSnakeCase<"This text will be converted into snake_case">; // "this_text_will_be_converted_into_snake_case"
 * type B = Str.ToSnakeCase<"Hello World">; // "hello_world"
 * type C = Str.ToSnakeCase<"DEMO">; // "demo"
 *
 * ```
 * ---------------------------
 * Do you have any questions about `ToSnakeCase` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type ToSnakeCase<TString extends string> =
	ContainExactString<TString> extends true
		? string
		: ReplaceAll<ToKebabCase<TString>, "-", "_">;
