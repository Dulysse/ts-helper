import type { And, Equal, Satisfy } from "@/operator";
import type { IsValidNumberInput, Numbers } from "../utils";

export declare type _Lower<
	TNumber1 extends number,
	TNumber2 extends number,
	L extends readonly number[] = Numbers,
> = And<IsValidNumberInput<TNumber1>, IsValidNumberInput<TNumber2>> extends true
	? L extends readonly [infer First, ...infer Next]
		? Equal<First, TNumber1> extends true
			? Equal<TNumber1, TNumber2> extends true
				? false
				: true
			: Equal<First, TNumber2> extends true
			  ? false
			  : _Lower<TNumber1, TNumber2, Satisfy<Next, readonly number[]>>
		: never
	: boolean;

/**
 * #### Check if number `TNumber1` is lower than `TNumber2`
 * ### ⚠️ Returns an absolute result for numbers in the interval `[-250; 250]`, otherwise it returns an `explicit result`. ⚠️
 * ---------------------------
 * @example
 * ```tsx
 * import type { Num } from "@dulysse1/ts-helper";
 *
 * type No = Num.Lower<10, 10>; // false
 * type Yes = Num.Lower<7, 10>; // true
 * ```
 * ---------------------------
 * Do you have any questions about {@link Lower} usage ?
 * ### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Lower<
	TNumber1 extends number,
	TNumber2 extends number,
> = _Lower<TNumber1, TNumber2>;
