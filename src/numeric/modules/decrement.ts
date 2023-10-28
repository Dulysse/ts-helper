import type { Equal, Satisfy } from "@/operator";
import type { IsValidInput, Numbers } from "../utils";

declare type _Decrement<
	N extends number,
	L extends readonly number[] = Numbers,
> = IsValidInput<N> extends true
	? L extends readonly [infer First, infer Next, ...infer Rest]
		? Equal<Next, N> extends true
			? First
			: _Decrement<N, Satisfy<[Next, ...Rest], readonly number[]>>
		: never
	: never;

/**
 * #### Decrement a number `N` of one
 * ### ⚠️ Only works for Numbers in range `[-250; 250]` ⚠️
 * ---------------------------
 * @example
 * ```tsx
 * import type { Numeric } from "@dulysse1/ts-helper";
 *
 * type Num = Numeric.Decrement<10>; // 9
 * ```
 * ---------------------------
 * Do you have any questions about {@link Decrement} usage ?
 * ### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Decrement<N extends number> = _Decrement<N>;
