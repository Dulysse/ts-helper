import type { Equal, Not } from "@/operator";
import type { DefaultArrayType } from "../utils";
import type { Readable } from "@/array";

import * as Test from "@/test/local";

Test.Describe(
	"Check if an array type is readonly or not",
	Test.It<IsReadonly<[[1, 2], [3, 4]]>, false, Test.Out.PASS>(),
	Test.It<IsReadonly<string[][]>, false, Test.Out.PASS>(),
	Test.It<IsReadonly<readonly string[]>, true, Test.Out.PASS>(),
);

/**
 * - Check if an array `TArray` type is readonly or not
 *
 * @template TArray - The array type to check for readonly status.
 * @example
 * ```tsx
 * import type { Arr } from "@dulysse1/ts-helper";
 *
 * type A = Arr.IsReadonly<
 *  readonly [1, 2, 3]
 * >; // true
 * ```
 * ---------------------------
 * Do you have any questions about `IsReadonly` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type IsReadonly<TArray extends DefaultArrayType> = Not<
	Equal<Readable<TArray>, TArray>
>;
