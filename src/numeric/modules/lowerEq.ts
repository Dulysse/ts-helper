import type { And, Equal, Satisfy } from "@/operator";
import type { IsValidInput, Numbers } from "../utils";

export declare type _LowerEq<
	N1 extends number,
	N2 extends number,
	L extends readonly number[] = Numbers,
> = And<IsValidInput<N1>, IsValidInput<N2>> extends true
	? L extends readonly [infer First, ...infer Next]
		? Equal<First, N1> extends true
			? true
			: Equal<First, N2> extends true
			? Equal<N1, N2>
			: _LowerEq<N1, N2, Satisfy<Next, readonly number[]>>
		: never
	: never;

/**
 * #### Check if number `N1` is lower than `N2` or equal to `N2`
 * ### ⚠️ Only works for Numbers in range `[-250; 250]` ⚠️
 * ---------------------------
 * @example
 * ```tsx
 * import type { Num } from "@dulysse1/ts-helper";
 *
 * type No = Num.LowerEq<12, 10>; // false
 * type Yes = Num.LowerEq<10, 10>; // true
 * ```
 * ---------------------------
 * Do you have any questions about {@link LowerEq} usage ?
 * ### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type LowerEq<N1 extends number, N2 extends number> = _LowerEq<
	N1,
	N2
>;
