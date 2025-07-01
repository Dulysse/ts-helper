import type { And } from "@/operator";

import type { IsValidNumberInput } from "../utils";
import type { LowerEq, GreaterEq } from "@/numeric";

import { Test } from "@/test";

Test.Describe(
	"Check if a number is between two other numbers",
	Test.It<Between<1, 1, 5>, true, typeof Test.Out.PASS>(),
	Test.It<Between<0, 10, 20>, true, typeof Test.Out.FAIL>(),
	Test.It<Between<number, 10, 7>, boolean, typeof Test.Out.PASS>(),
);

/**
 * - Check if type `TNumber` is between `From` and `To` numbers
 * - ⚠️ Returns an absolute result with a precision of two decimals for numbers that don't reach compiler limits, otherwise it returns an `explicit result`. ⚠️
 *
 * @template TNumber - The number to check.
 * @template From - The lower bound of the range.
 * @template To - The upper bound of the range.
 * @example
 * ```tsx
 * import type { Num } from "@dulysse1/ts-helper";
 *
 * type A = Num.Between<-1, 1, 5>; // false
 * type B = Num.Between<2, 1, 5>; // true
 * ```
 * ---------------------------
 * Do you have any questions about `Between` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Between<
	TNumber extends number,
	From extends number,
	To extends number,
> =
	And<
		And<IsValidNumberInput<From>, IsValidNumberInput<To>>,
		IsValidNumberInput<TNumber>
	> extends true
		? And<GreaterEq<TNumber, From>, LowerEq<TNumber, To>>
		: boolean;
