import type { Implicit, IsAny } from "@/any";
import type { Not } from "@/operator";
import { Test } from "@/test";

Test.Describe(
	"Check if first type is strictly equal to second type",
	Test.It<IsEqual<1, 1>, true, typeof Test.Out.PASS>(),
	Test.It<IsEqual<true, boolean>, false, typeof Test.Out.PASS>(),
	Test.It<IsEqual<true, true>, true, typeof Test.Out.PASS>(),
	Test.It<IsEqual<false, false | 0>, false, typeof Test.Out.PASS>(),
	Test.It<IsEqual<"hello", Implicit>, false, typeof Test.Out.PASS>(),
	Test.It<IsEqual<Implicit, Implicit>, false, typeof Test.Out.PASS>(),
	Test.It<IsEqual<object, {}>, false, typeof Test.Out.PASS>(),
	Test.It<IsEqual<{}, object>, false, typeof Test.Out.PASS>(),
	Test.It<IsEqual<object, object>, true, typeof Test.Out.PASS>(),
	Test.It<IsEqual<{}, {}>, true, typeof Test.Out.PASS>(),
	Test.It<IsEqual<{ value: 1 }, object>, false, typeof Test.Out.PASS>(),
);

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
