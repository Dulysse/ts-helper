import type { IsExactString, Replace } from "@/string";
import type { Equal } from "@/operator";
import type { IsUnion } from "@/union";

/**
 * - Replace all iteration of the `From` character with the `To` character in the `TString` string type.
 * ---------------------------
 * @example
 * ```tsx
 * import type { Str } from "@dulysse1/ts-helper";
 *
 * type A = Str.ReplaceAll<"Hello world!", "l", "x">; // "Hexxo worxd!"
 * ```
 * ---------------------------
 * Do you have any questions about {@link ReplaceAll} usage ?
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
	IsExactString<TString> extends true
		? string
		: IsUnion<TString> extends true
			? TString extends Replace<TString, From, To>
				? TString
				: ReplaceAll<Replace<TString, From, To>, From, To>
			: Equal<Replace<TString, From, To>, TString> extends true
				? TString
				: ReplaceAll<Replace<TString, From, To>, From, To>;
