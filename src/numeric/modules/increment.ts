import type { BuildTuple, IsValidNumberInput } from "../utils";
import { IsPositive, Opposite } from "@/numeric";
import { PreviousPositive } from "@/numeric/modules/decrement";

export declare type NextPositive<TNumber extends number> =
	BuildTuple<TNumber> extends [...infer U] ? [...U, 0]["length"] : never;

declare type Next<TNumber extends number> = {
	true: NextPositive<TNumber>;
	false: Opposite<PreviousPositive<Opposite<TNumber>>>;
}[`${IsPositive<TNumber>}`];

/**
 * - Increment a number `TNumber` of one
 * - ⚠️ Returns an absolute result for numbers that don't reach compiler limits, otherwise it returns an `explicit result`. ⚠️
 * ---------------------------
 * @example
 * ```tsx
 * import type { Num } from "@dulysse1/ts-helper";
 *
 * type A = Num.Increment<10>; // 11
 * ```
 * ---------------------------
 * Do you have any questions about {@link Increment} usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Increment<TNumber extends number> =
	IsValidNumberInput<TNumber> extends true ? Next<TNumber> : number;
