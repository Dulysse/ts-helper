import type { IsEven } from "@/numeric";
import type { Not } from "@/operator";

/**
 * - Check if a number `TNumber` is an `odd` number
 * ---------------------------
 * @example
 * ```tsx
 * import type { Num } from "@dulysse1/ts-helper";
 *
 * type A = Num.IsOdd<-23>; // true
 * type B = Num.IsOdd<10.29>; // false
 * ```
 * ---------------------------
 * Do you have any questions about {@link IsOdd} usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type IsOdd<TNumber extends number> = Not<IsEven<TNumber>>;
