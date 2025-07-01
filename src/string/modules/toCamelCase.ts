import type { IsExactString, ToPascalCase } from "@/string";

import * as Test from "@/test";

Test.Describe(
	"Convert a string to camelCase",
	Test.It<
		ToCamelCase<"This text will be converted into camelCase">,
		"thisTextWillBeConvertedIntoCamelcase",
		Test.Out.PASS
	>(),
	Test.It<ToCamelCase<"Hello Wo-rld?">, "helloWorld", Test.Out.PASS>(),
	Test.It<ToCamelCase<"hello_world">, "helloworld", Test.Out.PASS>(),
	Test.It<ToCamelCase<"EÂxs LOL">, "eaxsLol", Test.Out.PASS>(),
);

/**
 * - Converts a string to `camelCase`. (This mean all words except the first one are in lower case and have their 1st letter capitalized and spaces are omitted.)
 * @template TString The string to convert to `camelCase`.
 *
 * @example
 * ```tsx
 * import type { Str } from "@dulysse1/ts-helper";
 *
 * type A = Str.ToCamelCase<"This text will be converted into camel Case">; // "thisTextWillBeConvertedIntoCamelCase"
 * type B = Str.ToCamelCase<"Hello World">; // "helloWorld"
 * type C = Str.ToCamelCase<"EÂxs LOL">; // "eaxsLol"
 * ```
 * ---------------------------
 * Do you have any questions about `ToCamelCase` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type ToCamelCase<TString extends string> =
	IsExactString<TString> extends true
		? string
		: Uncapitalize<ToPascalCase<TString>>;
