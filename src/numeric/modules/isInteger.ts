import type { IsValidNumberInput } from "@/numeric/utils";

import { Test } from "@/test";

Test.Describe(
	"Check if a number is an integer number",
	Test.It<IsInteger<number>, boolean, typeof Test.Out.PASS>(),
	Test.It<IsInteger<2.33>, false, typeof Test.Out.PASS>(),
	Test.It<IsInteger<-5>, true, typeof Test.Out.PASS>(),
);

/**
 * - Check if a number `TNumber` is an integer number
 *
 * @template TNumber - The number to check.
 * @example
 * ```tsx
 * import type { Num } from "@dulysse1/ts-helper";
 *
 * type A = Num.IsInteger<-23>; // true
 * type B = Num.IsInteger<10.29>; // false
 * ```
 * ---------------------------
 * Do you have any questions about `IsInteger` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type IsInteger<TNumber extends number> =
	IsValidNumberInput<TNumber> extends true
		? `${TNumber}` extends `${infer _ extends number}.${infer __ extends number}`
			? false
			: true
		: boolean;
