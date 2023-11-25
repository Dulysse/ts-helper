import type { Equal } from "@/operator";

declare type _Split<
	TString extends string,
	TSeparator extends string = "",
	Res extends string[] = [],
> = Equal<TString, string> extends true ? string[] : TSeparator & Res;
/**
 * #### Split a type `TString` to an array for each `TSeparator` string apparition
 * ---------------------------
 * @example
 * ```tsx
 * import type { Str } from "@dulysse1/ts-helper";
 *
 * type StringSplit = Str.Split<"Hello">; // ["H", "e", "l", "l", "o"]
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
	TSeparator extends string = "",
> = _Split<TString, TSeparator>;
