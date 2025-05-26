/**
 * - Check if `A` is strictly equal to `B`
 *
 * @template A The first type to compare
 * @template B The second type to compare
 *
 * ---------------------------
 * @example
 * ```tsx
 * import type { Op } from "@dulysse1/ts-helper";
 *
 * type A = Op.Equal<"hello", "hello">; // true
 * type B = Op.Equal<1 | 2, number>; // false
 * ```
 * ---------------------------
 * Do you have any questions about {@link Equal} usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Equal<A, B> = A extends B
	? B extends A
		? true
		: false
	: false;
