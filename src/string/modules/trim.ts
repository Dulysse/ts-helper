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
