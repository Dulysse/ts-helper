import type { TDefaultArray } from "@/array/utils";
import type { Decrement, IsFloat, IsNegative, IsZero } from "@/numeric";
import type { IsValidNumberInput } from "@/numeric/utils";
import type { Or } from "@/operator";

declare type _Fill<
	TValue,
	TLength extends number,
	TResult extends TDefaultArray = [],
> =
	IsZero<TLength> extends true
		? TResult
		: _Fill<TValue, Decrement<TLength>, [...TResult, TValue]>;

/**
 * - Fill an array type `TValue` with a specified length `TLength`.
 *
 * @template TValue - The type of the value to fill the array with.
 * @template TLength - The length of the array to be filled.
 * - Must be a non-negative integer.
 * - If `TLength` is negative or a float, the result will be `never`.
 * @example
 * ```tsx
 * import type { Arr } from "@dulysse1/ts-helper";
 *
 * type A = Arr.Fill<"a", 5>; // ["a", "a", "a", "a", "a"]
 * type B = Arr.Fill<"b", 0>; // []
 * type C = Arr.Fill<"c", -1>; // never
 * ```
 * ---------------------------
 * Do you have any questions about `Fill` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Fill<TValue, TLength extends number> =
	IsValidNumberInput<TLength> extends true
		? Or<IsFloat<TLength>, IsNegative<TLength>> extends true
			? never
			: _Fill<TValue, TLength>
		: TValue[];
