/**
 * #### Check if a number `N` is positive or equal to zero
 * ---------------------------
 * @example
 * ```tsx
 * import type { Numeric } from "@dulysse1/ts-helper";
 *
 * type No = Numeric.IsPositive<-23>; // false
 * type Yes = Numeric.IsPositive<10>; // true
 * ```
 * ---------------------------
 * Do you have any questions about {@link IsPositive} usage ?
 * ### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type IsPositive<N extends number> = `${N}` extends `-${number}`
	? false
	: true;
