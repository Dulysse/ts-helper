import type { IsTuple } from "@/array";
import type { TDefaultArray } from "@/array/utils";
import type {
	Decrement,
	Increment,
	IsNegative,
	IsZero,
	ParseInt,
} from "@/numeric";
import type { IsValidNumberInput } from "@/numeric/utils";
import type { Or } from "@/operator";

declare type _Flat<
	TArray extends TDefaultArray,
	TDeepth extends number = 1,
	TIndex extends number = 0,
	TResult extends TDefaultArray = [],
> =
	IsTuple<TArray> extends true
		? TArray[TIndex] extends undefined
			? TResult
			: _Flat<
					TArray,
					TDeepth,
					Increment<TIndex>,
					[
						...TResult,
						...(TArray[TIndex] extends TDefaultArray
							? TDeepth extends 1
								? TArray[TIndex]
								: _Flat<TArray[TIndex], Decrement<TDeepth>>
							: [TArray[TIndex]]),
					]
				>
		: TDeepth extends 1
			? TArray[number] extends TDefaultArray
				? TArray[number]
				: TArray
			: _Flat<
					TArray[number] extends TDefaultArray ? TArray[number] : TArray,
					Decrement<TDeepth>
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
	TArray extends TDefaultArray,
	TDeepth extends number = 1,
> =
	IsValidNumberInput<TDeepth> extends true
		? Or<IsZero<TDeepth>, IsNegative<TDeepth>> extends true
			? TArray
			: _Flat<TArray, ParseInt<`${TDeepth}`>>
		: TDefaultArray;
