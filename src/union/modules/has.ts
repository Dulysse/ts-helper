import type { Includes } from "@/array";
import type { ToArray } from "@/union";

import * as Test from "@/test/local";

Test.Describe(
	"Check if a type is an element of an union type",
	Test.It<Has<1 | 2 | 3, number>, boolean, Test.Out.PASS>(),
	Test.It<Has<1 | 2 | 3, 2>, true, Test.Out.PASS>(),
	Test.It<Has<string, "demo">, false, Test.Out.PASS>(),
);

/**
 * - Check if `TIncluded` is an element of an union type `TUnion`
 *
 * @template TUnion The union type to check
 * @template TIncluded The type to check if it is included in `TUnion`
 * @example
 * ```tsx
 * import type { Union } from "@dulysse1/ts-helper";
 *
 * type A = Union.Has<1 | 2 | 3, 2>; // true
 * type B = Union.Has<1 | 2 | 3, 4>; // false
 * ```
 * ---------------------------
 * Do you have any questions about `Has` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Has<TUnion, TIncluded> = Includes<
	ToArray<TUnion>,
	TIncluded
>;
