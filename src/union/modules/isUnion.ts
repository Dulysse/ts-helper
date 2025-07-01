import type { Last } from "@/union";
import type { Equal } from "@/operator";
import type { Range } from "@/numeric";

import * as Test from "@/test";

Test.Describe(
	"Check if union type is an union with many choices",
	Test.It<IsUnion<string>, false, Test.Out.PASS>(),
	Test.It<IsUnion<1 | 2 | 3>, true, Test.Out.PASS>(),
	Test.It<IsUnion<Range<1, 4>[number]>, true, Test.Out.PASS>(),
);

/**
 * - Check if union type `TUnion` is an union with many choices
 *
 * @template TUnion - The union type to check
 * @example
 * ```tsx
 * import type { Union } from "@dulysse1/ts-helper";
 *
 * type A = Union.IsUnion<1>; // false
 * type B = Union.IsUnion<1 | 2 | 3>; // true
 * ```
 * ---------------------------
 * Do you have any questions about `IsUnion` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type IsUnion<TUnion> =
	Equal<TUnion, Last<TUnion>> extends true ? false : true;
