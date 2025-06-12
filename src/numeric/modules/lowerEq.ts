import type { And } from "@/operator";
import type { IsValidNumberInput } from "../utils";
import type { Comparators, Compare } from "@/numeric";

import * as Test from "@/test/local";

Test.Describe(
	"Check if a number is lower or equal than another",
	Test.It<LowerEq<10, 2>, true, Test.Out.FAIL>(),
	Test.It<LowerEq<2, 2>, true, Test.Out.PASS>(),
	Test.It<LowerEq<number, 2>, boolean, Test.Out.PASS>(),
);

export declare type _LowerEq<TNumber1 extends number, TNumber2 extends number> =
	And<IsValidNumberInput<TNumber1>, IsValidNumberInput<TNumber2>> extends true
		? Compare<TNumber1, TNumber2> extends Comparators.LOWER | Comparators.EQUAL
			? true
			: false
		: boolean;

/**
 * - Check if number `TNumber1` is lower than `TNumber2` or equal to `TNumber2`
 * - ⚠️ Returns an absolute result with a precision of two decimals for numbers that don't reach compiler limits, otherwise it returns an `explicit result`. ⚠️
 *
 * @template TNumber1 - The first number to compare.
 * @template TNumber2 - The second number to compare.
 * @example
 * ```tsx
 * import type { Num } from "@dulysse1/ts-helper";
 *
 * type A = Num.LowerEq<12, 10>; // false
 * type B = Num.LowerEq<10, 10>; // true
 * ```
 * ---------------------------
 * Do you have any questions about `LowerEq` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type LowerEq<
	TNumber1 extends number,
	TNumber2 extends number,
> = _LowerEq<TNumber1, TNumber2>;
