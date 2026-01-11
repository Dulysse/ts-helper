import type { Equal, OrAll } from "@/operator";
import type {
	ContainExactString,
	IsUpperCase,
	Split,
	Trim,
	IsLowerCase,
	IsDigit,
	ReplaceMap,
	AsciiRange,
} from "@/string";

import { Test } from "@/test";

Test.Describe(
	"Convert a string to kebab-case",
	Test.It<
		ToKebabCase<"This text will be converted into kebab-case">,
		"this-text-will-be-converted-into-kebab-case",
		typeof Test.Out.PASS
	>(),
	Test.It<ToKebabCase<"Hello World">, "hello-world", typeof Test.Out.PASS>(),
	Test.It<
		ToKebabCase<"some-mixed_string With spaces_underscores-and-hyphens">,
		"some-mixed-string-with-spaces-underscores-and-hyphens",
		typeof Test.Out.PASS
	>(),
	Test.It<ToKebabCase<"DEMO">, "demo", typeof Test.Out.PASS>(),
	Test.It<
		ToKebabCase<"IAmEditingSomeXMLAndHTML">,
		"i-am-editing-some-xml-and-html",
		typeof Test.Out.PASS
	>(),
	Test.It<
		ToKebabCase<"IAmEdiét22222ingAAA">,
		"i-am-edi-t22222-ing-aaa",
		typeof Test.Out.PASS
	>(),
);

declare type _IsSkipKebabifyChar<TChar extends string> = OrAll<
	[Equal<TChar, " ">, Equal<TChar, "_">, Equal<TChar, "-">]
>;

declare type _CharKind<TChar extends string> =
	_IsSkipKebabifyChar<TChar> extends true
		? "sep"
		: IsDigit<TChar> extends true
			? "digit"
			: IsUpperCase<TChar> extends true
				? "upper"
				: IsLowerCase<TChar> extends true
					? "lower"
					: "other";

declare type _AppendWord<
	TResult extends string,
	TWord extends string,
> = TWord extends ""
	? TResult
	: TResult extends ""
		? TWord
		: `${TResult}-${TWord}`;

declare type _PeekKind<TArray extends string[]> = TArray extends [
	infer Next extends string,
	...infer _Rest extends string[],
]
	? _CharKind<Next>
	: null;

declare type _ToKebabCase<
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
		? _ToKebabCase<Tail, _AppendWord<TResult, TCurrentWord>, "", null, null>
		: _CharKind<Head> extends "digit"
			? TCurrentKind extends "digits"
				? _ToKebabCase<
						Tail,
						TResult,
						`${TCurrentWord}${Head}`,
						"digits",
						"digit"
					>
				: TCurrentKind extends "letters"
					? _ToKebabCase<
							Tail,
							TResult,
							`${TCurrentWord}${Head}`,
							"digits",
							"digit"
						>
					: _ToKebabCase<Tail, TResult, Head, "digits", "digit">
			: _CharKind<Head> extends "lower"
				? TCurrentKind extends "digits"
					? _ToKebabCase<
							Tail,
							_AppendWord<TResult, TCurrentWord>,
							Head,
							"letters",
							"lower"
						>
					: _ToKebabCase<
							Tail,
							TResult,
							`${TCurrentWord}${Head}`,
							"letters",
							"lower"
						>
				: // "upper" or "other"
					_CharKind<Head> extends "upper"
					? TCurrentKind extends "digits"
						? _ToKebabCase<
								Tail,
								_AppendWord<TResult, TCurrentWord>,
								Head,
								"letters",
								"upper"
							>
						: TPrevKind extends "lower" | "digit"
							? _ToKebabCase<
									Tail,
									_AppendWord<TResult, TCurrentWord>,
									Head,
									"letters",
									"upper"
								>
							: TPrevKind extends "upper"
								? _PeekKind<Tail> extends "lower"
									? _ToKebabCase<
											Tail,
											_AppendWord<TResult, TCurrentWord>,
											Head,
											"letters",
											"upper"
										>
									: _ToKebabCase<
											Tail,
											TResult,
											`${TCurrentWord}${Head}`,
											TCurrentKind extends null ? "letters" : TCurrentKind,
											"upper"
										>
								: _ToKebabCase<
										Tail,
										TResult,
										`${TCurrentWord}${Head}`,
										TCurrentKind extends null ? "letters" : TCurrentKind,
										"upper"
									>
					: _ToKebabCase<Tail, TResult, TCurrentWord, TCurrentKind, "other">
	: TCurrentWord extends ""
		? TResult
		: _AppendWord<TResult, TCurrentWord>;

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
 * Converts a string to `Kebab_case`.
 * - *I follow [https://labex.io/tutorials/convert-string-to-kebab-case-with-javascript-28653](https://labex.io/tutorials/convert-string-to-kebab-case-with-javascript-28653) rules, you can found an example of implementation there and a Typescript implementation example below.*
 * @template TString The string to convert to `Kebab_case`.
 *
 *
 * @example
 * ```tsx
 * import type { Str } from "@dulysse1/ts-helper";
 *
 * // Typescript implementation example:
 * const toKebabCase = <T extends string>(str: T): Str.ToKebabCase<T> => str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join("-") as Str.ToKebabCase<T>;
 * 
 * // More examples:
 * type A = Str.ToKebabCase<"This text will be converted into kebab-case">; // "this-text-will-be-converted-into-kebab-case"
 * type B = Str.ToKebabCase<"Hello World">; // "hello-world"
 * type C = Str.ToKebabCase<"DEMO">; // "demo"
 * ```
 * ---------------------------
 * Do you have any questions about `ToKebabCase` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type ToKebabCase<TString extends string> =
	ContainExactString<TString> extends true
		? string
		: Lowercase<
				_ToKebabCase<
					Split<
						Uncapitalize<
							IsUpperCase<TString> extends true
								? Lowercase<Trim<FilterAllowedChars<TString>>>
								: Trim<FilterAllowedChars<TString>>
						>
					>
				>
			>;
