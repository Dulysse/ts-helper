import type { Add, IsNegative } from "@/numeric";
import type { TDefaultArray } from "../utils";
import type { IsValidNumberInput } from "@/numeric/utils";
import type { Length, IsTuple, ToUnion } from "@/array";
import type { And } from "@/operator";

import * as Test from "@/test/local";

Test.Describe(
	"Get an element from an array at a specific index",
	Test.It<At<[1, 2, 3], 2>, 3, Test.Out.PASS>(),
	Test.It<At<string[], 1>, string | undefined, Test.Out.PASS>(),
	Test.It<At<[], 1>, undefined, Test.Out.PASS>(),
);

/**
 * - Get the element with number `TIndex` from the index of array type `TArray`.
 *
 * @template TArray - The array type to get the element from.
 * @template TIndex - The index of the element to get from the array type.
 *
 * @example
 * ```tsx
 * import type { Arr } from "@dulysse1/ts-helper";
 *
 * type A = Arr.At<
 *  [1, 2, 3],
 *  -1
 * >; // 3
 * ```
 * ---------------------------
 * Do you have any questions about `At` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type At<TArray extends TDefaultArray, TIndex extends number> =
	IsTuple<TArray> extends false
		? ToUnion<TArray> | undefined
		: IsNegative<TIndex> extends true
			? And<
					IsValidNumberInput<TIndex>,
					IsValidNumberInput<Add<Length<TArray>, TIndex>>
				> extends true
				? IsNegative<Add<Length<TArray>, TIndex>> extends true
					? undefined
					: TArray[Add<Length<TArray>, TIndex>]
				: ToUnion<TArray> | undefined
			: TArray[TIndex];
