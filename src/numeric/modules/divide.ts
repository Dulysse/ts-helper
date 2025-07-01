import type { And } from "@/operator";
import type {
	Opposite,
	IsPositive,
	IsZero,
	Add,
	Subtract,
	Increment,
	Decrement,
	IsFloat,
	Lower,
} from "@/numeric";
import type { IsValidNumberInput } from "../utils";

import { Test } from "@/test";

Test.Describe(
	"Divide one number by another",
	Test.It<Divide<10, 2>, 5, typeof Test.Out.PASS>(),
	Test.It<Divide<-100, 5>, -20, typeof Test.Out.PASS>(),
	Test.It<Divide<189, 6>, number, typeof Test.Out.PASS>(),
);

declare type DividePositive<
	TNumber1 extends number,
	TNumber2 extends number,
	TResult extends number = 1,
	Tail extends number = Subtract<TNumber1, TNumber2>,
> =
	And<IsValidNumberInput<TNumber1>, IsValidNumberInput<TResult>> extends true
		? IsZero<Tail> extends true
			? TResult
			: Lower<Tail, TNumber2> extends true
				? number // Float result
				: DividePositive<Tail, TNumber2, Increment<TResult>>
		: number;

declare type DivideNegative<
	TNumber1 extends number,
	TNumber2 extends number,
	TResult extends number = -1,
	Tail extends number = Add<TNumber1, TNumber2>,
> =
	And<IsValidNumberInput<TNumber1>, IsValidNumberInput<TResult>> extends true
		? IsZero<Tail> extends true
			? TResult
			: Lower<Tail, TNumber2> extends true
				? number // Float result
				: DivideNegative<Tail, TNumber2, Decrement<TResult>>
		: number;

declare type _Divide<TNumber1 extends number, TNumber2 extends number> = {
	true: {
		true: DividePositive<TNumber1, TNumber2>;
		false: DivideNegative<TNumber1, TNumber2>;
	};
	false: {
		true: DivideNegative<Opposite<TNumber1>, Opposite<TNumber2>>;
		false: DividePositive<Opposite<TNumber1>, Opposite<TNumber2>>;
	};
}[`${IsPositive<TNumber1>}`][`${IsPositive<TNumber2>}`];

/**
 * - Divide `TNumber1` by `TNumber2`
 * - ⚠️ Returns an absolute result with a precision of two decimals for numbers that don't reach compiler limits, otherwise it returns an `explicit result`. ⚠️
 *
 * @template TNumber1 - The first number to divide.
 * @template TNumber2 - The second number to divide.
 * @example
 * ```tsx
 * import type { Num } from "@dulysse1/ts-helper";
 *
 * type A = Num.Divide<7, 7>; // 1
 * type B = Num.Divide<-14, 7>; // -2
 * type C = Num.Divide<6, 0>; // number infinite
 * ```
 * ---------------------------
 * Do you have any questions about `Divide` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Divide<TNumber1 extends number, TNumber2 extends number> =
	And<IsValidNumberInput<TNumber1>, IsValidNumberInput<TNumber2>> extends true
		? IsZero<TNumber1> extends true
			? 0
			: IsZero<TNumber2> extends true
				? typeof Infinity
				: {
						true: {
							true: number;
							false: number;
						};
						false: {
							true: number;
							false: _Divide<TNumber1, TNumber2>;
						};
					}[`${IsFloat<TNumber1>}`][`${IsFloat<TNumber2>}`]
		: number;
