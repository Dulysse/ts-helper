import type { IsEqual, OrAll } from "@/operator";
import type {
	ContainExactString,
	Split,
	Trim,
	IsUpperCase,
	IsLowerCase,
	IsDigit,
	ReplaceMap,
	AsciiRange,
} from "@/string";
import { stringConverterRegex } from "@/string/utils";

declare type _IsSkipCamelifyChar<TChar extends string> = OrAll<
	[IsEqual<TChar, " ">, IsEqual<TChar, "_">, IsEqual<TChar, "-">]
>;

declare type _CharKind<TChar extends string> =
	_IsSkipCamelifyChar<TChar> extends true
		? "sep"
		: IsDigit<TChar> extends true
			? "digit"
			: IsUpperCase<TChar> extends true
				? "upper"
				: IsLowerCase<TChar> extends true
					? "lower"
					: "other";

declare type _AppendCamelWord<
	TResult extends string,
	TWord extends string,
> = TWord extends ""
	? TResult
	: TResult extends ""
		? Capitalize<Lowercase<TWord>>
		: `${TResult}${Capitalize<Lowercase<TWord>>}`;

declare type _PeekKind<TArray extends string[]> = TArray extends [
	infer Next extends string,
	...infer _Rest extends string[],
]
	? _CharKind<Next>
	: null;

declare type _ToCamelCase<
	TStringAsArray extends string[],
	TResult extends string = "",
	TCurrentWord extends string = "",
	TCurrentKind extends "letters" | "digits" | null = null,
	TPrevKind extends "upper" | "lower" | "digit" | "other" | null = null,
> = TStringAsArray extends [
	infer Head extends string,
	...infer Tail extends string[],
]
	? _CharKind<Head> extends "sep"
		? _ToCamelCase<
				Tail,
				_AppendCamelWord<TResult, TCurrentWord>,
				"",
				null,
				null
			>
		: _CharKind<Head> extends "digit"
			? TCurrentKind extends "digits"
				? _ToCamelCase<
						Tail,
						TResult,
						`${TCurrentWord}${Head}`,
						"digits",
						"digit"
					>
				: TCurrentKind extends "letters"
					? _ToCamelCase<
							Tail,
							TResult,
							`${TCurrentWord}${Head}`,
							"digits",
							"digit"
						>
					: _ToCamelCase<Tail, TResult, Head, "digits", "digit">
			: _CharKind<Head> extends "lower"
				? TCurrentKind extends "digits"
					? _ToCamelCase<
							Tail,
							_AppendCamelWord<TResult, TCurrentWord>,
							Head,
							"letters",
							"lower"
						>
					: _ToCamelCase<
							Tail,
							TResult,
							`${TCurrentWord}${Head}`,
							"letters",
							"lower"
						>
				: _CharKind<Head> extends "upper"
					? TCurrentKind extends "digits"
						? _ToCamelCase<
								Tail,
								_AppendCamelWord<TResult, TCurrentWord>,
								Head,
								"letters",
								"upper"
							>
						: TPrevKind extends "lower" | "digit"
							? _ToCamelCase<
									Tail,
									_AppendCamelWord<TResult, TCurrentWord>,
									Head,
									"letters",
									"upper"
								>
							: TPrevKind extends "upper"
								? _PeekKind<Tail> extends "lower"
									? _ToCamelCase<
											Tail,
											_AppendCamelWord<TResult, TCurrentWord>,
											Head,
											"letters",
											"upper"
										>
									: _ToCamelCase<
											Tail,
											TResult,
											`${TCurrentWord}${Head}`,
											TCurrentKind extends null ? "letters" : TCurrentKind,
											"upper"
										>
								: _ToCamelCase<
										Tail,
										TResult,
										`${TCurrentWord}${Head}`,
										TCurrentKind extends null ? "letters" : TCurrentKind,
										"upper"
									>
					: _ToCamelCase<
							Tail,
							_AppendCamelWord<TResult, TCurrentWord>,
							"",
							null,
							"other"
						>
	: TCurrentWord extends ""
		? TResult
		: _AppendCamelWord<TResult, TCurrentWord>;

declare type FilterAllowedChars<TString extends string> = ReplaceMap<
	TString,
	{
		[key in [
			...AsciiRange<0, 47>,
			...AsciiRange<58, 64>,
			...AsciiRange<91, 96>,
			...AsciiRange<123, 255>,
		][number]]: " ";
	}
>;

/**
 * Converts a string to `camelCase`.
 * - *I follow [https://labex.io/tutorials/convert-strings-to-camelcase-with-javascript-28648](https://labex.io/tutorials/convert-strings-to-camelcase-with-javascript-28648) rules*
 * @regex /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
 * @template TString The string to convert to `camelCase`.
 *
 * @example
 * ```tsx
 * import type { Str } from "@dulysse1/ts-helper";
 *
 * type A = Str.ToCamelCase<"This text will be converted into camel Case">; // "thisTextWillBeConvertedIntoCamelCase"
 * type B = Str.ToCamelCase<"Hello World">; // "helloWorld"
 * type C = Str.ToCamelCase<"222">; // "222"
 * type D = Str.ToCamelCase<"some-javascript-property2">; // "someJavascriptProperty2"
 * ```
 * ---------------------------
 * Do you have any questions about `ToCamelCase` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type ToCamelCase<TString extends string> =
	ContainExactString<TString> extends true
		? string
		: Uncapitalize<_ToCamelCase<Split<Trim<FilterAllowedChars<TString>>>>>;

/**
 * Converts a string to `camelCase`.
 * - *I follow [https://labex.io/tutorials/convert-strings-to-camelcase-with-javascript-28648](https://labex.io/tutorials/convert-strings-to-camelcase-with-javascript-28648) rules*
 * @regex /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
 * @param text The string to convert to `camelCase`.
 *
 * @example
 * ```tsx
 * import { toCamelCase } from "@dulysse1/ts-helper/string";
 *
 * // More examples:
 * const a = toCamelCase("This text will be converted into camel Case"); // "thisTextWillBeConvertedIntoCamelCase"
 * const b = toCamelCase("Hello World"); // "helloWorld"
 * const c = toCamelCase("222"); // "222"
 * const d = toCamelCase("some-javascript-property2"); // "someJavascriptProperty2"
 * ```
 * ---------------------------
 * Do you have any questions about `toCamelCase` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export const toCamelCase = <T extends string>(text: T): ToCamelCase<T> => {
	const camelCaseString =
		text
			?.match(stringConverterRegex)
			?.map(
				word => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase(),
			)
			?.join("") ?? "";
	return (camelCaseString.slice(0, 1).toLowerCase() +
		camelCaseString.slice(1)) as ToCamelCase<T>;
};
