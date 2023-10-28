import type { And, Equal, Satisfy } from "@/operator";
import type { IsValidInput, Numbers } from "../utils";

export declare type _Lower<
	N1 extends number,
	N2 extends number,
	L extends readonly number[] = Numbers,
> = And<IsValidInput<N1>, IsValidInput<N2>> extends true
	? L extends readonly [infer First, ...infer Next]
		? Equal<First, N1> extends true
			? Equal<N1, N2> extends true
				? false
				: true
			: Equal<First, N2> extends true
			? false
			: _Lower<N1, N2, Satisfy<Next, readonly number[]>>
		: never
	: never;

/**
 * #### Check if number `N1` is lower than `N2`
 * ### ⚠️ Only works for Numbers in range `[-250; 250]` ⚠️
 * ---------------------------
 * @example
 * ```tsx
 * import type { Numeric } from "@dulysse1/ts-helper";
 *
 * type No = Numeric.Lower<10, 10>; // false
 * type Yes = Numeric.Lower<7, 10>; // true
 * ```
 * ---------------------------
 * Do you have any questions about {@link Lower} usage ?
 * ### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Lower<N1 extends number, N2 extends number> = _Lower<
	N1,
	N2
>;
