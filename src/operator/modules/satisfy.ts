import * as Test from "@/test/local";

Test.Describe(
	"Check if a type is satisfying another type",
	Test.It<Satisfy<true, false>, false, Test.Out.PASS>(),
	Test.It<Satisfy<true, boolean>, true, Test.Out.PASS>(),
	Test.It<Satisfy<1, number>, 1, Test.Out.PASS>(),
	Test.It<Satisfy<string, `${string}.com`>, `${string}.com`, Test.Out.PASS>(),
);

/**
 * - Check if `A` is satisfying `B`, if it's the case, return `A` else `B`
 *
 * @template A The type to check
 * @template B The type to satisfy
 *
 * @example
 * ```tsx
 * import type { Op } from "@dulysse1/ts-helper";
 *
 * type A = Op.Satisfy<1 | 2, number>; // 1 | 2
 * type B = Op.Satisfy<"hello", number>; // number
 * ```
 * ---------------------------
 * Do you have any questions about `Satisfy` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Satisfy<A, B> = A extends B ? A : B;
