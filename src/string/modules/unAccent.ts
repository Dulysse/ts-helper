import type { IsExactString, ReplaceMap } from "@/string";

import * as Test from "@/test/local";

Test.Describe(
	"Convert a string to its unaccented version",
	Test.It<UnAccent<"Café">, "Cafe", Test.Out.PASS>(),
	Test.It<UnAccent<"Déjà vu">, "Deja vu", Test.Out.PASS>(),
	Test.It<UnAccent<"À bientôt">, "A bientot", Test.Out.PASS>(),
	Test.It<UnAccent<"Crème brûlée">, "Creme brulee", Test.Out.PASS>(),
);

/**
 * A map of accented characters to their unaccented counterparts.
 */
declare type AccentMap = {
	à: "a";
	â: "a";
	ä: "a";
	ç: "c";
	é: "e";
	è: "e";
	ê: "e";
	ë: "e";
	î: "i";
	ï: "i";
	ô: "o";
	ö: "o";
	ù: "u";
	û: "u";
	ü: "u";
	ÿ: "y";
	À: "A";
	Â: "A";
	Ä: "A";
	Ç: "C";
	É: "E";
	È: "E";
	Ê: "E";
	Ë: "E";
	Î: "I";
	Ï: "I";
	Ô: "O";
	Ö: "O";
	Ù: "U";
	Û: "U";
	Ü: "U";
	Ÿ: "Y";
};

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
