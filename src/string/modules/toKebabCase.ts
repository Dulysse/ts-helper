import type { Equal, OrAll } from "@/operator";
import type {
	ContainExactString,
	IsUpperCase,
	Split,
	Trim,
	IsLowerCase,
	IsDigit,
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
							"letters",
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

/**
 * - Converts a string to `Kebab_case`. (This means that spaces are replaced with underscores and all characters are converted to ${@link Lowercase} and are {@link UnAccent}.)
 * @template TString The string to convert to `Kebab_case`.
 *
 *
 * @example
 * ```tsx
 * import type { Str } from "@dulysse1/ts-helper";
 *
 * // Examples:
 * type A = Str.ToKebabCase<"This text will be converted into kebab-case">; // "this-text-will-be-converted-into-kebab-case"
 * type B = Str.ToKebabCase<"Hello World">; // "hello-world"
 * type C = Str.ToKebabCase<"DEMO">; // "demo"
 * 
 * // Typescript implementation example:
 * const toKebabCase = (str: string) => str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join("-");
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
								? Lowercase<Trim<TString>>
								: Trim<TString>
						>
					>
				>
			>;
