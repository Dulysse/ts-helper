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
} from "@/numeric";
import type { IsValidNumberInput } from "../utils";

declare type DividePositive<
	TNumber1 extends number,
	TNumber2 extends number,
	Result extends number = 1,
	Rest extends number = Subtract<TNumber1, TNumber2>,
> =
	And<IsValidNumberInput<TNumber1>, IsValidNumberInput<Result>> extends true
		? IsZero<Rest> extends true
			? Result
			: DividePositive<Rest, TNumber2, Increment<Result>>
		: number;

declare type DivideNegative<
	TNumber1 extends number,
	TNumber2 extends number,
	Result extends number = -1,
	Rest extends number = Add<TNumber1, TNumber2>,
> =
	And<IsValidNumberInput<TNumber1>, IsValidNumberInput<Result>> extends true
		? IsZero<Rest> extends true
			? Result
			: DivideNegative<Rest, TNumber2, Decrement<Result>>
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
 * - ⚠️ Returns an absolute result for numbers that don't reach compiler limits, otherwise it returns an `explicit result`. ⚠️
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
				? number // Infinity
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
