import type { IsAny } from "@/any";
import type { Not } from "@/operator";

/**
 * - Check if `A` is strictly equal to `B`
 *
 * @template A The first type to compare
 * @template B The second type to compare
 *
 * @example
 * ```tsx
 * import type { Op } from "@dulysse1/ts-helper";
 *
 * type A = Op.IsEqual<"hello", "hello">; // true
 * type B = Op.IsEqual<1 | 2, number>; // false
 * type C = Op.IsEqual<any, any>; // false
 * ```
 * ---------------------------
 * Do you have any questions about `IsEqual` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type IsEqual<A, B> =
	Not<IsAny<A>> extends false
		? false
		: Not<IsAny<B>> extends false
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
