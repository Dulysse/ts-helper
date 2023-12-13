import type { Add, IsNegative } from "@/numeric";
import type { TDefaultArray } from "../utils";
import type { IsValidNumberInput } from "@/numeric/utils";
import type { Length, IsTuple } from "@/array";
import type { And } from "@/operator";

/**
 * #### Get the element with number `TIndex` from the index of array type `TArray`.
 * ---------------------------
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
 * Do you have any questions about {@link At} usage ?
 * ### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type At<
	TArray extends TDefaultArray,
	TIndex extends number,
> = IsTuple<TArray> extends false
	? TArray[number] | undefined
	: IsNegative<TIndex> extends true
		? And<
				IsValidNumberInput<TIndex>,
				IsValidNumberInput<Add<Length<TArray>, TIndex>>
			> extends true
			? IsNegative<Add<Length<TArray>, TIndex>> extends true
				? undefined
				: TArray[Add<Length<TArray>, TIndex>]
			: TArray[number] | undefined
		: TArray[TIndex];
