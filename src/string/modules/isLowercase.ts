import type { Equal } from "@/operator";
import type { ContainExactString } from "@/string/modules/containExactString";

import { Test } from "@/test";

Test.Describe(
	"TypeScript utility type to check if a string is lowercase",
	Test.It<IsLowerCase<"hello">, true, typeof Test.Out.PASS>(),
	Test.It<IsLowerCase<`${string} demo`>, boolean, typeof Test.Out.PASS>(),
	Test.It<IsLowerCase<`${string} DEMO`>, boolean, typeof Test.Out.PASS>(),
	Test.It<IsLowerCase<string>, boolean, typeof Test.Out.PASS>(),
	Test.It<IsLowerCase<"DEMO">, false, typeof Test.Out.PASS>(),
);

/**
 * - TypeScript utility type to check if a string is lowercase.
 *
 * @template TString - The string type to check.
 * @example
 * ```tsx
 * import type { Str } from "@dulysse1/ts-helper";
 *
 * type A = Str.IsLowerCase<"Hello world!">; // false
 * type B = Str.IsLowerCase<"HELLO">; // false
 * type C = Str.IsLowerCase<"hello">; // true
 * ```
 * ---------------------------
 * Do you have any questions about `IsLowerCase` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type IsLowerCase<TString extends string> =
	ContainExactString<TString> extends true
		? boolean
		: Equal<Lowercase<TString>, TString> extends true
			? Equal<Uppercase<TString>, TString> extends true
				? false
				: true
			: false;
