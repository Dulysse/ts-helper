import type { Implicit, IsAny } from "@/any";
import type { Not } from "@/operator";
import { Test } from "@/test";

Test.Describe(
	"Check if first type is strictly equal to second type",
	Test.It<IsAssignable<1, 1 | 2>, true, typeof Test.Out.PASS>(),
	Test.It<IsAssignable<"hello", Implicit>, false, typeof Test.Out.PASS>(),
	Test.It<IsAssignable<Implicit, Implicit>, false, typeof Test.Out.PASS>(),
	Test.It<IsAssignable<1 | 2, 1>, false, typeof Test.Out.PASS>(),
	Test.It<IsAssignable<1 | 2, 1 | 2>, true, typeof Test.Out.PASS>(),
	Test.It<IsAssignable<1 | 2, number>, true, typeof Test.Out.PASS>(),
);

/**
 * - Check if `A` is assignable to `B`
 *
 * @template A The first type to compare
 * @template B The second type to compare
 *
 * @example
 * ```tsx
 * import type { Op } from "@dulysse1/ts-helper";
 *
 * type A = Op.IsAssignable<"hello", "hello">; // true
 * type B = Op.IsAssignable<1 | 2, number>; // true
 * type C = Op.IsAssignable<any, any>; // false
 * type D = Op.IsAssignable<1, 1 | 2>; // true
 * type E = Op.IsAssignable<1 | 2, 1>; // false
 * ```
 * ---------------------------
 * Do you have any questions about `IsAssignable` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type IsAssignable<A, B> =
	Not<IsAny<A>> extends false
		? false
		: Not<IsAny<B>> extends false
			? false
			: [A] extends [B]
				? true
				: false;
