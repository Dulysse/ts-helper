import { Test } from "@/test";

Test.Describe(
	"Check if one of condition is true",
	Test.It<Or<true, false>, true, typeof Test.Out.PASS>(),
	Test.It<Or<true, boolean>, true, typeof Test.Out.PASS>(),
	Test.It<Or<true, true>, true, typeof Test.Out.PASS>(),
	Test.It<Or<false, false>, true, typeof Test.Out.FAIL>(),
);

/**
 * - Check if one of condition `A` and `B` is true, if it's the case, return `true` else return `false`
 *
 * @template A The first condition to check
 * @template B The second condition to check
 *
 * @example
 * ```tsx
 * import type { Op } from "@dulysse1/ts-helper";
 *
 * type A = Op.Or<true, false>; // true
 * type B = Op.Or<false, false>; // false
 * ```
 * ---------------------------
 * Do you have any questions about `Or` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Or<A extends boolean, B extends boolean> = {
	true: {
		true: true;
		false: true;
	};
	false: {
		true: true;
		false: false;
	};
}[`${A}`][`${B}`];
