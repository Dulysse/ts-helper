import type { ContainExactString, ToCamelCase, Trim } from "@/string";
import { stringConverterRegex } from "@/string/utils";

/**
 * Converts a string to `PascalCase`.
 * - *I follow [https://labex.io/tutorials/convert-strings-to-camelcase-with-javascript-28648](https://labex.io/tutorials/convert-strings-to-camelcase-with-javascript-28648) rules*
 * @regex /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
 * @template TString The string to convert to `PascalCase`.
 *
 * @example
 * ```tsx
 * import type { Str } from "@dulysse1/ts-helper";
 *
 * type A = Str.ToPascalCase<"This text will be converted into Pascal Case">; // "ThisTextWillBeConvertedIntoPascalCase"
 * type B = Str.ToPascalCase<"Hello World">; // "HelloWorld"
 * type C = Str.ToPascalCase<"222">; // "222"
 * type D = Str.ToPascalCase<"some-javascript-property2">; // "SomeJavascriptProperty2"
 * ```
 * ---------------------------
 * Do you have any questions about `ToPascalCase` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type ToPascalCase<TString extends string> =
	ContainExactString<TString> extends true
		? string
		: Capitalize<ToCamelCase<Trim<TString>>>;

/**
 * Converts a string to `PascalCase`.
 * - *I follow [https://labex.io/tutorials/convert-strings-to-camelcase-with-javascript-28648](https://labex.io/tutorials/convert-strings-to-camelcase-with-javascript-28648) rules*
 * @regex /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
 * @param text The string to convert to `PascalCase`.
 *
 * @example
 * ```tsx
 * import { str } from "@dulysse1/ts-helper";
 *
 * const a = str.toPascalCase("This text will be converted into Pascal Case"); // "ThisTextWillBeConvertedIntoPascalCase"
 * const b = str.toPascalCase("Hello World"); // "HelloWorld"
 * const c = str.toPascalCase("some-javascript-property2"); // "SomeJavascriptProperty2"
 * ```
 * ---------------------------
 * Do you have any questions about `toPascalCase` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export const toPascalCase = <T extends string>(text: T): ToPascalCase<T> => {
	return (text
		?.match(stringConverterRegex)
		?.map(word => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase())
		?.join("") ?? "") as ToPascalCase<T>;
};
