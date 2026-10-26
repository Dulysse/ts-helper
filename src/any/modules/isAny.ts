type ArrayElement<T> = T extends (infer I)[] ? I : never;

/**
 * - Check if `T` is equal to `any` or `any[]`
 *
 * @template T - The type to check
 * @example
 * ```tsx
 * import type { Any } from "@dulysse1/ts-helper";
 *
 * type A = Any.Is<"hello">; // false
 * type B = Any.Is<any>; // true
 * ```
 * ---------------------------
 * Do you have any questions about `IsEqual` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type IsAny<T> = 0 extends 1 & T
	? true
	: 0 extends 1 & ArrayElement<T>
		? true
		: false;
