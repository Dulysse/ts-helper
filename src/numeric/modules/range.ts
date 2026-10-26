import type { And, IsEqual, Or } from "@/operator";

import type { IsValidNumberInput } from "../utils";
import type { LowerEq, Increment, Decrement, IsFloat } from "@/numeric";

export declare type AscRange<
	From extends number,
	To extends number,
	TResult extends number[] = [],
> =
	IsEqual<From, To> extends true
		? [...TResult, From]
		: AscRange<Increment<From>, To, [...TResult, From]>;

export declare type DescRange<
	From extends number,
	To extends number,
	TResult extends number[] = [],
> =
	IsEqual<From, To> extends true
		? [...TResult, From]
		: DescRange<Decrement<From>, To, [...TResult, From]>;

/**
 * - Create an array of a range between two numbers `TNumber1` and `TNumber2`
 * - ⚠️ Returns an absolute result with a precision of two decimals for numbers that don't reach compiler limits, otherwise it returns an `explicit result`. ⚠️
 *
 * @template From - The first number of the range (inclusive).
 * @template To - The last number of the range (inclusive).
 * @example
 * ```tsx
 * import type { Num } from "@dulysse1/ts-helper";
 *
 * type A = Num.Range<1, 5>; // [1, 2, 3, 4, 5]
 * ```
 * ---------------------------
 * Do you have any questions about `Range` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Range<From extends number, To extends number> =
	Or<IsFloat<From>, IsFloat<To>> extends false
		? And<IsValidNumberInput<From>, IsValidNumberInput<To>> extends true
			? {
					true: AscRange<From, To>;
					false: DescRange<From, To>;
				}[`${LowerEq<From, To> extends boolean ? LowerEq<From, To> : boolean}`]
			: number[]
		: never;
