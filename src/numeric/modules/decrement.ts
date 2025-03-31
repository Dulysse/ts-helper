import type { BuildTuple, IsValidNumberInput } from "../utils";
import { IsZero } from "@/numeric/modules/isZero";
import { IsPositive, Opposite } from "@/numeric";
import { NextPositive } from "@/numeric/modules/increment";

export declare type PreviousPositive<TNumber extends number> =
	IsZero<TNumber> extends true
		? -1
		: BuildTuple<TNumber> extends [...infer U, infer _]
			? U["length"]
			: never;

declare type Previous<TNumber extends number> = {
	true: PreviousPositive<TNumber>;
	false: Opposite<NextPositive<Opposite<TNumber>>>;
}[`${IsPositive<TNumber>}`];

/**
 * - Decrement a number `TNumber` of one
 * - ⚠️ Returns an absolute result for numbers that don't reach compiler limits, otherwise it returns an `explicit result`. ⚠️
 * ---------------------------
 * @example
 * ```tsx
 * import type { Num } from "@dulysse1/ts-helper";
 *
 * type A = Num.Decrement<10>; // 9
 * ```
 * ---------------------------
 * Do you have any questions about {@link Decrement} usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Decrement<TNumber extends number> =
	IsValidNumberInput<TNumber> extends true ? Previous<TNumber> : number;
