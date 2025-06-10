import type { IsPositive, IsZero } from "@/numeric";
import type { IsValidNumberInput } from "../utils";
import type { Satisfy } from "@/operator";

declare type OppositePositive<TNumber extends number> =
	`-${TNumber}` extends `${infer N extends number}` ? N : never;

declare type OppositeNegative<TNumber extends number> =
	`${TNumber}` extends `-${infer N extends number}` ? N : never;

/**
 * - Check if a number `TNumber` is a negative number
 * - ⚠️ Returns an absolute result with a precision of two decimals for numbers that don't reach compiler limits, otherwise it returns an `explicit result`. ⚠️
 *
 * @template TNumber - The number to check.
 * @example
 * ```tsx
 * import type { Num } from "@dulysse1/ts-helper";
 *
 * type A = Num.Opposite<23>; // -23
 * type B = Num.Opposite<-34>; // 34
 * ```
 * ---------------------------
 * Do you have any questions about `Opposite` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Opposite<TNumber extends number> = Satisfy<
	IsValidNumberInput<TNumber> extends true
		? IsZero<TNumber> extends true
			? 0
			: {
					true: OppositePositive<TNumber>;
					false: OppositeNegative<TNumber>;
				}[`${IsPositive<TNumber>}`]
		: number,
	number
>;
