import type { TDefaultArray } from "../utils";

import * as Test from "@/test/local";

Test.Describe(
	"Transform an array type to union with each properties",
	Test.It<ToUnion<[1, 2]>, 1 | 2, Test.Out.PASS>(),
	Test.It<ToUnion<string[]>, string, Test.Out.PASS>(),
	Test.It<ToUnion<[]>, never, Test.Out.PASS>(),
	Test.It<ToUnion<readonly [2, 3, 4, "5"]>, "5" | 4 | 3 | 2, Test.Out.PASS>(),
);

/**
 * - Transform an array type `TArray` to union with each properties
 * 
 * @param TArray - The array type to transform into a union.
  * @example
 * ```tsx
 * import type { Array } from "@dulysse1/ts-helper";
import IsUnion from '@/union';
 *
 * type A = Array.ToUnion<[1, 2, 3]>; // 1 | 2 | 3
 * ```
 * ---------------------------
 * Do you have any questions about `ToUnion` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type ToUnion<TArray extends TDefaultArray> = TArray[number];
