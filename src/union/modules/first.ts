import type { ToArray } from "@/union";

import * as Test from "@/test/local";

Test.Describe(
	"Get the first element of an union type",
	Test.It<First<1 | 2 | 3>, 1, Test.Out.PASS>(),
	Test.It<First<number>, number, Test.Out.PASS>(),
	Test.It<First<`${1 | 2 | 3}`>, "1", Test.Out.PASS>(),
);

/**
 * - Get the first element of an union type `TUnion`
 *
 * @template TUnion The union type to get the first element from
 * @example
 * ```tsx
 * import type { Union } from "@dulysse1/ts-helper";
 *
 * type A = Union.First<1 | 2 | 3>; // 1
 * ```
 * ---------------------------
 * Do you have any questions about `First` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type First<TUnion> =
	ToArray<TUnion> extends [infer First, ...unknown[]] ? First : never;
