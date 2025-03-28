import type { Range } from "@/numeric";
import type { Equal } from "@/operator";

declare type Digit = Range<0, 9>[number];
declare type _WordChar =
	| Digit
	| "a"
	| "b"
	| "c"
	| "d"
	| "e"
	| "f"
	| "g"
	| "h"
	| "i"
	| "j"
	| "k"
	| "l"
	| "m"
	| "n"
	| "o"
	| "p"
	| "q"
	| "r"
	| "s"
	| "t"
	| "u"
	| "v"
	| "w"
	| "x"
	| "y"
	| "z"
	| "A"
	| "B"
	| "C"
	| "D"
	| "E"
	| "F"
	| "G"
	| "H"
	| "I"
	| "J"
	| "K"
	| "L"
	| "M"
	| "N"
	| "O"
	| "P"
	| "Q"
	| "R"
	| "S"
	| "T"
	| "U"
	| "V"
	| "W"
	| "X"
	| "Y"
	| "Z"
	| "_";
declare type _LiteralChar = Exclude<
	string,
	| "\\"
	| "/"
	| "^"
	| "$"
	| "."
	| "|"
	| "?"
	| "*"
	| "+"
	| "("
	| ")"
	| "["
	| "]"
	| "{"
	| "}"
>;

declare type RegexError<TMessage extends string> = { error: TMessage };

declare type _ParseRegex<TString extends string, Result extends string = ""> =
	Equal<TString, string> extends true
		? string
		: TString extends ""
			? Result
			: TString extends `(${infer TODO})`
				? TODO
				: TString;

type _Result = ParseRegex<"/demo/">;
//     ^?

/**
 * - Parse a `TString` as `regex` to get output string
 * ---------------------------
 * @example
 * ```tsx
 * import type { Str } from "@dulysse1/ts-helper";
 *
 * type A = Str.ParseRegex<"/(unterminated_group/">; // error
 * type B = Str.ParseRegex<"/foo/">; // `${string}foo${string}`
 * type C = Str.ParseRegex<"/^foo/">; // `foo${string}`
 * type D = Str.ParseRegex<"/foo$/">; // `${string}foo`
 * type E = Str.ParseRegex<"/^foo.*bar$/">; // `foo${string}bar`
 * type F = Str.ParseRegex<"/\\d/">; // `${string}${0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}${string}`

 * type G = Str.ParseRegex<"/^a\\d?b$/">; // `a${0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | ""}b`
 * ```
 * ---------------------------
 * Do you have any questions about {@link ParseRegex} usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type ParseRegex<TString extends string> = TString extends string
	? Equal<TString, string> extends true
		? string
		: TString extends `/${infer Pattern}/`
			? _ParseRegex<Pattern>
			: RegexError<"Regex pattern must be enclosed in /">
	: RegexError<"Regex pattern must type string">;
