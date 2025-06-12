import type { IsPositive } from "@/numeric";
import type { Not } from "@/operator";

import * as Test from "@/test/local";

Test.Describe(
	"Check if a number is a negative number",
	Test.It<IsNegative<number>, boolean, Test.Out.PASS>(),
	Test.It<IsNegative<2.33>, false, Test.Out.PASS>(),
	Test.It<IsNegative<-5>, true, Test.Out.PASS>(),
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
