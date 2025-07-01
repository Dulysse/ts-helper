import type { At } from "@/array";
import type { Split } from "@/string";

import { Test } from "@/test";

Test.Describe(
	"Get the string char at a specific index",
	Test.It<PlacedAt<"hello", -1>, "o", typeof Test.Out.PASS>(),
	Test.It<PlacedAt<string, 1>, string | undefined, typeof Test.Out.PASS>(),
	Test.It<
		PlacedAt<`hello${string}`, 3>,
		string | undefined,
		typeof Test.Out.PASS
	>(),
	Test.It<PlacedAt<"hello", 34>, undefined, typeof Test.Out.PASS>(),
);

/**
 * - Get the string charactere at a specific `TIndex` from a string type `TString`.
 *
 * @template TString The string type to get the character from
 * @template TIndex The index of the character to get
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
 * Do you have any questions about `PlacedAt` usage ?
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
