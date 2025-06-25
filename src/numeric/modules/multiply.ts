import type { And, Or } from "@/operator";
import type {
	Opposite,
	IsPositive,
	IsZero,
	Add,
	Subtract,
	Increment,
	Decrement,
	IsFloat,
} from "@/numeric";
import type { IsValidNumberInput } from "../utils";

import * as Test from "@/test/local";

Test.Describe(
	"Multiply one number with another",
	Test.It<Multiply<10, 2>, 20, Test.Out.PASS>(),
	Test.It<Multiply<-100, 5>, -500, Test.Out.PASS>(),
	Test.It<Multiply<2.2, 2>, 4.4, Test.Out.PASS>(),
);

declare type MultiplyPositive<
	TNumber1 extends number,
	TNumber2 extends number,
	TResult extends number = 0,
> =
	IsValidNumberInput<TResult> extends true
		? IsZero<TNumber2> extends true
			? TResult
			: MultiplyPositive<TNumber1, Decrement<TNumber2>, Add<TResult, TNumber1>>
		: number;

declare type MultiplyNegative<
	TNumber1 extends number,
	TNumber2 extends number,
	TResult extends number = 0,
> =
	IsValidNumberInput<TResult> extends true
		? IsZero<TNumber2> extends true
			? TResult
			: MultiplyNegative<
					TNumber1,
					Increment<TNumber2>,
					Subtract<TResult, TNumber1>
				>
		: number;

declare type _Multiply<TNumber1 extends number, TNumber2 extends number> = {
	true: {
		true: MultiplyPositive<TNumber1, TNumber2>;
		false: MultiplyNegative<TNumber1, TNumber2>;
	};
	false: {
		true: MultiplyNegative<Opposite<TNumber1>, Opposite<TNumber2>>;
		false: MultiplyPositive<Opposite<TNumber1>, Opposite<TNumber2>>;
	};
}[`${IsPositive<TNumber1>}`][`${IsPositive<TNumber2>}`];

/**
 * - Multiply `TNumber1` and `TNumber2`
 * - ⚠️ Returns an absolute result with a precision of two decimals for numbers that don't reach compiler limits, otherwise it returns an `explicit result`. ⚠️
 *
 * @template TNumber1 - The first number to multiply.
 * @template TNumber2 - The second number to multiply.
 * @example
 * ```tsx
 * import type { Num } from "@dulysse1/ts-helper";
 *
 * type A = Num.Multiply<6, 7>; // 42
 * type B = Num.Multiply<6, -7>; // -42
 * type C = Num.Multiply<6, 0>; // 0
 * type D = Multiply<6.58, 7>; // 46.06
 * ```
 * ---------------------------
 * Do you have any questions about `Multiply` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Multiply<TNumber1 extends number, TNumber2 extends number> =
	And<IsValidNumberInput<TNumber1>, IsValidNumberInput<TNumber2>> extends true
		? Or<IsZero<TNumber1>, IsZero<TNumber2>> extends true
			? 0
			: {
					true: {
						true: number;
						false: _Multiply<TNumber1, TNumber2>;
					};
					false: {
						true: _Multiply<TNumber2, TNumber1>;
						false: _Multiply<TNumber1, TNumber2>;
					};
				}[`${IsFloat<TNumber1>}`][`${IsFloat<TNumber2>}`]
		: number;
