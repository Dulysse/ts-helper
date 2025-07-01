import type { IsEven } from "@/numeric";
import type { Not } from "@/operator";

import { Test } from "@/test";

Test.Describe(
	"Check if a number is an odd number",
	Test.It<IsOdd<number>, boolean, typeof Test.Out.PASS>(),
	Test.It<IsOdd<2.33>, false, typeof Test.Out.PASS>(),
	Test.It<IsOdd<-5>, true, typeof Test.Out.PASS>(),
);

/**
 * - Check if a number `TNumber` is an `odd` number
 *
 * @template TNumber - The number to check.
 * @example
 * ```tsx
 * import type { Num } from "@dulysse1/ts-helper";
 *
 * type A = Num.IsOdd<-23>; // true
 * type B = Num.IsOdd<10.29>; // false
 * ```
 * ---------------------------
 * Do you have any questions about `IsOdd` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type IsOdd<TNumber extends number> = Not<IsEven<TNumber>>;
