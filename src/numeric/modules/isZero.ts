import type { Equal } from "@/operator";

/**
 * - Check if a number `TNumber` is equal to zero
 * ---------------------------
 * @example
 * ```tsx
 * import type { Num } from "@dulysse1/ts-helper";
 *
 * type A = Num.IsZero<-23>; // false
 * type B = Num.IsZero<0>; // true
 * ```
 * ---------------------------
 * Do you have any questions about {@link IsZero} usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type IsZero<TNumber extends number> =
	Equal<TNumber, 0> extends true ? true : false;
