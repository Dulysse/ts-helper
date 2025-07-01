import type { Fill } from "@/array/modules/fill";
import type { Comparators, Compare, IsFloat, IsNegative } from "@/numeric";
import type { PreviousPositive } from "@/numeric/modules/decrement";
import type { NextPositive } from "@/numeric/modules/increment";
import type { IsValidNumberInput } from "@/numeric/utils";
import type { And, Or } from "@/operator";

import { Test } from "@/test";

Test.Describe(
	"Fill an array type as an union array type from a range",
	Test.It<
		FillRange<2, 1>,
		[undefined, undefined] | [undefined],
		typeof Test.Out.PASS
	>(),
	Test.It<FillRange<-1, 2>, never, typeof Test.Out.PASS>(),
	Test.It<FillRange<1, number, string>, string[], typeof Test.Out.PASS>(),
);

declare type _FillRange<
	From extends number,
	To extends number,
	TDefaultValue = undefined,
> =
	Compare<From, To> extends Comparators.EQUAL
		? Fill<From, TDefaultValue>
		:
				| Fill<From, TDefaultValue>
				| _FillRange<
						Compare<From, To> extends Comparators.LOWER
							? NextPositive<From>
							: PreviousPositive<From>,
						To,
						TDefaultValue
				  >;

/**
 * - Fill an array type `TValue` as an union from range (`From` -> `To`).
 *
 * @template From - The first number of the range (inclusive).
 * @template To - The last number of the range (inclusive).
 * - Must be a non-negative integer.
 * - If `TLength` is negative or a float, the result will be `never`.
 * @template TDefaultValue - The type of the value to fill the array with. (default: `undefined`)
 * @example
 * ```tsx
 * import type { Arr } from "@dulysse1/ts-helper";
 *
 * type A = Arr.FillRange<1, 3, "a">; // ["a"] | ["a", "a"] | ["a", "a", "a"]
 * type B = Arr.FillRange<0, 0, "b">; // []
 * type C = Arr.FillRange<-1, "c">; // never
 * type D = (...p: Arr.FillRange<string, 1, 2>) => void; // (p_1: string) => void | (p_1: string, p_2: string) => void
 * ```
 * ---------------------------
 * Do you have any questions about `FillRange` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type FillRange<
	From extends number,
	To extends number,
	TDefaultValue = undefined,
> =
	And<IsValidNumberInput<From>, IsValidNumberInput<To>> extends true
		? Or<
				Or<IsFloat<From>, IsNegative<From>>,
				Or<IsFloat<To>, IsNegative<To>>
			> extends true
			? never
			: _FillRange<From, To, TDefaultValue>
		: TDefaultValue[];
