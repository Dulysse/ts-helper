import type { ContainExactString } from "@/string";

import { Test } from "@/test";

Test.Describe(
	"Reverse a string type",
	Test.It<Reversed<"hello">, "olleh", typeof Test.Out.PASS>(),
	Test.It<Reversed<`demo ${string}`>, string, typeof Test.Out.PASS>(),
	Test.It<Reversed<string>, string, typeof Test.Out.PASS>(),
);

declare type _Reversed<
	TString extends string,
	TResult extends string = "",
> = TString extends `${infer Head}${infer Tail}`
	? _Reversed<Tail, `${Head}${TResult}`>
	: TResult;

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
