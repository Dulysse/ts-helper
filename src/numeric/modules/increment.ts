import type { Equal, Satisfy } from "@/operator";
import type { IsValidNumberInput, Numbers } from "../utils";

declare type _Increment<
	TNumber extends number,
	L extends readonly number[] = Numbers,
> = IsValidNumberInput<TNumber> extends true
	? L extends readonly [infer First, infer Next, ...infer Rest]
		? Equal<First, TNumber> extends true
			? Next
			: _Increment<TNumber, Satisfy<[Next, ...Rest], readonly number[]>>
		: never
	: number;

/**
 * #### Increment a number `TNumber` of one
 * ### ⚠️ Returns an absolute result for numbers in the interval `[-250; 250]`, otherwise it returns an `explicit result`. ⚠️
 * ---------------------------
 * @example
 * ```tsx
 * import type { Num } from "@dulysse1/ts-helper";
 *
 * type Num = Num.Increment<10>; // 11
 * ```
 * ---------------------------
 * Do you have any questions about {@link Increment} usage ?
 * ### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Increment<TNumber extends number> = _Increment<TNumber>;
