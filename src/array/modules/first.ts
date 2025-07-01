import type { DefaultArrayType } from "../utils";
import type { IsTuple, ToUnion } from "@/array";

import { Test } from "@/test";

Test.Describe(
	"Get the first element of an array type",
	Test.It<First<[1, 2, 3]>, 1, typeof Test.Out.PASS>(),
	Test.It<First<string[]>, string | undefined, typeof Test.Out.PASS>(),
	Test.It<First<[]>, undefined, typeof Test.Out.PASS>(),
);

/**
 * - Get the `first` element of an array type `TArray`
 *
 * @template TArray - The array type to get the first element from.
 *
 * @example
 * ```tsx
 * import type { Arr } from "@dulysse1/ts-helper";
 *
 * type A = Arr.First<[1, 2, 3]>; // 1
 * ```
 * ---------------------------
 * Do you have any questions about `First` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type First<TArray extends DefaultArrayType> =
	IsTuple<TArray> extends true ? TArray[0] : ToUnion<TArray> | undefined;
