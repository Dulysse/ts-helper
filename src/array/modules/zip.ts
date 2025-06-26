import type { IsTuple, ToUnion } from "@/array";
import type { DefaultArrayType } from "@/array/utils";
import type { Not, Or } from "@/operator";

import * as Test from "@/test/local";

Test.Describe(
	"Combine two tuple types into a tuple of pairs",
	Test.It<Zip<[], []>, [], Test.Out.PASS>(),
	Test.It<Zip<[1, 2, 3], ["a", "b"]>, [[1, "a"], [2, "b"]], Test.Out.PASS>(),
	Test.It<
		Zip<[1, 2, 3], ["a", "b", "c"]>,
		[[1, "a"], [2, "b"], [3, "c"]],
		Test.Out.PASS
	>(),
	Test.It<
		Zip<number[], ["1", "2", "3"]>,
		(number | "3" | "1" | "2")[][],
		Test.Out.PASS
	>(),
);

declare type _Zip<
	TArray1 extends DefaultArrayType,
	TArray2 extends DefaultArrayType,
	TResult extends DefaultArrayType = [],
> = TArray1 extends [infer H1, ...infer R1]
	? TArray2 extends [infer H2, ...infer R2]
		? _Zip<R1, R2, [...TResult, [H1, H2]]>
		: TResult
	: TResult;

/**
 * - Combine two tuple types into a tuple of pairs.
 *
 * @template TArray1 - The first array type to combine.
 * @template TArray2 - The second array type to combine.
 * @example
 * ```tsx
 * import type { Arr } from "@dulysse1/ts-helper";
 *
 * type A = Arr.Zip<
 *  [1, 2, 3],
 *  ["a", "b"]
 * >; // [[1, "a"], [2, "b"]]
 * ```
 * ---------------------------
 * Do you have any questions about `Zip` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Zip<
	TArray1 extends DefaultArrayType,
	TArray2 extends DefaultArrayType,
> =
	Or<Not<IsTuple<TArray1>>, Not<IsTuple<TArray2>>> extends true
		? (ToUnion<TArray1> | ToUnion<TArray2>)[][]
		: _Zip<TArray1, TArray2>;
