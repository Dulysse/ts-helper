import type { Equal, And, Satisfy } from "@/operator";
import type { Increment, Decrement, IsPositive } from "@/numeric";
import type { IsValidNumberInput } from "../utils";

declare type AddPositive<
	TNumber1 extends number,
	TNumber2 extends number,
> = IsValidNumberInput<TNumber1> extends true
	? Equal<TNumber2, 0> extends true
		? TNumber1
		: AddPositive<Increment<TNumber1>, Decrement<TNumber2>>
	: number;

declare type AddNegative<
	TNumber1 extends number,
	TNumber2 extends number,
> = IsValidNumberInput<TNumber1> extends true
	? Equal<TNumber2, 0> extends true
		? TNumber1
		: AddNegative<Decrement<TNumber1>, Increment<TNumber2>>
	: number;

/**
 * #### Add `TNumber2` to `TNumber1`
 * ### ⚠️ Returns an absolute result for numbers in the interval `[-200; 200]`, otherwise it returns an `explicit result`. ⚠️
 * ---------------------------
 * @example
 * ```tsx
 * import type { Num } from "@dulysse1/ts-helper";
 *
 * type AddPositive = Num.Add<10, 10>; // 20
 * type AddNegative = Num.Add<10, -40>; // -30
 * ```
 * ---------------------------
 * Do you have any questions about {@link Add} usage ?
 * ### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Add<TNumber1 extends number, TNumber2 extends number> = And<
	IsValidNumberInput<TNumber1>,
	IsValidNumberInput<TNumber2>
> extends true
	? {
			true: AddPositive<TNumber1, TNumber2>;
			false: AddNegative<TNumber1, TNumber2>;
	  }[`${Satisfy<IsPositive<TNumber2>, boolean>}`]
	: number;
