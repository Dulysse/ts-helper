import type { IsTuple } from "@/array";
import type { TDefaultArray } from "../utils";
import type { And } from "@/operator";

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
	TArray1 extends TDefaultArray,
	TArray2 extends TDefaultArray,
> =
	And<IsTuple<TArray1>, IsTuple<TArray2>> extends true
		? [...TArray1, ...TArray2]
		: (TArray1[number] | TArray2[number])[];
