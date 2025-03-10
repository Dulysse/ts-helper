import type { And, Equal, Satisfy } from "@/operator";
import type { IsValidNumberInput, Numbers } from "../utils";

export declare type _LowerEq<
	TNumber1 extends number,
	TNumber2 extends number,
	L extends readonly number[] = Numbers,
> =
	And<IsValidNumberInput<TNumber1>, IsValidNumberInput<TNumber2>> extends true
		? L extends readonly [infer First, ...infer Next]
			? Equal<First, TNumber1> extends true
				? true
				: Equal<First, TNumber2> extends true
					? Equal<TNumber1, TNumber2>
					: _LowerEq<TNumber1, TNumber2, Satisfy<Next, readonly number[]>>
			: never
		: boolean;

/**
 * - Check if number `TNumber1` is lower than `TNumber2` or equal to `TNumber2`
 * - ⚠️ Returns an absolute result for numbers in the interval `[-300; 300]`, otherwise it returns an `explicit result`. ⚠️
 * ---------------------------
 * @example
 * ```tsx
 * import type { Num } from "@dulysse1/ts-helper";
 *
 * type A = Num.LowerEq<12, 10>; // false
 * type B = Num.LowerEq<10, 10>; // true
 * ```
 * ---------------------------
 * Do you have any questions about {@link LowerEq} usage ?
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
