import type { DefaultArrayType } from "../utils";
import type { IsTuple, ToUnion } from "@/array";
import type { IsEqual } from "@/operator";

declare type _Filter<
	TArray extends DefaultArrayType,
	TFilter,
	TResult extends DefaultArrayType = [],
> =
	IsEqual<TArray, []> extends true
		? TResult
		: TArray extends [infer Head, ...infer Tail]
			? _Filter<
					Tail,
					TFilter,
					[
						...TResult,
						...(IsEqual<Extract<Head, TFilter>, Head> extends true
							? [Head]
							: []),
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
 * >; // ["4"]
 * type B = Arr.Filter<
 *  [2, 3, 4, "5"],
 *  Num.Range<1, 3>[number]
 * >; // [2, 3]
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
