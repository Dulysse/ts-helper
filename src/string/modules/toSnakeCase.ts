import type { IsExactString, ReplaceMap, UnAccent } from "@/string";
import type { SpecialCharMap } from "@/string/utils";

import * as Test from "@/test/local";

Test.Describe(
	"Convert a string to snake_case",
	Test.It<
		ToSnakeCase<"This text will be converted into snake_case">,
		"this_text_will_be_converted_into_snake_case",
		Test.Out.PASS
	>(),
	Test.It<ToSnakeCase<"Hello-World?">, "hello_world", Test.Out.PASS>(),
	Test.It<ToSnakeCase<"hello_world">, "hello_world", Test.Out.PASS>(),
	Test.It<ToSnakeCase<"EÂxs LOL">, "eaxs_lol", Test.Out.PASS>(),
);

declare type _ToSnakeCase<
	TString extends string,
	TResult extends string = "",
> = TString extends `${infer Head}${infer Tail extends string}`
	? _ToSnakeCase<Tail, `${TResult}${Head extends " " ? "_" : Head}`>
	: TResult;

/**
 * - Converts a string to `snake_case`. (This means that spaces are replaced with underscores and all characters are converted to ${@link Lowercase} and are {@link UnAccent}.)
 * @template TString The string to convert to `snake_case`.
 *
 *
 * @example
 * ```tsx
 * import type { Str } from "@dulysse1/ts-helper";
 *
 * type A = Str.ToSnakeCase<"This text will be converted into snake_case">; // "this_text_will_be_converted_into_snake_case"
 * type B = Str.ToSnakeCase<"Hello World">; // "hello_world"
 * type C = Str.ToSnakeCase<"EÂxs LOL">; // "eaxs_lol"
 * ```
 * ---------------------------
 * Do you have any questions about `ToSnakeCase` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type ToSnakeCase<TString extends string> =
	IsExactString<TString> extends true
		? string
		: ReplaceMap<
				Lowercase<UnAccent<_ToSnakeCase<TString>>>,
				{
					"-": "_";
					" ": "_";
				} & SpecialCharMap
			>;
