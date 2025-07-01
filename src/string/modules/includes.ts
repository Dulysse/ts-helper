import type { Or } from "@/operator";
import type { ContainExactString } from "@/string";

import { Test } from "@/test";

Test.Describe(
	"Check if a string type includes an element",
	Test.It<Includes<"hello", string>, boolean, typeof Test.Out.PASS>(),
	Test.It<Includes<"hello", "">, true, typeof Test.Out.PASS>(),
	Test.It<Includes<`hello${string}`, "">, boolean, typeof Test.Out.PASS>(),
	Test.It<Includes<`hello`, "z">, false, typeof Test.Out.PASS>(),
);

/**
 * - Check if `TString` includes `TSearch`
 *
 * @template TString - The string type to check
 * @template TSearch - The string type to search for
 *
 * @example
 * ```tsx
 * import type { Str } from "@dulysse1/ts-helper";
 *
 * type A = Str.Includes<"Hello ", "e">; // true
 * type B = Str.Includes<"Hello ", "x">; // false
 * type C = Str.Includes<"Hello ", string>; // boolean
 * type D = Str.Includes<"Hello ", "Hello">; // true
 * ```
 * ---------------------------
 * Do you have any questions about `Includes` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Includes<TString extends string, TSearch extends string> =
	Or<ContainExactString<TString>, ContainExactString<TSearch>> extends true
		? boolean
		: TString extends `${infer _}${TSearch}${infer __}`
			? true
			: false;
