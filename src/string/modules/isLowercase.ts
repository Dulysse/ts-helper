import type { And, AndAll, IsEqual, Not } from "@/operator";
import type { ContainExactString, IsExactString } from "@/string";

declare type IsLowerCaseAndWhenContainExactString<
	TString extends string,
	Result = boolean,
> = TString extends `${infer Head}${infer Tail}`
	? AndAll<
			[
				Not<IsEqual<Head, string>>,
				IsEqual<Uppercase<Head>, Head>,
				Not<IsEqual<Lowercase<Head>, Head>>,
			]
		> extends true
		? false
		: IsLowerCaseAndWhenContainExactString<Tail, Result>
	: Result;

/**
 * - TypeScript utility type to check if a string is lowercase.
 *
 * @template TString - The string type to check.
 * @example
 * ```tsx
 * import type { Str } from "@dulysse1/ts-helper";
 *
 * type A = Str.IsLowerCase<"Hello world!">; // false
 * type B = Str.IsLowerCase<"HELLO">; // false
 * type C = Str.IsLowerCase<"hello">; // true
 * ```
 * ---------------------------
 * Do you have any questions about `IsLowerCase` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type IsLowerCase<TString extends string> =
	IsExactString<TString> extends true
		? boolean
		: ContainExactString<TString> extends true
			? IsLowerCaseAndWhenContainExactString<TString>
			: And<
						IsEqual<Lowercase<TString>, TString>,
						Not<IsEqual<Uppercase<TString>, TString>>
				  > extends true
				? true
				: false;
