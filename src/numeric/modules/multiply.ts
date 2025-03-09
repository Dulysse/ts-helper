import type { And, Or } from "@/operator";
import type {
	Opposite,
	IsPositive,
	IsZero,
	Add,
	Subtract,
	Increment,
	Decrement,
} from "@/numeric";
import type { IsValidNumberInput } from "../utils";

declare type MultiplyPositive<
	TNumber1 extends number,
	TNumber2 extends number,
	Result extends number = 0,
> =
	IsValidNumberInput<Result> extends true
		? IsZero<TNumber2> extends true
			? Result
			: MultiplyPositive<TNumber1, Decrement<TNumber2>, Add<Result, TNumber1>>
		: number;

declare type MultiplyNegative<
	TNumber1 extends number,
	TNumber2 extends number,
	Result extends number = 0,
> =
	IsValidNumberInput<Result> extends true
		? IsZero<TNumber2> extends true
			? Result
			: MultiplyNegative<
					TNumber1,
					Increment<TNumber2>,
					Subtract<Result, TNumber1>
				>
		: number;

/**
 * - Multiply `TNumber1` and `TNumber2`
 * - ⚠️ Returns an absolute result for numbers in the interval `[-400; 400]`, otherwise it returns an `explicit result`. ⚠️
 * ---------------------------
 * @example
 * ```tsx
 * import type { Num } from "@dulysse1/ts-helper";
 *
 * type A = Num.Multiply<6, 7>; // 42
 * type B = Num.Multiply<6, -7>; // -42
 * type C = Num.Multiply<6, 0>; // 0
 * ```
 * ---------------------------
 * Do you have any questions about {@link Multiply} usage ?
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
						true: MultiplyPositive<TNumber1, TNumber2>;
						false: MultiplyNegative<TNumber1, TNumber2>;
					};
					false: {
						true: MultiplyNegative<Opposite<TNumber1>, Opposite<TNumber2>>;
						false: MultiplyPositive<Opposite<TNumber1>, Opposite<TNumber2>>;
					};
				}[`${IsPositive<TNumber1>}`][`${IsPositive<TNumber2>}`]
		: number;
