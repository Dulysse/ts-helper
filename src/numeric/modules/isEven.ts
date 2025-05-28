import type { Last } from "@/array";
import type { ParseInt } from "@/numeric";
import type { EvenNumber, IsValidNumberInput } from "@/numeric/utils";
import type { Split } from "@/string";

/**
 * - Check if a number `TNumber` is an `even` number
 *
 * @template TNumber - The number to check.
 * @example
 * ```tsx
 * import type { Num } from "@dulysse1/ts-helper";
 *
 * type A = Num.IsEven<-23>; // false
 * type B = Num.IsEven<10.29>; // true
 * ```
 * ---------------------------
 * Do you have any questions about `IsEven` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type IsEven<TNumber extends number> =
	IsValidNumberInput<TNumber> extends true
		? Last<Split<`${ParseInt<`${TNumber}`>}`>> extends `${EvenNumber}`
			? true
			: false
		: boolean;
