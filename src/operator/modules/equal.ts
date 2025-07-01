import { Test } from "@/test";

Test.Describe(
	"Check if first type is strictly equal to second type",
	Test.It<Equal<1, 1>, true, typeof Test.Out.PASS>(),
	Test.It<Equal<true, boolean>, false, typeof Test.Out.PASS>(),
	Test.It<Equal<true, true>, true, typeof Test.Out.PASS>(),
	Test.It<Equal<false, false | 0>, true, typeof Test.Out.FAIL>(),
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
export declare type Equal<A, B> = [A] extends [B]
	? [B] extends [A]
		? true
		: false
	: false;
