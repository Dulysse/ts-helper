import type { ContainExactString, ToCamelCase, Trim } from "@/string";

import { Test } from "@/test";

Test.Describe(
	"Convert a string to Pascal Case",
	Test.It<
		ToPascalCase<"This text will be converted into PascalCase">,
		"ThisTextWillBeConvertedIntoPascalCase",
		typeof Test.Out.PASS
	>(),
	Test.It<ToPascalCase<"Hello Wo-rld">, "HelloWoRld", typeof Test.Out.PASS>(),
	Test.It<ToPascalCase<"22222">, "22222", typeof Test.Out.PASS>(),
	Test.It<ToPascalCase<"eÂxs">, "EXs", typeof Test.Out.PASS>(),
	Test.It<
		ToPascalCase<"   he  l lo    Wo    rld     ">,
		"HeLLoWoRld",
		typeof Test.Out.PASS
	>(),
	Test.It<
		ToPascalCase<"DeDOJZEDOZODmo">,
		"DeDojzedozoDmo",
		typeof Test.Out.PASS
	>(),
	Test.It<
		ToPascalCase<"some-javascript-property2">,
		"SomeJavascriptProperty2",
		typeof Test.Out.PASS
	>(),
);

/**
 * Converts a string to `PascalCase`.
 * - *I follow [https://labex.io/tutorials/convert-strings-to-camelcase-with-javascript-28648](https://labex.io/tutorials/convert-strings-to-camelcase-with-javascript-28648) rules for camelCase applied to PascalCase, you can found an example of implementation there and a Typescript implementation example below.*
 *
 * @template TString The string to convert to `PascalCase`.
 *
 * @example
 * ```tsx
 * import type { Str } from "@dulysse1/ts-helper";
 *
 * // Typescript implementation example:
 * const toPascalCase = <T extends string>(str: T): ToPascalCase<T> => {
 *	return (str
 *		.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
 *		?.map(word => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase())
 *		.join("") ?? "") as ToPascalCase<T>;
 *};
 *
 * // More examples:
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
