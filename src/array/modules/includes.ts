import type { DefaultArrayType } from "../utils";
import type { IsTuple, ToUnion } from "@/array";
import type { Equal } from "@/operator";

import { Test } from "@/test";

Test.Describe(
	"Check if a type is an element into an array type",
	Test.It<Includes<[[1, 2], [3, 4]], [1, 2]>, true, typeof Test.Out.PASS>(),
	Test.It<Includes<string[][], string>, false, typeof Test.Out.PASS>(),
	Test.It<Includes<string[], string>, boolean, typeof Test.Out.PASS>(),
);

declare type IncludesInTuple<
	TArray extends DefaultArrayType,
	TIncluded,
> = TArray extends [infer Head, ...infer Tail]
	? Equal<Head, TIncluded> extends true
		? true
		: Head extends TIncluded
			? boolean
			: IncludesInTuple<Tail, TIncluded>
	: false;

/**
 * - Check if `TIncluded` is an element of an array type `TArray`
 *
 * @template TArray - The array type to check for inclusion.
 * @template TIncluded - The element type to check for inclusion in the array type.
 * @example
 * ```tsx
 * import type { Arr } from "@dulysse1/ts-helper";
 *
 * type A = Arr.Includes<[1, 2, 3], 2>; // true
 * type B = Arr.Includes<[1, 2, 3], 4>; // false
 * ```
 * ---------------------------
 * Do you have any questions about `Includes` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Includes<TArray extends DefaultArrayType, TIncluded> =
	IsTuple<TArray> extends true
		? IncludesInTuple<TArray, TIncluded>
		: TIncluded extends ToUnion<TArray>
			? boolean
			: false;
