import type { ParseInt } from "@/numeric";
import type { IsEqual } from "@/operator";

/**
 * - Returns the absolute value of a number.
 * - If the number is a float, it returns the integer part.
 * - If the number is not a valid number, it returns `never`.
 *
 * @template TNumber - The number to get the absolute value of.
 * @example
 * ```tsx
 * import type { Num } from "@dulysse1/ts-helper";
 *
 * type A = Num.Abs<-23>; // -23
 * type B = Num.Abs<10.29>; // 10
 * ```
 * ---------------------------
 * Do you have any questions about `Abs` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Abs<TNumber extends number> = TNumber extends number
	? IsEqual<TNumber, number> extends true
		? number
		: ParseInt<`${TNumber}`>
	: never;
