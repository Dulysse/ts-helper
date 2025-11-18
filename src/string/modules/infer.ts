import type { Comparators, Compare, IsFloat, IsNegative } from "@/numeric";
import type { IsValidNumberInput } from "@/numeric/utils";
import type { Equal, Or } from "@/operator";
import type {
	Alphanumeric,
	ContainExactString,
	Includes,
	Width,
} from "@/string";
import type { $internal } from "@/brand/modules/symbol";
import type { HasKey } from "@/object";

import { Test } from "@/test";

Test.Describe(
	"Apply some rules to a string",
	Test.It<
		HasKey<Infer<"hello", {}>, typeof $internal>,
		false,
		typeof Test.Out.PASS
	>(),
	Test.It<
		HasKey<Infer<"hello", { minChar: 10 }>, typeof $internal>,
		true,
		typeof Test.Out.PASS
	>(),
	Test.It<
		HasKey<
			Infer<"hello Ulysse!", { pattern: `hello ${string}.` }>,
			typeof $internal
		>,
		true,
		typeof Test.Out.PASS
	>(),
	Test.It<
		HasKey<
			Infer<"Hello ulysse!", { excludeCharacters: Alphanumeric["A_Z"] }>,
			typeof $internal
		>,
		true,
		typeof Test.Out.PASS
	>(),
	Test.It<
		HasKey<Infer<"Hello ulysse!", { alphanumeric: true }>, typeof $internal>,
		true,
		typeof Test.Out.PASS
	>(),
);

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

declare type AlphanumericException = " " | "_" | "-" | "." | "@";

declare type ContainOnlyAlphanumericOrException<TString extends string> =
	TString extends `${infer Head}${infer Tail}`
		? Head extends
				| Alphanumeric[keyof Alphanumeric][number]
				| AlphanumericException
			? ContainOnlyAlphanumericOrException<Tail>
			: false
		: true;

export declare type InferStringRules = {
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
	/**
	 * the string must not contain the following characters.
	 */
	excludeCharacters?: string[];
	/**
	 * the string must contain only alphanumeric characters (a-z, A-Z, 0-9) and spaces.
	 */
	alphanumeric?: boolean;
};

/**
 * - Apply some `rules` from {@link InferStringRules} to a string, if one doesnt satisfy `TString` it will return never.
 *
 * @template TString The string type to infer rules
 * @template Rules The rules to apply
 * @example
 * ```tsx
 * import type { Str } from "@dulysse1/ts-helper";
 *
 * type A = Str.Infer<"Hello world!", { maxChar: 8 }>; // { [$internal]?: '...' }
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
	ContainExactString<TString> extends true
		? TString
		: Rules["excludeCharacters"] extends string[]
			? Rules["excludeCharacters"] extends []
				? Infer<TString, Omit<Rules, "excludeCharacters">>
				: Rules["excludeCharacters"] extends [
							infer Head,
							...infer Tail extends string[],
					  ]
					? Head extends string
						? Includes<TString, Head> extends true
							? {
									[$internal]?: `The string "${TString}" must not contain the character "${Head}".`;
								}
							: Infer<
									TString,
									{ excludeCharacters: Tail } & Omit<Rules, "excludeCharacters">
								>
						: Infer<
								TString,
								{ excludeCharacters: Tail } & Omit<Rules, "excludeCharacters">
							>
					: Infer<TString, Omit<Rules, "excludeCharacters">>
			: Rules["minChar"] extends number
				? CheckMinRange<TString, Rules["minChar"]> extends false
					? {
							[$internal]?: `The string "${TString}" (${Width<TString>} characters) must contain at least ${Rules["minChar"]} characters.`;
						}
					: Infer<TString, Omit<Rules, "minChar">>
				: Rules["maxChar"] extends number
					? CheckMaxRange<TString, Rules["maxChar"]> extends false
						? {
								[$internal]?: `The string "${TString}" (${Width<TString>} characters) must contain a maximum of ${Rules["maxChar"]} characters.`;
							}
						: Infer<TString, Omit<Rules, "maxChar">>
					: Rules["pattern"] extends string
						? Equal<Extract<TString, Rules["pattern"]>, TString> extends false
							? {
									[$internal]?: `The string "${TString}" must match with the following pattern: "${Rules["pattern"]}".`;
								}
							: Infer<TString, Omit<Rules, "pattern">>
						: Rules["alphanumeric"] extends boolean
							? ContainOnlyAlphanumericOrException<TString> extends false
								? {
										[$internal]?: `The string "${TString}" must contain only alphanumeric characters.`;
									}
								: Infer<TString, Omit<Rules, "alphanumeric">>
							: TString;
