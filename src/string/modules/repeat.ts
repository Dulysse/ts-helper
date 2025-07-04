import type { IsNegative, ParseInt } from "@/numeric";
import type { PreviousPositive } from "@/numeric/modules/decrement";
import type { IsExactString } from "@/string";

import { Test } from "@/test";

Test.Describe(
	"Repeat a string an amount of time",
	Test.It<Repeat<"hello", -1>, never, typeof Test.Out.PASS>(),
	Test.It<Repeat<string, 1>, string, typeof Test.Out.PASS>(),
	Test.It<
		Repeat<`hello${string}`, 3>,
		`hello${string}hello${string}hello${string}`,
		typeof Test.Out.PASS
	>(),
	Test.It<Repeat<"hello ", 2.2>, "hello hello ", typeof Test.Out.PASS>(),
);

declare type _Repeat<
	TString extends string,
	TCount extends number,
	TResult extends string = "",
> = TCount extends 0
	? TResult
	: _Repeat<
			TString,
			TCount extends 1 ? 0 : PreviousPositive<TCount>,
			`${TResult}${TString}`
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
