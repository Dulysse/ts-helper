import type { Split } from "@/string";
import type { Length } from "@/array";

/**
 * #### Get the length of a string type `TString`
 * ---------------------------
 * @example
 * ```tsx
 * import type { Str } from "@dulysse1/ts-helper";
 *
 * type A = Str.Width<"Hello world!">; // 12
 * ```
 * ---------------------------
 * Do you have any questions about {@link Width} usage ?
 * ### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Width<TString extends string> = Length<Split<TString>>;
