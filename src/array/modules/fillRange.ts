import type { Fill } from "@/array/modules/fill";
import type {
	Comparators,
	Compare,
	Decrement,
	Increment,
	IsFloat,
	IsNegative,
} from "@/numeric";
import type { IsValidNumberInput } from "@/numeric/utils";
import type { And, Or } from "@/operator";

declare type _FillRange<TValue, From extends number, To extends number> =
	Compare<From, To> extends Comparators.EQUAL
		? Fill<TValue, From>
		:
				| Fill<TValue, From>
				| _FillRange<
						TValue,
						Compare<From, To> extends Comparators.LOWER
							? Increment<From>
							: Decrement<From>,
						To
				  >;

/**
 * - Fill an array type `TValue` as an union from range (`From` -> `To`).
 *
 * @template TValue - The type of the value to fill the array with.
 * @template From - The first number of the range (inclusive).
 * @template To - The last number of the range (inclusive).
 * - Must be a non-negative integer.
 * - If `TLength` is negative or a float, the result will be `never`.
 * @example
 * ```tsx
 * import type { Arr } from "@dulysse1/ts-helper";
 *
 * type A = Arr.FillRange<"a", 1, 3>; // ["a"] | ["a", "a"] | ["a", "a", "a"]
 * type B = Arr.FillRange<"b", 0, 0>; // []
 * type C = Arr.FillRange<"c", -1>; // never
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
export declare type FillRange<TValue, From extends number, To extends number> =
	And<IsValidNumberInput<From>, IsValidNumberInput<To>> extends true
		? Or<
				Or<IsFloat<From>, IsNegative<From>>,
				Or<IsFloat<To>, IsNegative<To>>
			> extends true
			? never
			: _FillRange<TValue, From, To>
		: TValue[];
