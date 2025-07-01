import type { Last, Exclude } from "@/union";
import type { Satisfy } from "@/operator";
import type { Range } from "@/numeric";

import { Test } from "@/test";

Test.Describe(
	"Transform an union type to array type with each properties",
	Test.It<ToArray<string>, [string], typeof Test.Out.PASS>(),
	Test.It<ToArray<1 | 2 | 3>, [1, 2, 3], typeof Test.Out.PASS>(),
	Test.It<ToArray<Range<1, 4>[number]>, Range<1, 4>, typeof Test.Out.PASS>(),
);

declare type _ToArray<TUnion, TResult extends unknown[] = []> = [
	Last<TUnion>,
] extends [never]
	? TResult
	: _ToArray<Exclude<TUnion, Last<TUnion>>, [Last<TUnion>, ...TResult]>;

/**
 * - Transform an union type `TUnion` to array with each properties
 *
 * @template TUnion - The union type to transform into an array.
 * @example
 * ```tsx
 * import type { Union } from "@dulysse1/ts-helper";
 *
 * type A = Union.ToArray<1 | 2 | 3>; // [1, 2, 3]
 * ```
 * ---------------------------
 * Do you have any questions about `ToArray` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type ToArray<TUnion> = Satisfy<_ToArray<TUnion>, unknown[]>;
