import type { And, Equal, Satisfy } from "@/operator";
import type { IsValidInput, Numbers } from "../utils";

declare type _GreaterEq<
	N1 extends number,
	N2 extends number,
	L extends readonly number[] = Numbers,
> = And<IsValidInput<N1>, IsValidInput<N2>> extends true
	? L extends readonly [infer First, ...infer Next]
		? Equal<First, N1> extends true
			? Equal<N1, N2>
			: Equal<First, N2> extends true
			? true
			: _GreaterEq<N1, N2, Satisfy<Next, readonly number[]>>
		: never
	: never;

/**
 * #### Check if number `N1` is greater than `N2` or equal to `N2`
 * ### ⚠️ Only works for Numbers in range `[-250; 250]` ⚠️
 * ---------------------------
 * @example
 * ```tsx
 * import type { Num } from "@dulysse1/ts-helper";
 *
 * type No = Num.GreaterEq<6, 10>; // false
 * type Yes = Num.GreaterEq<10, 10>; // true
 * ```
 * ---------------------------
 * Do you have any questions about {@link GreaterEq} usage ?
 * ### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type GreaterEq<
	N1 extends number,
	N2 extends number,
> = _GreaterEq<N1, N2>;
