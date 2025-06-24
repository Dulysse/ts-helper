import type { IsExactString } from "@/string";

import * as Test from "@/test/local";

Test.Describe(
	"Check if a string type contain exactly a string type as litteral string type",
	Test.It<ContainExactString<"hello">, false, Test.Out.PASS>(),
	Test.It<ContainExactString<string>, true, Test.Out.PASS>(),
	Test.It<ContainExactString<`hello${string}`>, true, Test.Out.PASS>(),
	Test.It<
		ContainExactString<"hello" | `hello ${string}`>,
		boolean,
		Test.Out.PASS
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
		: TString extends `${infer Head}${infer Next}`
			? IsExactString<Head> extends true
				? true
				: Next extends ""
					? false
					: ContainExactString<Next>
			: false;
