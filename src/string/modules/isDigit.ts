import type { Digit } from "@/string/utils";

import { Test } from "@/test";

Test.Describe(
	"TypeScript utility type to check if a string is a digit",
	Test.It<IsDigit<"5">, true, typeof Test.Out.PASS>(),
	Test.It<IsDigit<"a">, false, typeof Test.Out.PASS>(),
	Test.It<IsDigit<"123">, true, typeof Test.Out.PASS>(),
	Test.It<IsDigit<"">, false, typeof Test.Out.PASS>(),
);

/**
 * - TypeScript utility type to check if a string is a digit.
 *
 * @template TString - The string type to check.
 * @example
 * ```tsx
 * import type { Str } from "@dulysse1/ts-helper";
 *
 * type A = Str.IsDigit<"5">; // true
 * type B = Str.IsDigit<"a">; // false
 * type C = Str.IsDigit<"123">; // true
 * type D = Str.IsDigit<"">; // false
 * ```
 * ---------------------------
 * Do you have any questions about `IsDigit` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type IsDigit<TString extends string> = TString extends Digit
	? true
	: false;
