import type { DefaultArrayType } from "../utils";
import type { IsTuple, ToUnion } from "@/array";
import { NextPositive } from "@/numeric/modules/increment";
import type { Equal } from "@/operator";

import { Test } from "@/test";

Test.Describe(
	"Get the index of a filtered element in an array",
	Test.It<IndexOf<(string | number)[], string>, number, typeof Test.Out.PASS>(),
	Test.It<IndexOf<[1, 2, 3], string>, -1, typeof Test.Out.PASS>(),
	Test.It<IndexOf<[1, 2, "3"], string>, 2, typeof Test.Out.PASS>(),
	Test.It<IndexOf<[1, 2, 3], 2>, 1, typeof Test.Out.PASS>(),
	Test.It<IndexOf<(1 | 2 | 3)[], 2>, number, typeof Test.Out.PASS>(),
);

declare type _IndexOf<
	TArray extends DefaultArrayType,
	TFilter,
	TIndex extends number = 0,
> = TArray extends [infer Head, ...infer Tail]
	? Equal<Extract<Head, TFilter>, Head> extends true
		? TIndex
		: _IndexOf<Tail, TFilter, NextPositive<TIndex>>
	: -1;

/**
 * - Get the index in an array type `TArray` that match with a `TFilter`.
 *
 * @template TArray - The array type to check.
 * @template TFilter - The filter to execute.
 *
 * @example
 * ```tsx
 * import type { Arr } from "@dulysse1/ts-helper";
 *
 * type A = Arr.IndexOf<
 *  [1, 2, 3, "4"],
 *  string
 * >; // 3
 * type B = Arr.IndexOf<
 *  [2, 3, 4, 5],
 *  string
 * >; // -1
 * ```
 * ---------------------------
 * Do you have any questions about `IndexOf` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type IndexOf<TArray extends DefaultArrayType, TFilter> =
	IsTuple<TArray> extends true
		? _IndexOf<TArray, TFilter>
		: ToUnion<TArray> extends TFilter
			? number
			: TFilter extends ToUnion<TArray>
				? number
				: -1;
