import * as Test from "@/test/local";

Test.Describe(
	"Check if both condition are true",
	Test.It<And<true, false>, false, Test.Out.PASS>(),
	Test.It<And<true, boolean>, boolean, Test.Out.PASS>(),
	Test.It<And<true, true>, true, Test.Out.PASS>(),
	Test.It<And<false, true>, true, Test.Out.FAIL>(),
);

/**
 * - Check if both condition `A` and `B` are true, if it's the case, return `true` else return `false`
 *
 * @template A The first condition to check
 * @template B The second condition to check
 *
 * @example
 * ```tsx
 * import type { Op } from "@dulysse1/ts-helper";
 *
 * type A = Op.And<true, true>; // true
 * type B = Op.And<true, false>; // false
 * ```
 * ---------------------------
 * Do you have any questions about `And` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type And<A extends boolean, B extends boolean> = {
	true: {
		true: true;
		false: false;
	};
	false: {
		true: false;
		false: false;
	};
}[`${A}`][`${B}`];
