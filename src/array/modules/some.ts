import type { DefaultArrayType } from "../utils";
import type { IsTuple, ToUnion } from "@/array";
import type { Equal } from "@/operator";

import { Test } from "@/test";

Test.Describe(
	"Check if array match with filter",
	Test.It<Some<(string | number)[], string>, boolean, typeof Test.Out.PASS>(),
	Test.It<Some<[1, 2, 3], string>, false, typeof Test.Out.PASS>(),
	Test.It<Some<[1, 2, "3"], string>, true, typeof Test.Out.PASS>(),
	Test.It<Some<[1, 2, 3], 2>, true, typeof Test.Out.PASS>(),
	Test.It<Some<(1 | 2 | 3)[], 2>, boolean, typeof Test.Out.PASS>(),
);

declare type _Some<TArray extends DefaultArrayType, TFilter> = TArray extends [
	infer Head,
	...infer Tail,
]
	? Equal<Extract<Head, TFilter>, Head> extends true
		? true
		: _Some<Tail, TFilter>
	: false;

/**
 * - Check if an array type `TArray` match with a `TFilter`.
 *
 * @template TArray - The array type to check.
 * @template TFilter - The filter to execute.
 *
 * @example
 * ```tsx
 * import type { Arr } from "@dulysse1/ts-helper";
 *
 * type A = Arr.Some<
 *  [1, 2, 3, "4"],
 *  string
 * >; // true
 * type B = Arr.Some<
 *  [2, 3, 4, 5],
 *  string
 * >; // false
 * ```
 * ---------------------------
 * Do you have any questions about `Some` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Some<TArray extends DefaultArrayType, TFilter> =
	IsTuple<TArray> extends true
		? _Some<TArray, TFilter>
		: ToUnion<TArray> extends TFilter
			? boolean
			: TFilter extends ToUnion<TArray>
				? boolean
				: false;
