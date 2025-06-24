import type { ContainExactString } from "@/string";

import * as Test from "@/test/local";

Test.Describe(
	"Reverse a string type",
	Test.It<Reversed<"hello">, "olleh", Test.Out.PASS>(),
	Test.It<Reversed<`demo ${string}`>, string, Test.Out.PASS>(),
	Test.It<Reversed<string>, string, Test.Out.PASS>(),
);

declare type _Reversed<
	TString extends string,
	Res extends string = "",
> = TString extends `${infer First}${infer Next}`
	? _Reversed<Next, `${First}${Res}`>
	: Res;

/**
 * - Reverse a string type `TString` to produce a new string type with the characters in reverse order.
 *
 * @template T - The string to reverse.
 *
 * @example
 * ```tsx
 * import type { Str } from "@dulysse1/ts-helper";
 *
 * type Reversed = Str.Reversed<'hello'>; // 'olleh'
 * ```
 *
 * ---------------------------
 * Do you have any questions about `Reversed` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Reversed<TString extends string> = TString extends string
	? ContainExactString<TString> extends true
		? string
		: _Reversed<TString>
	: never;
