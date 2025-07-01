import type { ContainExactString, Split } from "@/string";
import type { Length } from "@/array";

import { Test } from "@/test";

Test.Describe(
	"Get the length of a string type",
	Test.It<Width<"hello">, 5, typeof Test.Out.PASS>(),
	Test.It<Width<`demo ${string} `>, number, typeof Test.Out.PASS>(),
	Test.It<Width<string>, number, typeof Test.Out.PASS>(),
);

/**
 * - Get the length of a string type `TString`
 *
 * @template TString The string type to get the length of
 * @example
 * ```tsx
 * import type { Str } from "@dulysse1/ts-helper";
 *
 * type A = Str.Width<"Hello world!">; // 12
 * ```
 * ---------------------------
 * Do you have any questions about `Width` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Width<TString extends string> =
	ContainExactString<TString> extends true ? number : Length<Split<TString>>;
