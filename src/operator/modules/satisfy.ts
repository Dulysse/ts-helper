/**
 * - Check if `A` is satisfying `B`, if it's the case, return `A` else `B`
 * ---------------------------
 * @example
 * ```tsx
 * import type { Op } from "@dulysse1/ts-helper";
 *
 * type A = Op.Satisfy<1 | 2, number>; // 1 | 2
 * type B = Op.Satisfy<"hello", number>; // number
 * ```
 * ---------------------------
 * Do you have any questions about {@link Satisfy} usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Satisfy<A, B> = A extends B ? A : B;
