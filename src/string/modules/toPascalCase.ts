import type { ContainExactString, ToCamelCase, Trim } from "@/string";

import { Test } from "@/test";

Test.Describe(
	"Convert a string to Pascal Case",
	Test.It<
		ToPascalCase<"This text will be converted into PascalCase">,
		"ThisTextWillBeConvertedIntoPascalCase",
		typeof Test.Out.PASS
	>(),
	Test.It<ToPascalCase<"Hello Wo-rld">, "HelloWo-rld", typeof Test.Out.PASS>(),
	Test.It<ToPascalCase<"22222">, "22222", typeof Test.Out.PASS>(),
	Test.It<ToPascalCase<"eÂxs">, "EÂxs", typeof Test.Out.PASS>(),
	Test.It<
		ToPascalCase<"   he  l lo    Wo    rld     ">,
		"HeLLoWoRld",
		typeof Test.Out.PASS
	>(),
);

/**
 * - Converts a string to `PascalCase`. (This means that all words have their 1st letter capitalized and spaces are omitted.)
 *
 * @template TString The string to convert to `PascalCase`.
 *
 * @example
 * ```tsx
 * import type { Str } from "@dulysse1/ts-helper";
 *
 * type A = Str.ToPascalCase<"This text will be converted into Pascal Case">; // "ThisTextWillBeConvertedIntoPascalCase"
 * type B = Str.ToPascalCase<"Hello World">; // "HelloWorld"
 * type C = Str.ToPascalCase<"222">; // "222"
 * type D = Str.ToPascalCase<"eÂxs">; // "EÂxs"
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
