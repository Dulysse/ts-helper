import type { And } from "@/operator";
import type { IsValidNumberInput } from "../utils";
import type { Comparators, Compare } from "@/numeric";

declare type _Greater<TNumber1 extends number, TNumber2 extends number> =
	And<IsValidNumberInput<TNumber1>, IsValidNumberInput<TNumber2>> extends true
		? Compare<TNumber1, TNumber2> extends Comparators.GREATER
			? true
			: false
		: boolean;

/**
 * - Check if number `TNumber1` is greater than `TNumber2`
 * - ⚠️ Returns an absolute result for numbers that don't reach compiler limits, otherwise it returns an `explicit result`. ⚠️
 *
 * @template TNumber1 - The first number to compare.
 * @template TNumber2 - The second number to compare.
 * @example
 * ```tsx
 * import type { Num } from "@dulysse1/ts-helper";
 *
 * type A = Num.Greater<10, 10>; // false
 * type B = Num.Greater<30, 10>; // true
 * ```
 * ---------------------------
 * Do you have any questions about `Greater` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Greater<
	TNumber1 extends number,
	TNumber2 extends number,
> = _Greater<TNumber1, TNumber2>;
