import type { And } from "@/operator";
import type { IsValidNumberInput } from "../utils";
import type { Compare } from "@/numeric";

export declare type _Lower<TNumber1 extends number, TNumber2 extends number> =
	And<IsValidNumberInput<TNumber1>, IsValidNumberInput<TNumber2>> extends true
		? Compare<TNumber1, TNumber2> extends "lower"
			? true
			: false
		: boolean;

/**
 * - Check if number `TNumber1` is lower than `TNumber2`
 * - ⚠️ Returns an absolute result for numbers that don't reach compiler limits, otherwise it returns an `explicit result`. ⚠️
 * ---------------------------
 * @example
 * ```tsx
 * import type { Num } from "@dulysse1/ts-helper";
 *
 * type A = Num.Lower<10, 10>; // false
 * type B = Num.Lower<7, 10>; // true
 * ```
 * ---------------------------
 * Do you have any questions about {@link Lower} usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Lower<
	TNumber1 extends number,
	TNumber2 extends number,
> = _Lower<TNumber1, TNumber2>;
