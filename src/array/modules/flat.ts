import type { IsTuple, ToUnion } from "@/array";
import type { DefaultArrayType } from "@/array/utils";
import type { IsNegative, IsZero, ParseInt } from "@/numeric";
import type { PreviousPositive } from "@/numeric/modules/decrement";
import type { NextPositive } from "@/numeric/modules/increment";
import type { IsValidNumberInput } from "@/numeric/utils";
import type { Or } from "@/operator";

import * as Test from "@/test/local";

Test.Describe(
	"Flatten an array type to a specified depth",
	Test.It<Flat<[[1, 2], [3, 4]]>, [1, 2, 3, 4], Test.Out.PASS>(),
	Test.It<
		Flat<[[1, 2], [3, [4, string[]]]], 2>,
		[1, 2, 3, 4, string[]],
		Test.Out.PASS
	>(),
	Test.It<Flat<string[][][][][], 4>, string[], Test.Out.PASS>(),
);

declare type _Flat<
	TArray extends DefaultArrayType,
	TDeepth extends number = 1,
	TIndex extends number = 0,
	TResult extends DefaultArrayType = [],
> =
	IsTuple<TArray> extends true
		? TArray[TIndex] extends undefined
			? TResult
			: _Flat<
					TArray,
					TDeepth,
					NextPositive<TIndex>,
					[
						...TResult,
						...(TArray[TIndex] extends DefaultArrayType
							? TDeepth extends 1
								? TArray[TIndex]
								: _Flat<TArray[TIndex], PreviousPositive<TDeepth>>
							: [TArray[TIndex]]),
					]
				>
		: TDeepth extends 1
			? ToUnion<TArray> extends DefaultArrayType
				? ToUnion<TArray>
				: TArray
			: _Flat<
					ToUnion<TArray> extends DefaultArrayType ? ToUnion<TArray> : TArray,
					PreviousPositive<TDeepth>
				>;

/**
 * - Flatten an array type `TArray` to a specified depth `TDeepth`.
 *
 * @template TArray - The array type to flatten.
 * @template TDeepth - The depth to which the array should be flattened (default is 1).
 * @example
 * ```tsx
 * import type { Arr } from "@dulysse1/ts-helper";
 *
 * type A = Arr.Flat<
 *  [[1, 2], [3, 4]]
 * >; // [1, 2, 3, 4]
 * type B = Arr.Flat<
 *  [[1, 2], [3, [4, string[]]]],
 *  2
 * >; // [1, 2, 3, 4, string[]]
 * ```
 * ---------------------------
 * Do you have any questions about `Flat` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Flat<
	TArray extends DefaultArrayType,
	TDeepth extends number = 1,
> =
	IsValidNumberInput<TDeepth> extends true
		? Or<IsZero<TDeepth>, IsNegative<TDeepth>> extends true
			? TArray
			: _Flat<TArray, ParseInt<`${TDeepth}`>>
		: DefaultArrayType;
