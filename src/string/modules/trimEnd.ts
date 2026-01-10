import { Test } from "@/test";

Test.Describe(
	"TypeScript utility type to trim whitespace from the end of a string",
	Test.It<TrimEnd<"hello    ">, "hello", typeof Test.Out.PASS>(),
	Test.It<
		TrimEnd<`${string} demo   `>,
		`${string} demo`,
		typeof Test.Out.PASS
	>(),
	Test.It<TrimEnd<string>, string, typeof Test.Out.PASS>(),
);

/**
 * - TypeScript utility type to trim whitespace from the end of a string.
 *
 * @template TString - The string type to trim.
 * @example
 * ```tsx
 * import type { Str } from "@dulysse1/ts-helper";
 *
 * type A = Str.TrimEnd<"Hello world!    ">; // "Hello world!"
 * ```
 * ---------------------------
 * Do you have any questions about `TrimEnd` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type TrimEnd<TString extends string> =
	TString extends `${infer Start} ` ? TrimEnd<Start> : TString;
