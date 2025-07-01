import type { Equal } from "@/operator";

import { Test } from "@/test";

Test.Describe(
	"Check if a number is equal to zero",
	Test.It<IsZero<0>, true, typeof Test.Out.PASS>(),
	Test.It<IsZero<2 | 0>, false, typeof Test.Out.PASS>(),
	Test.It<IsZero<typeof Infinity>, false, typeof Test.Out.PASS>(),
);

/**
 * - Check if a number `TNumber` is equal to zero
 *
 * @template TNumber - The number to check.
 * @example
 * ```tsx
 * import type { Num } from "@dulysse1/ts-helper";
 *
 * type A = Num.IsZero<-23>; // false
 * type B = Num.IsZero<0>; // true
 * ```
 * ---------------------------
 * Do you have any questions about `IsZero` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type IsZero<TNumber extends number> =
	Equal<TNumber, 0> extends true ? true : false;
