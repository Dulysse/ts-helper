import type { DefaultArrayType } from "@/array/utils";
import type { IsFloat, IsNegative, IsZero } from "@/numeric";
import type { PreviousPositive } from "@/numeric/modules/decrement";
import type { IsValidNumberInput } from "@/numeric/utils";
import type { Or } from "@/operator";

import * as Test from "@/test/local";

Test.Describe(
	"Fill an array type with a specified length",
	Test.It<Fill<3>, [undefined, undefined, undefined], Test.Out.PASS>(),
	Test.It<Fill<3, string>, [string, string, string], Test.Out.PASS>(),
	Test.It<Fill<number, string>, string[], Test.Out.PASS>(),
);

declare type _Fill<
	TLength extends number,
	TDefaultValue = undefined,
	TResult extends DefaultArrayType = [],
> =
	IsZero<TLength> extends true
		? TResult
		: _Fill<
				PreviousPositive<TLength>,
				TDefaultValue,
				[...TResult, TDefaultValue]
			>;

/**
 * - Fill an array type `TDefaultValue` with a specified length `TLength`.
 *
 * @template TLength - The length of the array to be filled.
 * @template TDefaultValue - The type of the value to fill the array with. (default: `undefined`)
 * - Must be a non-negative integer.
 * - If `TLength` is negative or a float, the result will be `never`.
 * @example
 * ```tsx
 * import type { Arr } from "@dulysse1/ts-helper";
 *
 * type A = Arr.Fill<5, "a">; // ["a", "a", "a", "a", "a"]
 * type B = Arr.Fill<0>; // []
 * type C = Arr.Fill<-1, "c">; // never
 * ```
 * ---------------------------
 * Do you have any questions about `Fill` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Fill<TLength extends number, TDefaultValue = undefined> =
	IsValidNumberInput<TLength> extends true
		? Or<IsFloat<TLength>, IsNegative<TLength>> extends true
			? never
			: _Fill<TLength, TDefaultValue>
		: TDefaultValue[];
