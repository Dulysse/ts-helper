import type { At } from "@/array";
import type { ToArray } from "@/union";
import type { Range } from "@/numeric";

import * as Test from "@/test";

Test.Describe(
	"Get the element from the index of union type",
	Test.It<Through<string, 1>, undefined, Test.Out.PASS>(),
	Test.It<Through<1 | 2 | 3, 1>, 2, Test.Out.PASS>(),
	Test.It<Through<Range<1, 4>[number], 3>, 4, Test.Out.PASS>(),
);

/**
 * - Get the element with number `TIndex` from the index of union type `TUnion`.
 *
 * @template TUnion The union type to get the element from
 * @template TIndex The index of the element to get from the union type
 * @example
 * ```tsx
 * import type { Union } from "@dulysse1/ts-helper";
 *
 * type A = Union.Through<
 *  1 | 2 | 3,
 *  -1
 * >; // 3
 * ```
 * ---------------------------
 * Do you have any questions about `Through` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Through<TUnion, TIndex extends number> = At<
	ToArray<TUnion>,
	TIndex
>;
