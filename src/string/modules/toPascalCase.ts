import type { IsExactString, UnAccent, Split, ReplaceMap } from "@/string";
import type { SpecialCharMap } from "@/string/utils";

import * as Test from "@/test";

Test.Describe(
	"Convert a string to Pascal Case",
	Test.It<
		ToPascalCase<"This text will be converted into PascalCase">,
		"ThisTextWillBeConvertedIntoPascalcase",
		Test.Out.PASS
	>(),
	Test.It<ToPascalCase<"Hello Wo-rld">, "HelloWorld", Test.Out.PASS>(),
	Test.It<ToPascalCase<"hello_world?">, "Helloworld", Test.Out.PASS>(),
	Test.It<ToPascalCase<"EÂxs LOL">, "EaxsLol", Test.Out.PASS>(),
);

declare type _ToPascalCase<
	TStringAsArray extends string[],
	TResult extends string = "",
> = TStringAsArray extends [
	infer Head extends string,
	...infer Tail extends string[],
]
	? _ToPascalCase<Tail, `${TResult}${Capitalize<Lowercase<Head>>}`>
	: TResult;

/**
 * - Converts a string to `PascalCase`. (This means that all words are in lower case and have their 1st letter capitalized, spaces are omitted.)
 *
 * @template TString The string to convert to `PascalCase`.
 *
 * @example
 * ```tsx
 * import type { Str } from "@dulysse1/ts-helper";
 *
 * type A = Str.PascalCase<"This text will be converted into Pascal Case">; // "ThisTextWillBeConvertedIntoPascalCase"
 * type B = Str.PascalCase<"Hello World">; // "HelloWorld"
 * type C = Str.PascalCase<"EÂxs LOL">; // "EaxsLol"
 * ```
 * ---------------------------
 * Do you have any questions about `ToPascalCase` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type ToPascalCase<TString extends string> =
	IsExactString<TString> extends true
		? string
		: ReplaceMap<
				UnAccent<_ToPascalCase<Split<TString, " ">>>,
				{
					"-": "";
					_: "";
				} & SpecialCharMap
			>;
