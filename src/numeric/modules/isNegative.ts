import type { IsPositive } from "@/numeric";

import type { Not } from "@/operator";

import { Test } from "@/test";

Test.Describe(
	"Check if a number is a negative number",
	Test.It<IsNegative<number>, boolean, typeof Test.Out.PASS>(),
	Test.It<IsNegative<2.33>, false, typeof Test.Out.PASS>(),
	Test.It<IsNegative<-5>, true, typeof Test.Out.PASS>(),
);

/**
 * - Check if a number `TNumber` is a negative number
 *
 * @template TNumber - The number to check.
 * @example
 * ```tsx
 * import type { Num } from "@dulysse1/ts-helper";
 *
 * type A = Num.IsNegative<-23>; // true
 * type B = Num.IsNegative<10>; // false
 * ```
 * ---------------------------
 * Do you have any questions about `IsNegative` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type IsNegative<TNumber extends number> = Not<
	IsPositive<TNumber>
>;
