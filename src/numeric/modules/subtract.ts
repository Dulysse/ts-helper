import type { Equal, And } from "@/operator";
import type { Increment, Decrement, IsPositive } from "@/numeric";
import type { IsValidNumberInput } from "../utils";

declare type SubtractPositive<
	TNumber1 extends number,
	TNumber2 extends number,
> = IsValidNumberInput<TNumber1> extends true
	? Equal<TNumber2, 0> extends true
		? TNumber1
		: SubtractPositive<Decrement<TNumber1>, Decrement<TNumber2>>
	: number;

declare type SubtractNegative<
	TNumber1 extends number,
	TNumber2 extends number,
> = IsValidNumberInput<TNumber1> extends true
	? Equal<TNumber2, 0> extends true
		? TNumber1
		: SubtractNegative<Increment<TNumber1>, Increment<TNumber2>>
	: number;

/**
 * #### Subtract `TNumber2` from `TNumber1`
 * ### ⚠️ Returns an absolute result for numbers in the interval `[-200; 200]`, otherwise it returns an `explicit result`. ⚠️
 * ---------------------------
 * @example
 * ```tsx
 * import type { Num } from "@dulysse1/ts-helper";
 *
 * type A = Num.Subtract<10, 10>; // 0
 * type B = Num.Subtract<10, -40>; // 40
 * ```
 * ---------------------------
 * Do you have any questions about {@link Subtract} usage ?
 * ### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Subtract<
	TNumber1 extends number,
	TNumber2 extends number,
> = And<IsValidNumberInput<TNumber1>, IsValidNumberInput<TNumber2>> extends true
	? {
			true: SubtractPositive<TNumber1, TNumber2>;
			false: SubtractNegative<TNumber1, TNumber2>;
	  }[`${IsPositive<TNumber2>}`]
	: number;
