/**
 * #### Check if a number `TNumber` is a negative number
 * ---------------------------
 * @example
 * ```tsx
 * import type { Num } from "@dulysse1/ts-helper";
 *
 * type Yes = Num.IsNegative<-23>; // true
 * type No = Num.IsNegative<10>; // false
 * ```
 * ---------------------------
 * Do you have any questions about {@link IsNegative} usage ?
 * ### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type IsNegative<TNumber extends number> =
	`${TNumber}` extends `-${number}` ? true : false;
