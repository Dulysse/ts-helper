import type { Comparators, Compare, IsFloat, IsNegative } from "@/numeric";
import type { IsValidNumberInput } from "@/numeric/utils";
import type { Equal, Or } from "@/operator";
import type { IsExactString, Width } from "@/string";

declare type CheckMinRange<TString extends string, Min extends number> =
	IsValidNumberInput<Min> extends true
		? Or<IsFloat<Min>, IsNegative<Min>> extends true
			? never
			: Compare<Width<TString>, Min> extends
						| Comparators.GREATER
						| Comparators.EQUAL
				? true
				: false
		: never;

declare type CheckMaxRange<TString extends string, Max extends number> =
	IsValidNumberInput<Max> extends true
		? Or<IsFloat<Max>, IsNegative<Max>> extends true
			? never
			: Compare<Width<TString>, Max> extends
						| Comparators.LOWER
						| Comparators.EQUAL
				? true
				: false
		: never;

declare type InferStringRules = {
	/**
	 * the string must contain at least `min` characteres.
	 */
	minChar?: number;
	/**
	 * the string must contain a maximum of `max` characters.
	 */
	maxChar?: number;
	/**
	 * the string must match with the following pattern with the {@link Extract} method.
	 */
	pattern?: string;
};

/**
 * the {@link Infer} error message
 */
declare const stringError: unique symbol;

/**
 * - Apply some `rules` from {@link InferStringRules} to a string, if one doesnt satisfy `TString` it will return never.
 *
 * @template TString The string type to infer rules
 * @template Rules The rules to apply
 * @example
 * ```tsx
 * import type { Str } from "@dulysse1/ts-helper";
 *
 * type A = Str.Infer<"Hello world!", { maxChar: 8 }>; // { [stringError]?: '...' }
 * type B = Str.Infer<"Hello", { minChar: 2, maxChar: 10 }>; // "Hello"
 * type C = Str.Infer<"ulysse@demo.com", { pattern: `${string}@${string}.${string}` }>; // "ulysse@demo.com"
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
	TString extends string,
	Rules extends InferStringRules,
> =
	IsExactString<TString> extends true
		? TString
		: Rules["minChar"] extends number
			? CheckMinRange<TString, Rules["minChar"]> extends false
				? {
						[stringError]?: `The string '${TString}' (${Width<TString>} characters) must contain at least ${Rules["minChar"]} characters.`;
					}
				: Infer<TString, Omit<Rules, "minChar">>
			: Rules["maxChar"] extends number
				? CheckMaxRange<TString, Rules["maxChar"]> extends false
					? {
							[stringError]?: `The string '${TString}' (${Width<TString>} characters) must contain a maximum of ${Rules["maxChar"]} characters.`;
						}
					: Infer<TString, Omit<Rules, "maxChar">>
				: Rules["pattern"] extends string
					? Equal<Extract<TString, Rules["pattern"]>, TString> extends false
						? {
								[stringError]?: `The string '${TString}' must match with the following pattern: '${Rules["pattern"]}'.`;
							}
						: Infer<TString, Omit<Rules, "pattern">>
					: TString;
