import type { IsValidNumberInput } from "@/numeric/utils";

import { Test } from "@/test";

Test.Describe(
	"Check if a number is a positive number",
	Test.It<IsPositive<number>, boolean, typeof Test.Out.PASS>(),
	Test.It<IsPositive<2.33>, true, typeof Test.Out.PASS>(),
	Test.It<IsPositive<-5>, false, typeof Test.Out.PASS>(),
);

/**
 * - Check if a number `TNumber` is positive or equal to zero
 *
 * @template TNumber - The number to check.
 * @example
 * ```tsx
 * import type { Num } from "@dulysse1/ts-helper";
 *
 * type A = Num.IsPositive<-23>; // false
 * type B = Num.IsPositive<10>; // true
 * ```
 * ---------------------------
 * Do you have any questions about `IsPositive` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type IsPositive<TNumber extends number> =
	IsValidNumberInput<TNumber> extends true
		? `${TNumber}` extends `-${number}`
			? false
			: true
		: boolean;
