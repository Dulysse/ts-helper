import type {
	IsPositive,
	IsZero,
	Subtract,
	Opposite,
	Compare,
	IsFloat,
	Comparators,
} from "@/numeric";
import type { IsValidNumberInput } from "../utils";
import type { And } from "@/operator";

import * as Test from "@/test/local";

Test.Describe(
	"Get the remaining integer after the division of two numbers",
	Test.It<Modulo<0, 0>, never, Test.Out.PASS>(),
	Test.It<Modulo<0, 10>, 0, Test.Out.PASS>(),
	Test.It<Modulo<100, 25>, 0, Test.Out.PASS>(),
	Test.It<Modulo<20, 3>, 2, Test.Out.PASS>(),
);

declare type _PositiveModulo<TNumber1 extends number, TNumber2 extends number> =
	Compare<TNumber1, TNumber2> extends Comparators.EQUAL
		? 0
		: Compare<TNumber1, TNumber2> extends Comparators.GREATER
			? _PositiveModulo<Subtract<TNumber1, TNumber2>, TNumber2>
			: TNumber1;

declare type _Modulo<TNumber1 extends number, TNumber2 extends number> =
	IsZero<TNumber2> extends true
		? never
		: IsZero<TNumber1> extends true
			? 0
			: {
					true: {
						true: _PositiveModulo<TNumber1, TNumber2>;
						false: Opposite<_PositiveModulo<TNumber1, Opposite<TNumber2>>>;
					};
					false: {
						true: Subtract<
							TNumber2,
							_PositiveModulo<Opposite<TNumber1>, TNumber2>
						>;
						false: Opposite<
							Subtract<
								Opposite<TNumber2>,
								_PositiveModulo<Opposite<TNumber1>, Opposite<TNumber2>>
							>
						>;
					};
				}[`${IsPositive<TNumber1>}`][`${IsPositive<TNumber2>}`];

/**
 * The modulo mathematical operation (often referred to as `%` in programming) is used to obtain the remainder of an integer division between two numbers.
 * - ⚠️ Returns an absolute result with a precision of two decimals for numbers that don't reach compiler limits, otherwise it returns an `explicit result`. ⚠️
 *
 * @template TNumber1 - The first number (the dividend).
 * @template TNumber2 - The second number (the divisor).
 * @example
 * ```tsx
 * import type { Num } from "@dulysse1/ts-helper";
 *
 * type A = Num.Modulo<0, 0>; // never
 * type B = Num.Modulo<0, 10>; // 0
 * type C = Num.Modulo<100, 25>; // 0
 * type D = Num.Modulo<20, 3>; // 2
 * ```
 * ---------------------------
 * Do you have any questions about `Modulo` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Modulo<TNumber1 extends number, TNumber2 extends number> =
	And<IsValidNumberInput<TNumber1>, IsValidNumberInput<TNumber2>> extends true
		? {
				true: {
					true: number;
					false: number;
				};
				false: {
					true: number;
					false: _Modulo<TNumber1, TNumber2>;
				};
			}[`${IsFloat<TNumber1>}`][`${IsFloat<TNumber2>}`]
		: number;
