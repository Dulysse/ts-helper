import type { IsNegative, ParseInt } from "@/numeric";
import type { PreviousPositive } from "@/numeric/modules/decrement";
import type { IsExactString } from "@/string";

declare type _Repeat<
	TString extends string,
	TCount extends number,
	Result extends string = "",
> = TCount extends 0
	? Result
	: _Repeat<
			TString,
			TCount extends 1 ? 0 : PreviousPositive<TCount>,
			`${Result}${TString}`
		>;

/**
 * - Repeat a string `TString` `TCount` times
 *
 * @template TString The string to repeat
 * @template TCount The number of times to repeat the string
 *
 * @example
 * ```tsx
 * import type { Str } from "@dulysse1/ts-helper";
 *
 * type A = Str.Repeat<"Hello ", 3>; // "Hello Hello Hello "
 * ```
 * ---------------------------
 * Do you have any questions about `Repeat` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Repeat<TString extends string, TCount extends number> =
	IsNegative<TCount> extends true
		? never
		: IsExactString<TString> extends true
			? string
			: _Repeat<TString, ParseInt<`${TCount}`>>;
