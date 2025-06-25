import type { DefaultArrayType } from "../utils";
import type { IsTuple, ToUnion } from "@/array";
import type { Range } from "@/numeric";
import type { Equal } from "@/operator";

import * as Test from "@/test/local";

Test.Describe(
	"Apply filter to an array",
	Test.It<Filter<(string | number)[], string>, string[], Test.Out.PASS>(),
	Test.It<Filter<[1], string>, [], Test.Out.PASS>(),
	Test.It<
		Filter<[10, 23, 45, 67, 78, 189, 568], Range<50, 100>[number]>,
		[67, 78],
		Test.Out.PASS
	>(),
);

declare type _Filter<
	TArray extends DefaultArrayType,
	TFilter,
	TResult extends DefaultArrayType = [],
> =
	Equal<TArray, []> extends true
		? TResult
		: TArray extends [infer Head, ...infer Rest]
			? _Filter<
					Rest,
					TFilter,
					[
						...TResult,
						...(Equal<Extract<Head, TFilter>, Head> extends true ? [Head] : []),
					]
				>
			: never;

/**
 * - Apply a `TFilter` to an array type `TArray`.
 *
 * @template TArray - The array type to filter.
 * @template TFilter - The filter to execute.
 *
 * @example
 * ```tsx
 * import type { Arr, Num } from "@dulysse1/ts-helper";
 *
 * type A = Arr.Filter<
 *  [1, 2, 3, "4"],
 *  string
 * >; ["4"]
 * type B = Arr.Filter<
 *  [2, 3, 4, "5"],
 *  Num.Range<1, 3>[number]
 * >; [2, 3]
 * ```
 * ---------------------------
 * Do you have any questions about `Filter` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Filter<TArray extends DefaultArrayType, TFilter> =
	IsTuple<TArray> extends true
		? _Filter<TArray, TFilter>
		: Extract<ToUnion<TArray>, TFilter>[];
