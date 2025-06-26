import type { DefaultArrayType } from "../utils";
import type { Includes, IsTuple } from "@/array";

import * as Test from "@/test/local";

Test.Describe(
	"Remove duplicate elements from an array type",
	Test.It<Unique<[1, 2, 2, 3]>, [1, 2, 3], Test.Out.PASS>(),
	Test.It<Unique<[1, 2, 3]>, [1, 2, 3], Test.Out.PASS>(),
	Test.It<Unique<["a", "b", "a"]>, ["a", "b"], Test.Out.PASS>(),
	Test.It<Unique<string[]>, string[], Test.Out.PASS>(),
);

declare type _Unique<
	TArray extends DefaultArrayType,
	TResult extends DefaultArrayType = [],
> = TArray extends [infer Head, ...infer Tail]
	? _Unique<
			Tail,
			[...TResult, ...(Includes<TResult, Head> extends true ? [] : [Head])]
		>
	: TResult;

/**
 * - Remove duplicate elements from an array type `TArray`.
 * @template TArray - The array type from which to remove duplicates.
 * @example
 * ```tsx
 * import type { Arr } from "@dulysse1/ts-helper";
 *
 * type A = Arr.Unique<[1, 2, 2, 3]>; // [1, 2, 3]
 * type B = Arr.Unique<[1, 2, 3]>; // [1, 2, 3]
 * type C = Arr.Unique<["a", "b", "a"]>; // ["a", "b"]
 *
 * ```
 * ---------------------------
 * Do you have any questions about `Unique` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Unique<TArray extends DefaultArrayType> =
	IsTuple<TArray> extends true ? _Unique<TArray> : TArray;
