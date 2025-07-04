import type { Equal } from "@/operator";
import type { ContainExactString } from "@/string";
import type { TDefaultStringSeparator } from "../utils";

import { Test } from "@/test";

Test.Describe(
	"Split a type to an array for each string characters apparition",
	Test.It<Split<"hello">, ["h", "e", "l", "l", "o"], typeof Test.Out.PASS>(),
	Test.It<Split<`demo ${string}`>, string[], typeof Test.Out.PASS>(),
	Test.It<Split<string>, string[], typeof Test.Out.PASS>(),
);

declare type _Split<
	TString extends string,
	TSeparator extends string = TDefaultStringSeparator,
	TResult extends string[] = [],
> = TString extends `${infer Start}${TSeparator}${infer Tail}`
	? _Split<Tail, TSeparator, [...TResult, Start]>
	: [...TResult, ...(Equal<TString, TSeparator> extends true ? [] : [TString])];

/**
 * - Split a type `TString` to an array for each `TSeparator` string apparition
 *
 * @template TString The string to split
 * @template TSeparator The separator to split the string by (default is `""`).
 * @example
 * ```tsx
 * import type { Str } from "@dulysse1/ts-helper";
import type { Add from '@/numeric';
 *
 * type A = Str.Split<"Hello">; // ["H", "e", "l", "l", "o"]
 * ```
 * ---------------------------
 * Do you have any questions about `Split` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Split<
	TString extends string,
	TSeparator extends string = TDefaultStringSeparator,
> =
	ContainExactString<TString> extends true
		? string[]
		: _Split<TString, TSeparator>;
