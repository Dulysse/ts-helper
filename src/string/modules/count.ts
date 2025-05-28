import type { Increment } from "@/numeric";
import type { Or } from "@/operator";
import type { IsExactString } from "@/string";

/**
 * - Count the number of occurrences of `TSearch` in `TString`
 *
 * @template TString The string to search in
 * @template TSearch The string to search for
 *
 * @example
 * ```tsx
 * import type { Str } from "@dulysse1/ts-helper";
 *
 * type A = Str.Count<"Hello ", "e">; // 1
 * type B = Str.Count<"Hello ", "x">; // 0
 * type C = Str.Count<"Hello ", string>; // number
 * type D = Str.Count<"Hello ", "Hello">; // 1
 * type E = Str.Count<"Hello Hello", "Hello">; // 2
 * ```
 * ---------------------------
 * Do you have any questions about `Count` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Count<TString extends string, TSearch extends string> =
	Or<IsExactString<TString>, IsExactString<TSearch>> extends true
		? number
		: TString extends `${infer Start}${TSearch}${infer End}`
			? Increment<Count<`${Start}${End}`, TSearch>>
			: TString extends string
				? 0
				: number;
