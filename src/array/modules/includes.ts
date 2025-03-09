import type { TDefaultArray } from "../utils";
import type { IsTuple } from "@/array";
import type { Equal } from "@/operator";

declare type IncludesInTuple<
	TArray extends TDefaultArray,
	TIncluded,
> = TArray extends [infer First, ...infer Rest]
	? Equal<First, TIncluded> extends true
		? true
		: IncludesInTuple<Rest, TIncluded>
	: false;

/**
 * - Check if `TIncluded` is an element of an array type `TArray`
 * ---------------------------
 * @example
 * ```tsx
 * import type { Arr } from "@dulysse1/ts-helper";
 *
 * type A = Arr.Includes<[1, 2, 3], 2>; // true
 * type B = Arr.Includes<[1, 2, 3], 4>; // false
 * ```
 * ---------------------------
 * Do you have any questions about {@link Has} usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Includes<TArray extends TDefaultArray, TIncluded> =
	IsTuple<TArray> extends true
		? IncludesInTuple<TArray, TIncluded>
		: Equal<TIncluded, TArray[number]> extends true
			? true
			: TIncluded extends TArray[number]
				? boolean
				: false;
