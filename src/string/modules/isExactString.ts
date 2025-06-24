import type { Equal } from "@/operator";

import * as Test from "@/test/local";

Test.Describe(
	"Check if a string type is exactly a string type",
	Test.It<IsExactString<"hello">, false, Test.Out.PASS>(),
	Test.It<IsExactString<string>, true, Test.Out.PASS>(),
	Test.It<IsExactString<`hello${string}`>, false, Test.Out.PASS>(),
	Test.It<IsExactString<"hello" | string>, true, Test.Out.PASS>(),
);

/**
 * - Check if a type `TString` is exactly a string type
 *
 * @template TString The type to check
 * @example
 * ```tsx
 * import type { Str } from "@dulysse1/ts-helper";
 *
 * type A = Str.IsExactString<string>; // true
 * type B = Str.IsExactString<"Hello world!">; // false
 * ```
 * ---------------------------
 * Do you have any questions about `IsExactString` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type IsExactString<TString extends string> = Equal<
	TString,
	string
>;
