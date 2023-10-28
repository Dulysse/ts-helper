import type { Lower } from "@/numeric";

/**
 * #### Check if a number `N` is a negate number
 * ### ⚠️ Only works for Numbers in range `[-250; 250]` ⚠️
 * ---------------------------
 * @example
 * ```tsx
 * import type { Numeric } from "@dulysse1/ts-helper";
 *
 * type Yes = Numeric.IsNegate<-23>; // true
 * type No = Numeric.IsNegate<10>; // false
 * ```
 * ---------------------------
 * Do you have any questions about {@link IsNegate} usage ?
 * ### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type IsNegate<N extends number> = Lower<N, 0>;
