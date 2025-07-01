import type { And } from "@/operator";
import type { IsValidNumberInput } from "../utils";
import type { Comparators, Compare } from "@/numeric";

import { Test } from "@/test";

Test.Describe(
	"Check if a number is greater or equal than another",
	Test.It<GreaterEq<1, 2>, true, typeof Test.Out.FAIL>(),
	Test.It<GreaterEq<2, 2>, true, typeof Test.Out.PASS>(),
	Test.It<GreaterEq<number, 2>, boolean, typeof Test.Out.PASS>(),
);

declare type _GreaterEq<TNumber1 extends number, TNumber2 extends number> =
	And<IsValidNumberInput<TNumber1>, IsValidNumberInput<TNumber2>> extends true
		? Compare<TNumber1, TNumber2> extends
				| Comparators.GREATER
				| Comparators.EQUAL
			? true
			: false
		: boolean;

/**
 * - Check if number `TNumber1` is greater than `TNumber2` or equal to `TNumber2`
 * - ⚠️ Returns an absolute result with a precision of two decimals for numbers that don't reach compiler limits, otherwise it returns an `explicit result`. ⚠️
 *
 * @template TNumber1 - The first number to compare.
 * @template TNumber2 - The second number to compare.
 * @example
 * ```tsx
 * import type { Num } from "@dulysse1/ts-helper";
 *
 * type A = Num.GreaterEq<6, 10>; // false
 * type B = Num.GreaterEq<10, 10>; // true
 * ```
 * ---------------------------
 * Do you have any questions about `GreaterEq` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type GreaterEq<
	TNumber1 extends number,
	TNumber2 extends number,
> = _GreaterEq<TNumber1, TNumber2>;
