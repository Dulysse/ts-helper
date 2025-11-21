import type { DefaultArrayType } from "@/array/utils";
import type { Comparators, Compare, IsFloat, IsNegative } from "@/numeric";
import type { IsValidNumberInput } from "@/numeric/utils";
import type { Equal, Not, Or } from "@/operator";
import type { IsTuple, Length, Unique } from "@/array";
import type { HasKey } from "@/object";
import type { $internal } from "@/brand/modules/symbol";

import { Test } from "@/test";

Test.Describe(
	"Check if an array type satisfies the rules defined in InferArrayRules",
	Test.It<
		HasKey<Infer<[1, 2, 3], { minLength: 2 }>, typeof $internal>,
		false,
		typeof Test.Out.PASS
	>(),
	Test.It<
		HasKey<Infer<[1, 2, 3], { minLength: 4 }>, typeof $internal>,
		true,
		typeof Test.Out.PASS
	>(),
	Test.It<
		HasKey<Infer<[1, 1, 3], { unique: true }>, typeof $internal>,
		true,
		typeof Test.Out.PASS
	>(),
);

declare type CheckMinLength<
	TArray extends DefaultArrayType,
	Min extends number,
> =
	IsValidNumberInput<Min> extends true
		? Or<IsFloat<Min>, IsNegative<Min>> extends true
			? never
			: Compare<Length<TArray>, Min> extends
						| Comparators.GREATER
						| Comparators.EQUAL
				? true
				: false
		: never;

declare type CheckMaxLength<
	TArray extends DefaultArrayType,
	Max extends number,
> =
	IsValidNumberInput<Max> extends true
		? Or<IsFloat<Max>, IsNegative<Max>> extends true
			? never
			: Compare<Length<TArray>, Max> extends
						| Comparators.LOWER
						| Comparators.EQUAL
				? true
				: false
		: never;

export declare type InferArrayRules = {
	/**
	 * the array must contain at least `min` elements.
	 */
	minLength?: number;
	/**
	 * the array must contain a maximum of `max` elements.
	 */
	maxLength?: number;
	/**
	 * the array must contain only unique elements.
	 */
	unique?: boolean;
};

/**
 * - Apply some `rules` from {@link InferArrayRules} to a array, if one doesnt satisfy `TArray` it will return never.
 *
 * @template TArray The array type to infer rules
 * @template Rules The rules to apply
 * @example
 * ```tsx
 * import type { Arr } from "@dulysse1/ts-helper";
 *
 * type A = Arr.Infer<[1, 2, 3], { minLength: 2 }>; // [1, 2, 3]
 * type B = Arr.Infer<[1, 2, 3], { minLength: 4 }>; // { [$internal]: "The array (3 elements) must contain at least 4 elements." }
 * type C = Arr.Infer<[1, 1, 3], { unique: true }>; // { [$internal]: "The array must have only unique elements." }
 * ```
 * ---------------------------
 * Do you have any questions about `Infer` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Infer<
	TArray extends DefaultArrayType,
	Rules extends InferArrayRules,
> =
	Not<IsTuple<TArray>> extends true
		? TArray
		: Rules["minLength"] extends number
			? CheckMinLength<TArray, Rules["minLength"]> extends false
				? {
						[$internal]: `The array (${Length<TArray>} elements) must contain at least ${Rules["minLength"]} elements.`;
					}
				: Infer<TArray, Omit<Rules, "minLength">>
			: Rules["maxLength"] extends number
				? CheckMaxLength<TArray, Rules["maxLength"]> extends false
					? {
							[$internal]: `The array (${Length<TArray>} elements) must contain a maximum of ${Rules["maxLength"]} elements.`;
						}
					: Infer<TArray, Omit<Rules, "maxLength">>
				: Rules["unique"] extends true
					? Equal<TArray, Unique<TArray>> extends false
						? {
								[$internal]: `The array must have only unique elements.`;
							}
						: Infer<TArray, Omit<Rules, "unique">>
					: TArray;
