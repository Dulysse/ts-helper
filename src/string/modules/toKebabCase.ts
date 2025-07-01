import type { IsExactString, ReplaceMap, UnAccent } from "@/string";
import type { SpecialCharMap } from "@/string/utils";

import * as Test from "@/test";

Test.Describe(
	"Convert a string to kebab-case",
	Test.It<
		ToKebabCase<"This text will be converted into kebab-case">,
		"this-text-will-be-converted-into-kebab-case",
		Test.Out.PASS
	>(),
	Test.It<ToKebabCase<"Hello World">, "hello-world", Test.Out.PASS>(),
	Test.It<ToKebabCase<"hello_world">, "hello-world", Test.Out.PASS>(),
	Test.It<ToKebabCase<"EÂxs LOL">, "eaxs-lol", Test.Out.PASS>(),
);

declare type _ToKebabCase<
	TString extends string,
	TResult extends string = "",
> = TString extends `${infer Head}${infer Tail extends string}`
	? _ToKebabCase<Tail, `${TResult}${Head extends " " ? "-" : Head}`>
	: TResult;

/**
 * - Converts a string to `Kebab_case`. (This means that spaces are replaced with underscores and all characters are converted to ${@link Lowercase} and are {@link UnAccent}.)
 * @template TString The string to convert to `Kebab_case`.
 *
 *
 * @example
 * ```tsx
 * import type { Str } from "@dulysse1/ts-helper";
 *
 * type A = Str.ToKebabCase<"This text will be converted into Kebab_case">; // "this_text_will_be_converted_into_Kebab_case"
 * type B = Str.ToKebabCase<"Hello World">; // "hello_world"
 * type C = Str.ToKebabCase<"EÂxs LOL">; // "eaxs_lol"
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
	IsExactString<TString> extends true
		? string
		: ReplaceMap<
				Lowercase<UnAccent<_ToKebabCase<TString>>>,
				{
					_: "-";
					" ": "-";
				} & SpecialCharMap
			>;
