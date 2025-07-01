import type { IsExactString } from "@/string";

import * as Test from "@/test";

Test.Describe(
	"Replace characters in a string based on a mapping object",
	Test.It<
		ReplaceMap<"Hello World", { H: "J"; o: "0" }>,
		"Jell0 W0rld",
		Test.Out.PASS
	>(),
	Test.It<
		ReplaceMap<"This is a test", { T: "7"; s: "5" }>,
		"7hi5 i5 a te5t",
		Test.Out.PASS
	>(),
	Test.It<
		ReplaceMap<"Hello World", { H: "J"; o: "0"; l: "1" }>,
		"Je110 W0r1d",
		Test.Out.PASS
	>(),
);

declare type _ReplaceMap<
	TString extends string,
	TMap extends Record<PropertyKey, string>,
	TResult extends string = "",
> = TString extends `${infer Head}${infer Tail extends string}`
	? _ReplaceMap<
			Tail,
			TMap,
			`${TResult}${Head extends keyof TMap ? TMap[Head] : Head}`
		>
	: TResult;

/**
 * - Replaces all occurrences of characters in a string based on a mapping object.
 * @template TString The string to perform the replacements on.
 * @template TMap The mapping object where keys are characters to be replaced and values are the characters to replace them with.
 *
 * @example
 * ```tsx
 * import type { Str } from "@dulysse1/ts-helper";
 *
 * type A = Str.ReplaceMap<"Hello World", { H: "J", o: "0" }>; // "Jell0 W0rld"
 * type B = Str.ReplaceMap<"This is a test", { T: "7", s: "5" }>; // "7hi5 i5 a 7e5t"
 *
 * ```
 * ---------------------------
 * Do you have any questions about `ReplaceMap` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type ReplaceMap<
	TString extends string,
	TMap extends Record<PropertyKey, string>,
> = IsExactString<TString> extends true ? string : _ReplaceMap<TString, TMap>;
