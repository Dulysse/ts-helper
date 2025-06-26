import type { DefaultArrayType, DefaultArrayTypeSeparator } from "../utils";
import type { IsTuple } from "@/array";
import type { Equal, Or, Satisfy } from "@/operator";

import * as Test from "@/test/local";

Test.Describe(
	"Check whether an array type is a tuple or not",
	Test.It<Join<[1, 2]>, "1,2", Test.Out.PASS>(),
	Test.It<Join<string[]>, string, Test.Out.PASS>(),
	Test.It<Join<[1, {}]>, "1,[object Object]", Test.Out.PASS>(),
	Test.It<Join<[1, 2, 3, 4], "/">, "1/2/3/4", Test.Out.PASS>(),
);

declare type _Join<
	TArray extends DefaultArrayType,
	TSeparator extends string = DefaultArrayTypeSeparator,
	TResult extends string = "",
> =
	IsTuple<TArray> extends true
		? Equal<TArray, []> extends true
			? TResult
			: TArray extends [infer Head, ...infer Tail]
				? _Join<
						Tail,
						TSeparator,
						`${TResult}${Stringify<Head, TSeparator>}${Equal<
							Tail,
							[]
						> extends true
							? ""
							: TSeparator}`
					>
				: never
		: string;

declare type Stringify<
	T,
	TSeparator extends string = DefaultArrayTypeSeparator,
> = T extends unknown[]
	? _Join<T, TSeparator>
	: T extends object
		? "[object Object]"
		: Or<Equal<T, undefined>, Equal<T, null>> extends true
			? ""
			: `${Satisfy<T, string | number | bigint | boolean>}`;

/**
 * - Join all element of an array `TArray` type with `TSeparator` for each element
 *
 * @template TArray - The array type to join elements from.
 * @template TSeparator - The separator to use between elements (default is `,`).
 *
 * @example
 * ```tsx
 * import type { Arr } from "@dulysse1/ts-helper";
 *
 * type A = Arr.Join<["H", "e", "l", "l", "o"]>; // "h,e,l,l,o"
 * ```
 * ---------------------------
 * Do you have any questions about `Join` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Join<
	TArray extends DefaultArrayType,
	TSeparator extends string = DefaultArrayTypeSeparator,
> = _Join<TArray, TSeparator>;
