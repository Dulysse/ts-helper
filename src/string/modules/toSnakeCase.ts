import type { ContainExactString, ReplaceAll, ToKebabCase } from "@/string";
import { stringConverterRegex } from "@/string/utils";

/**
 * Converts a string to `snake_case`.
 * - *I follow [https://labex.io/tutorials/convert-string-to-kebab-case-with-javascript-28653](https://labex.io/tutorials/convert-string-to-kebab-case-with-javascript-28653) rules*
 * @regex /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
 * @template TString The string to convert to `snake_case`.
 * @example
 * ```tsx
 * import type { Str } from "@dulysse1/ts-helper";
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

/**
 * Converts a string to `snake_case`.
 * - *I follow [https://labex.io/tutorials/convert-string-to-kebab-case-with-javascript-28653](https://labex.io/tutorials/convert-string-to-kebab-case-with-javascript-28653) rules*
 * @regex /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
 * @param text The string to convert to `snake_case`.
 *
 * @example
 * ```tsx
 * import { str } from "@dulysse1/ts-helper";
 *
 * const a = str.toSnakeCase("This text will be converted into snake_case"); // "this_text_will_be_converted_into_snake_case"
 * const b = str.toSnakeCase("Hello World"); // "hello_world"
 * const c = str.toSnakeCase("some-mixed_string With spaces_underscores-and-hyphens"); // "some_mixed_string_with_spaces_underscores_and_hyphens"
 * ```
 * ---------------------------
 * Do you have any questions about `toSnakeCase` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export const toSnakeCase = <T extends string>(text: T): ToSnakeCase<T> => {
	return (text
		?.match(stringConverterRegex)
		?.map(x => x.toLowerCase())
		?.join("_") ?? "") as ToSnakeCase<T>;
};
