import type { DefaultArrayType } from "../utils";
import type { IsTuple, ToUnion } from "@/array";

import { Test } from "@/test";

Test.Describe(
	"Get the last element of an array type",
	Test.It<Last<[1, 2]>, 2, typeof Test.Out.PASS>(),
	Test.It<Last<string[]>, string | undefined, typeof Test.Out.PASS>(),
	Test.It<Last<[]>, undefined, typeof Test.Out.PASS>(),
	Test.It<Last<[2, 3, 4] | [1, 2]>, 2 | 4, typeof Test.Out.PASS>(),
);

/**
 * - Get the `last` element of an array type `TArray`
 *
 * @template TArray - The array type to get the last element from.
 * @example
 * ```tsx
 * import type { Arr } from "@dulysse1/ts-helper";
 *
 * type A = Arr.Last<[1, 2, 3]>; // 3
 * ```
 * ---------------------------
 * Do you have any questions about `Last` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Last<TArray extends DefaultArrayType> =
	IsTuple<TArray> extends true
		? TArray extends [...start: unknown[], infer End]
			? End
			: undefined
		: ToUnion<TArray> | undefined;
