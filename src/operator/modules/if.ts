import { Test } from "@/test";

Test.Describe(
	"Conditional type If that returns Then or Else based on Condition",
	Test.It<If<true, string, number>, string, typeof Test.Out.PASS>(),
	Test.It<If<false, string, number>, number, typeof Test.Out.PASS>(),
	Test.It<If<boolean, string, number>, string | number, typeof Test.Out.PASS>(),
);

/**
 * - Conditional type that returns `Then` if `Condition` is `true`, otherwise returns `Else`.
 * @template Condition - The condition to evaluate.
 * @template Then - The type to return if `Condition` is `true`.
 * @template Else - The type to return if `Condition` is `false`.
 * @example
 * ```tsx
 * import type { Op } from "@dulysse1/ts-helper";
 *
 * type A = Op.If<true, string, number>; // string
 * type B = Op.If<false, string, number>; // number
 * type C = Op.If<boolean, string, number>; // string | number
 * ```
 * ---------------------------
 * Do you have any questions about `If` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 * | [my github](https://github.com/Dulysse)
 * | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type If<
	Condition extends boolean,
	Then,
	Else,
> = Condition extends true ? Then : Else;
