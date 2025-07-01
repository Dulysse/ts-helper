import type { Or } from "@/operator";
import type { ContainExactString } from "@/string";

import * as Test from "@/test";

Test.Describe(
	"Replace the first iteration of the character with another character",
	Test.It<Replace<"hello", "l", "x">, "hexlo", Test.Out.PASS>(),
	Test.It<Replace<"hello", "l", string>, string, Test.Out.PASS>(),
	Test.It<Replace<string, "b", "a">, string, Test.Out.PASS>(),
);

/**
 * - Replace the first iteration of the `From` character with the `To` character in the `TString` string type.
 *
 * @template TString - The string type in which to perform the replacement.
 * @template From - The character or substring to be replaced.
 * @template To - The character or substring to replace `From` with.
 * @example
 * ```tsx
 * import type { Str } from "@dulysse1/ts-helper";
 *
 * type A = Str.Replace<"Hello world!", "l", "x">; // "Hexlo world!"
 * ```
 * ---------------------------
 * Do you have any questions about `Replace` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Replace<
	TString extends string,
	From extends string,
	To extends string,
> =
	ContainExactString<TString> extends true
		? string
		: Or<ContainExactString<From>, ContainExactString<To>> extends true
			? string
			: TString extends `${infer Before}${From}${infer After}`
				? `${Before}${To}${After}`
				: TString;
