import { Test } from "@/test";

Test.Describe(
	"TypeScript utility type to trim whitespace from the start of a string",
	Test.It<TrimStart<"    hello">, "hello", typeof Test.Out.PASS>(),
	Test.It<
		TrimStart<`   ${string} demo`>,
		`${string} demo`,
		typeof Test.Out.PASS
	>(),
	Test.It<TrimStart<string>, string, typeof Test.Out.PASS>(),
);

/**
 * - TypeScript utility type to trim whitespace from the start of a string.
 *
 * @template TString - The string type to trim.
 * @example
 * ```tsx
 * import type { Str } from "@dulysse1/ts-helper";
 *
 * type A = Str.TrimStart<"    Hello world!">; // "Hello world!"
 * ```
 * ---------------------------
 * Do you have any questions about `TrimStart` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type TrimStart<TString extends string> =
	TString extends ` ${infer End}` ? TrimStart<End> : TString;
