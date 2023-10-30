import type { Equal, Satisfy } from "@/operator";
import type { IsValidInput, Numbers } from "../utils";

declare type _Increment<
	N extends number,
	L extends readonly number[] = Numbers,
> = IsValidInput<N> extends true
	? L extends readonly [infer First, infer Next, ...infer Rest]
		? Equal<First, N> extends true
			? Next
			: _Increment<N, Satisfy<[Next, ...Rest], readonly number[]>>
		: never
	: never;

/**
 * #### Increment a number `N` of one
 * ### ⚠️ Only works for Numbers in range `[-250; 250]` ⚠️
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
export declare type Increment<N extends number> = _Increment<N>;
