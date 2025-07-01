import * as Test from "@/test";

Test.Describe(
	"Check if one of condition is true",
	Test.It<Xor<true, false>, true, Test.Out.PASS>(),
	Test.It<Xor<true, boolean>, boolean, Test.Out.PASS>(),
	Test.It<Xor<true, true>, false, Test.Out.PASS>(),
	Test.It<Xor<false, false>, true, Test.Out.FAIL>(),
);

/**
 * - Check if `exactly` one of condition `A` and `B` is true, if it's the case, return `true` else return `false`
 *
 * @template A The first condition to check
 * @template B The second condition to check
 *
 * @example
 * ```tsx
 * import type { Op } from "@dulysse1/ts-helper";
 *
 * type A = Op.Xor<true, false>; // true
 * type B = Op.Xor<true, true>; // false
 * ```
 * ---------------------------
 * Do you have any questions about `Xor` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Xor<A extends boolean, B extends boolean> = {
	true: {
		true: false;
		false: true;
	};
	false: {
		true: true;
		false: false;
	};
}[`${A}`][`${B}`];
