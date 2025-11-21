import type { Equal, If } from "@/operator";

import { Test } from "@/test";

Test.Describe(
	"Return type A unless it is unknown, in which case return type B",
	Test.It<Fallback<unknown, string>, string, typeof Test.Out.PASS>(),
	Test.It<Fallback<number, string>, number, typeof Test.Out.PASS>(),
);

/**
 * - Returns type A if A is not unknown, otherwise returns type B
 *
 * @template A The first type to check
 * @template B The type to return if A is unknown
 *
 * @example
 * ```tsx
 * import type { Op } from "@dulysse1/ts-helper";
 *
 * type A = Op.Fallback<unknown, string>; // string
 * type B = Op.Fallback<number, string>; // number
 * ```
 * ---------------------------
 * Do you have any questions about `Fallback` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Fallback<A, B> = If<Equal<A, unknown>, B, A>;
