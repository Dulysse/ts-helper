import type { IsExactString, ReplaceMap } from "@/string";
import type { AccentMap } from "@/string/utils";

import { Test } from "@/test";

Test.Describe(
	"Convert a string to its unaccented version",
	Test.It<UnAccent<"Café">, "Cafe", typeof Test.Out.PASS>(),
	Test.It<UnAccent<"Déjà vu">, "Deja vu", typeof Test.Out.PASS>(),
	Test.It<UnAccent<"À bientôt">, "A bientot", typeof Test.Out.PASS>(),
	Test.It<UnAccent<"Crème brûlée">, "Creme brulee", typeof Test.Out.PASS>(),
);

/**
 * - Converts a string to its unaccented version by replacing accented characters with their non-accented counterparts.
 * @template TString The string to convert to its unaccented version.
 *
 * @example
 * ```tsx
 * import type { Str } from "@dulysse1/ts-helper";
 *
 * type A = Str.UnAccent<"Café">; // "Cafe"
 * type B = Str.UnAccent<"Déjà vu">; // "Deja vu"
 * type C = Str.UnAccent<"À bientôt">; // "A bientot"
 * type D = Str.UnAccent<"Crème brûlée">; // "Creme brulee"
 * ```
 * ---------------------------
 * Do you have any questions about `UnAccent` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type UnAccent<TString extends string> =
	IsExactString<TString> extends true ? string : ReplaceMap<TString, AccentMap>;
