import type { DefaultArrayType } from "../utils";
import type { Readable, IsTuple } from "@/array";

import * as Test from "@/test/local";

Test.Describe(
	"Get a reversed array type",
	Test.It<Reverse<[1, 2]>, [2, 1], Test.Out.PASS>(),
	Test.It<Reverse<string[]>, string[], Test.Out.PASS>(),
	Test.It<Reverse<[]>, [], Test.Out.PASS>(),
	Test.It<Reverse<readonly [2, 3, 4, "5"]>, ["5", 4, 3, 2], Test.Out.PASS>(),
);

declare type _Reverse<
	TArray extends DefaultArrayType,
	TResult extends DefaultArrayType = [],
> =
	IsTuple<TArray> extends false
		? TArray
		: Readable<TArray> extends [...infer Next, infer Last]
			? _Reverse<Next, [...TResult, Last]>
			: TResult;

/**
 * - Get a reversed `TArray` array type
 *
 * @template TArray - The array type to reverse.
 * @example
 * ```tsx
 * import type { Arr } from "@dulysse1/ts-helper";
 *
 * type A = Arr.Reverse<
 *  [1, 2, 3]
 * >; // [3, 2, 1]
 * ```
 * ---------------------------
 * Do you have any questions about `Reverse` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Reverse<TArray extends DefaultArrayType> = _Reverse<TArray>;
