import type { Equal } from "@/operator";
import type { IsExactString } from "@/string";
import type { TDefaultStringSeparator } from "../utils";

declare type _Split<
	TString extends string,
	TSeparator extends string = TDefaultStringSeparator,
	Res extends string[] = [],
> = IsExactString<TString> extends true
	? string[]
	: Equal<TString, ""> extends true
	  ? Res
	  : TString extends `${infer Start}${TSeparator}${infer Next}`
	    ? _Split<Next, TSeparator, [...Res, Start]>
	    : string[];

/**
 * #### Split a type `TString` to an array for each `TSeparator` string apparition
 * ---------------------------
 * @example
 * ```tsx
 * import type { Str } from "@dulysse1/ts-helper";
 *
 * type A = Str.Split<"Hello">; // ["H", "e", "l", "l", "o"]
 * ```
 * ---------------------------
 * Do you have any questions about {@link Split} usage ?
 * ### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Split<
	TString extends string,
	TSeparator extends string = TDefaultStringSeparator,
> = _Split<TString, TSeparator>;
