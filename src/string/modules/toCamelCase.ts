import type { Equal } from "@/operator";
import type { ContainExactString, Split, Trim } from "@/string";

import { Test } from "@/test";

Test.Describe(
	"Convert a string to camelCase",
	Test.It<
		ToCamelCase<"This text will be converted into camelCase">,
		"thisTextWillBeConvertedIntoCamelCase",
		typeof Test.Out.PASS
	>(),
	Test.It<ToCamelCase<"Hello Wo-rld?">, "helloWo-rld?", typeof Test.Out.PASS>(),
	Test.It<ToCamelCase<"22222">, "22222", typeof Test.Out.PASS>(),
	Test.It<ToCamelCase<"EÂxs">, "eÂxs", typeof Test.Out.PASS>(),
	Test.It<
		ToCamelCase<"  he  l lo    Wo    rld     ">,
		"heLLoWoRld",
		typeof Test.Out.PASS
	>(),
);

declare type _ToCamelCase<
	TStringAsArray extends string[],
	TResult extends string = "",
> = TStringAsArray extends [
	infer Head extends string,
	...infer Tail extends string[],
]
	? Equal<Head, " "> extends true
		? Tail extends [
				infer NextTail extends string,
				...infer RestTail extends string[],
			]
			? Equal<NextTail, " "> extends true
				? _ToCamelCase<Tail, TResult>
				: _ToCamelCase<RestTail, `${TResult}${Capitalize<NextTail>}`>
			: _ToCamelCase<Tail, `${TResult}${Head}`>
		: _ToCamelCase<Tail, `${TResult}${Head}`>
	: TResult;

/**
 * - Converts a string to `camelCase`. (This means that all words are in lower case and have their 1st letter capitalized, spaces are omitted, except for the 1st word which is all lowercase.)
 * @template TString The string to convert to `camelCase`.
 *
 * @example
 * ```tsx
 * import type { Str } from "@dulysse1/ts-helper";
 *
 * type A = Str.ToCamelCase<"This text will be converted into camel Case">; // "thisTextWillBeConvertedIntoCamelCase"
 * type B = Str.ToCamelCase<"Hello World">; // "helloWorld"
 * type C = Str.ToCamelCase<"222">; // "222"
 * type D = Str.ToCamelCase<"EÂxs">; // "eÂxs"
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
		: Uncapitalize<_ToCamelCase<Split<Trim<TString>>>>;
