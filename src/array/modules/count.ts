import type { IsTuple, ToUnion } from "@/array";
import type { TDefaultArray } from "@/array/utils";
import type { NextPositive } from "@/numeric/modules/increment";
import type { Equal } from "@/operator";

import * as Test from "@/test/local";

Test.Describe(
	"Count the number of occurrences of a specific element",
	Test.It<Count<[3, 1, 2, 3], 3>, 2, Test.Out.PASS>(),
	Test.It<Count<[1, 2, 3], number>, 0, Test.Out.PASS>(),
	Test.It<Count<number[], "1">, 0, Test.Out.PASS>(),
	Test.It<Count<number[], 1>, number, Test.Out.PASS>(),
);

declare type _Count<
	TArray extends TDefaultArray,
	TElement,
	Result extends number = 0,
> = TArray extends [infer First, ...infer Rest]
	? Equal<First, TElement> extends true
		? _Count<Rest, TElement, NextPositive<Result>>
		: _Count<Rest, TElement, Result>
	: Result;

/**
 * - Count the number of occurrences of a specific element `TElement` in an array type `TArray`.
 *
 * @template TArray - The array type to search in.
 * @template TElement - The element type to count in the array.
 *
 * @example
 * ```tsx
 * import type { Arr } from "@dulysse1/ts-helper";
 *
 * type A = Arr.Count<[1, 2, 3, 1, 4, 1], 1>; // 3
 * type B = Arr.Count<[1, 2, 3, 4], 5>; // 0
 * type C = Arr.Count<[], 1>; // 0
 * ```
 * ---------------------------
 * Do you have any questions about `Count` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Count<
	TArray extends TDefaultArray,
	TElement,
> = TArray extends TDefaultArray
	? TElement extends ToUnion<TArray>
		? IsTuple<TArray> extends true
			? _Count<TArray, TElement>
			: number
		: 0
	: never;
