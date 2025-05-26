import type { At } from "@/array";
import type { Split } from "@/string";
/**
 * - Get the string with number `TIndex` from the index of string type `TString`.
 *
 * @template TString The string type to get the character from
 * @template TIndex The index of the character to get
 * ---------------------------
 * @example
 * ```tsx
 * import type { Str } from "@dulysse1/ts-helper";
 *
 * type A = Str.PlacedAt<
 *  "Hello",
 *  -1
 * >; // "o"
 * ```
 * ---------------------------
 * Do you have any questions about {@link PlacedAt} usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type PlacedAt<
	TString extends string,
	TIndex extends number,
> = At<Split<TString>, TIndex>;
