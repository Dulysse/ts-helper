import type { Equal, Satisfy } from "@/operator";
import type { IsValidNumberInput, Numbers, InvalidNumberInput } from "../utils";

declare type _Decrement<
	TNumber extends number,
	L extends readonly number[] = Numbers,
> = IsValidNumberInput<TNumber> extends true
	? L extends readonly [infer First, infer Next, ...infer Rest]
		? Equal<Next, TNumber> extends true
			? First
			: _Decrement<TNumber, Satisfy<[Next, ...Rest], readonly number[]>>
		: never
	: InvalidNumberInput<number>;

/**
 * #### Decrement a number `TNumber` of one
 * ### ⚠️ Returns an absolute result for numbers in the interval `[-250; 250]`, otherwise it returns an explicit result. ⚠️
 * ---------------------------
 * @example
 * ```tsx
 * import type { Num } from "@dulysse1/ts-helper";
 *
 * type Num = Num.Decrement<10>; // 9
 * ```
 * ---------------------------
 * Do you have any questions about {@link Decrement} usage ?
 * ### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Decrement<TNumber extends number> = _Decrement<TNumber>;
