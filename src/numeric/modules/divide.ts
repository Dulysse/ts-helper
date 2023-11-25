import type { And, Satisfy } from "@/operator";
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

declare type DividePositive<
	TNumber1 extends number,
	TNumber2 extends number,
	Result extends number = 1,
	Rest extends number = Subtract<TNumber1, TNumber2>,
> = And<IsValidNumberInput<TNumber1>, IsValidNumberInput<Result>> extends true
	? IsZero<Rest> extends true
		? Result
		: DividePositive<Rest, TNumber2, Increment<Result>>
	: number;

declare type DivideNegative<
	TNumber1 extends number,
	TNumber2 extends number,
	Result extends number = -1,
	Rest extends number = Add<TNumber1, TNumber2>,
> = And<IsValidNumberInput<TNumber1>, IsValidNumberInput<Result>> extends true
	? IsZero<Rest> extends true
		? Result
		: DivideNegative<Rest, TNumber2, Decrement<Result>>
	: number;

/**
 * #### Divide `TNumber1` by `TNumber2`
 * ### ⚠️ Returns an absolute result for numbers in the interval `[-250; 250]`, otherwise it returns an `explicit result`. ⚠️
 * ---------------------------
 * @example
 * ```tsx
 * import type { Num } from "@dulysse1/ts-helper";
 *
 * type DividePositive = Num.Divide<7, 7>; // 1
 * type DivideNegative = Num.Divide<-14, 7>; // -2
 * type DivideZero = Num.Divide<6, 0>; // number infinite
 * ```
 * ---------------------------
 * Do you have any questions about {@link Divide} usage ?
 * ### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Divide<
	TNumber1 extends number,
	TNumber2 extends number,
> = And<IsValidNumberInput<TNumber1>, IsValidNumberInput<TNumber2>> extends true
	? IsZero<TNumber1> extends true
		? 0
		: IsZero<TNumber2> extends true
		  ? number // Infinity
		  : {
					true: {
						true: DividePositive<TNumber1, TNumber2>;
						false: DivideNegative<TNumber1, TNumber2>;
					};
					false: {
						true: DivideNegative<
							Satisfy<Opposite<TNumber1>, number>,
							Satisfy<Opposite<TNumber2>, number>
						>;
						false: DividePositive<
							Satisfy<Opposite<TNumber1>, number>,
							Satisfy<Opposite<TNumber2>, number>
						>;
					};
		    }[`${Satisfy<IsPositive<TNumber1>, boolean>}`][`${Satisfy<
					IsPositive<TNumber2>,
					boolean
		    >}`]
	: number;
