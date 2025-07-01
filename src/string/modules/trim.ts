import { Test } from "@/test";

Test.Describe(
	"TypeScript utility type to trim whitespace from both ends of a string",
	Test.It<Trim<"hello ">, "hello", typeof Test.Out.PASS>(),
	Test.It<Trim<`demo ${string} `>, `demo ${string}`, typeof Test.Out.PASS>(),
	Test.It<Trim<string>, string, typeof Test.Out.PASS>(),
);

/**
 * - TypeScript utility type to trim whitespace from both ends of a string.
 *
 * @template TString - The string type to trim.
 * @example
 * ```tsx
 * import type { Str } from "@dulysse1/ts-helper";
 *
 * type A = Str.Trim<"Hello world!   ">; // "Hello world!"
 * ```
 * ---------------------------
 * Do you have any questions about `Trim` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Trim<TString extends string> =
	TString extends `${infer Start} ` ? Trim<Start> : TString;
