import type { IsAny } from "@/any";

/**
 * @warning you can use {@link IsEqual} since `v1.4.5` (Equal<any, any> = true // IsEqual<any, any> = false)
 * - Check if `A` is strictly equal to `B` (deep equal)
 *
 * @template A The first type to compare
 * @template B The second type to compare
 *
 * @example
 * ```tsx
 * import type { Op } from "@dulysse1/ts-helper";
 *
 * type A = Op.Equal<"hello", "hello">; // true
 * type B = Op.Equal<1 | 2, number>; // false
 * ```
 * ---------------------------
 * Do you have any questions about `Equal` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Equal<A, B> =
	IsAny<A> extends true
		? IsAny<B> extends true
			? true
			: false
		: IsAny<B> extends true
			? false
			: [A] extends [B]
				? [B] extends [A]
					? (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2
						? (<T>() => T extends B ? 1 : 2) extends <T>() => T extends A
								? 1
								: 2
							? true
							: false
						: false
					: false
				: false;
