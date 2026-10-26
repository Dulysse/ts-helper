import type { IsEqual, If } from "@/operator";

/**
 * - Returns type A if A is not unknown, otherwise returns type B
 *
 * @template A The first type to check
 * @template B The type to return if A is unknown
 *
 * @example
 * ```tsx
 * import type { Op } from "@dulysse1/ts-helper";
 *
 * type A = Op.Fallback<unknown, string>; // string
 * type B = Op.Fallback<number, string>; // number
 * ```
 * ---------------------------
 * Do you have any questions about `Fallback` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Fallback<A, B> = If<IsEqual<A, unknown>, B, A>;
