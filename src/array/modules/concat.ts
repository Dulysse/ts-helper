import type { IsTuple, ToUnion } from "@/array";
import type { DefaultArrayType } from "../utils";
import type { And } from "@/operator";

import { Test } from "@/test";

Test.Describe(
	"Concatenate two array types into a single array type",
	Test.It<Concat<[1, 2, 3], [4]>, [1, 2, 3, 4], typeof Test.Out.PASS>(),
	Test.It<
		Concat<[1, 2, 3], string[]>,
		(string | 1 | 2 | 3)[],
		typeof Test.Out.PASS
	>(),
	Test.It<Concat<[1, 2, 3], [3]>, [1, 2, 3, 3], typeof Test.Out.PASS>(),
);

/**
 * - Concatenate two array types `TArray1` and `TArray2` into a single array type.
 *
 * @template TArray1 - The first array type to concatenate.
 * @template TArray2 - The second array type to concatenate.
 * @example
 * ```tsx
 * import type { Arr } from "@dulysse1/ts-helper";
 *
 * type A = Arr.Concat<
 *  [1, 2, 3],
 *  [4, 5, 6]
 * >; // [1, 2, 3, 4, 5, 6]
 * ```
 * ---------------------------
 * Do you have any questions about `Concat` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Concat<
	TArray1 extends DefaultArrayType,
	TArray2 extends DefaultArrayType,
> =
	And<IsTuple<TArray1>, IsTuple<TArray2>> extends true
		? [...TArray1, ...TArray2]
		: (ToUnion<TArray1> | ToUnion<TArray2>)[];
