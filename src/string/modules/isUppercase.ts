import type { And, Equal, Not } from "@/operator";
import type { ContainExactString } from "@/string/modules/containExactString";

import { Test } from "@/test";

Test.Describe(
	"TypeScript utility type to check if a string is uppercase",
	Test.It<IsUpperCase<"hello">, false, typeof Test.Out.PASS>(),
	Test.It<IsUpperCase<`${string} demo`>, boolean, typeof Test.Out.PASS>(),
	Test.It<IsUpperCase<`${string} DEMO`>, boolean, typeof Test.Out.PASS>(),
	Test.It<IsUpperCase<string>, boolean, typeof Test.Out.PASS>(),
	Test.It<IsUpperCase<"DEMO">, true, typeof Test.Out.PASS>(),
);

/**
 * - TypeScript utility type to check if a string is uppercase.
 *
 * @template TString - The string type to check.
 * @example
 * ```tsx
 * import type { Str } from "@dulysse1/ts-helper";
 *
 * type A = Str.IsUpperCase<"Hello world!">; // false
 * type B = Str.IsUpperCase<"HELLO">; // true
 * ```
 * ---------------------------
 * Do you have any questions about `IsUpperCase` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type IsUpperCase<TString extends string> =
	ContainExactString<TString> extends true
		? boolean
		: And<
					Equal<Uppercase<TString>, TString>,
					Not<Equal<Lowercase<TString>, TString>>
			  > extends true
			? true
			: false;
