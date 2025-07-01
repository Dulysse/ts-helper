import type { ContainExactString, Replace } from "@/string";
import type { Equal } from "@/operator";
import type { IsUnion } from "@/union";

import { Test } from "@/test";

Test.Describe(
	"Replace all iteration of the character with another character",
	Test.It<ReplaceAll<"hello", "l", "x">, "hexxo", typeof Test.Out.PASS>(),
	Test.It<ReplaceAll<"hello", "l", string>, string, typeof Test.Out.PASS>(),
	Test.It<ReplaceAll<string, "b", "a">, string, typeof Test.Out.PASS>(),
);

/**
 * - Replace all iteration of the `From` character with the `To` character in the `TString` string type.
 *
 * @template TString - The string type to perform the replacement on.
 * @template From - The character to replace.
 * @template To - The character to replace with.
 * @example
 * ```tsx
 * import type { Str } from "@dulysse1/ts-helper";
 *
 * type A = Str.ReplaceAll<"Hello world!", "l", "x">; // "Hexxo worxd!"
 * ```
 * ---------------------------
 * Do you have any questions about `ReplaceAll` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type ReplaceAll<
	TString extends string,
	From extends string,
	To extends string,
> =
	ContainExactString<TString> extends true
		? string
		: IsUnion<TString> extends true
			? TString extends Replace<TString, From, To>
				? TString
				: ReplaceAll<Replace<TString, From, To>, From, To>
			: Equal<Replace<TString, From, To>, TString> extends true
				? TString
				: ReplaceAll<Replace<TString, From, To>, From, To>;
