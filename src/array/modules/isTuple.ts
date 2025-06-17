import type { Equal, Or } from "@/operator";
import type { TDefaultArray } from "../utils";

import * as Test from "@/test/local";

Test.Describe(
	"Check whether an array type is a tuple or not",
	Test.It<IsTuple<[[1, 2], [3, 4]]>, true, Test.Out.PASS>(),
	Test.It<IsTuple<string[][]>, false, Test.Out.PASS>(),
	Test.It<IsTuple<readonly string[]>, false, Test.Out.PASS>(),
);

/**
 * - Check whether an array of type `TArray` is a tuple or not
 *
 * @template TArray - The array type to check if it is a tuple.
 * @example
 * ```tsx
 * import type { Arr } from "@dulysse1/ts-helper";
 *
 * type A = Arr.IsTuple<number[]>; // false
 * type B = Arr.IsTuple<[1, 2, 3]>; // true
 * ```
 * ---------------------------
 * Do you have any questions about `IsTuple` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type IsTuple<TArray extends TDefaultArray> =
	Or<
		Or<
			TArray extends [unknown, ...unknown[]] ? true : false,
			TArray extends readonly [unknown, ...unknown[]] ? true : false
		>,
		Or<
			Equal<TArray, []> extends true ? true : false,
			Equal<TArray, readonly []> extends true ? true : false
		>
	> extends true
		? true
		: false;
