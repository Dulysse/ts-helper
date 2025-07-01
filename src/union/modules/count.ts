import type { ToArray } from "@/union";
import type { Range } from "@/numeric";

import * as Test from "@/test";

Test.Describe(
	"Get an union type length of possibilities",
	Test.It<Count<"hello" | "world">, 2, Test.Out.PASS>(),
	Test.It<Count<string>, 1, Test.Out.PASS>(),
	Test.It<Count<Range<1, 5>[number]>, 5, Test.Out.PASS>(),
);

/**
 * - Get an union type `TUnion` length of possibilities
 *
 * @template TUnion The union type to count the number of possibilities
 * @example
 * ```tsx
 * import type { Union } from "@dulysse1/ts-helper";
 *
 * type A = Union.Count<1 | 2 | 3>; // 3
 * ```
 * ---------------------------
 * Do you have any questions about `Count` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Count<TUnion> =
	ToArray<TUnion> extends {
		length: infer Count;
	}
		? Count
		: never;
