import type { IsExactString } from "@/string";

/**
 * #### Replace the first iteration of the `From` character with the `To` character in the `TString` string type.
 * ---------------------------
 * @example
 * ```tsx
 * import type { Str } from "@dulysse1/ts-helper";
 *
 * type A = Str.Replace<"Hello world!", "l", "x">; // "Hexlo world!"
 * ```
 * ---------------------------
 * Do you have any questions about {@link Replace} usage ?
 * ### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Replace<
	TString extends string,
	From extends string,
	To extends string,
> = IsExactString<TString> extends true
	? string
	: TString extends `${infer Before}${From}${infer After}`
	  ? `${Before}${To}${After}`
	  : TString;
