import type { IsExactString } from "@/string";

import { Test } from "@/test";

Test.Describe(
	"Check if a string type contain exactly a string type as litteral string type",
	Test.It<ContainExactString<"hello">, false, typeof Test.Out.PASS>(),
	Test.It<ContainExactString<string>, true, typeof Test.Out.PASS>(),
	Test.It<ContainExactString<`hello${string}`>, true, typeof Test.Out.PASS>(),
	Test.It<
		ContainExactString<"hello" | `hello ${string}`>,
		boolean,
		typeof Test.Out.PASS
	>(),
);

/**
 * - Check if a type `TString` contain exactly a string type as litteral string type
 *
 * @template TString The type to check
 * @example
 * ```tsx
 * import type { Str } from "@dulysse1/ts-helper";
 *
 * type A = Str.ContainExactString<string>; // true
 * type B = Str.ContainExactString<"Hello world!">; // false
 * type C = Str.ContainExactString<`Hello ${string} world!`>; // true
 * ```
 * ---------------------------
 * Do you have any questions about `ContainExactString` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type ContainExactString<TString extends string> =
	IsExactString<TString> extends true
		? true
		: TString extends `${infer Head}${infer Tail}`
			? IsExactString<Head> extends true
				? true
				: Tail extends ""
					? false
					: ContainExactString<Tail>
			: false;
