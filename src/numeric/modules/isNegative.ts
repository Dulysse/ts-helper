/**
 * #### Check if a number `N` is a negative number
 * ---------------------------
 * @example
 * ```tsx
 * import type { Numeric } from "@dulysse1/ts-helper";
 *
 * type Yes = Numeric.IsNegative<-23>; // true
 * type No = Numeric.IsNegative<10>; // false
 * ```
 * ---------------------------
 * Do you have any questions about {@link IsNegative} usage ?
 * ### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type IsNegative<N extends number> = `${N}` extends `-${number}`
	? true
	: false;
