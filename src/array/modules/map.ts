import type { IsTuple } from "@/array";
import type { DefaultArrayType } from "@/array/utils";
import type { Eval } from "@/numeric";
import type { Satisfy } from "@/operator";
import type { IsExactString } from "@/string";

import * as Test from "@/test/local";

Test.Describe(
	"Map an array type with a filter",
	Test.It<Map<[1, 2, 3], string>, ["1", "2", "3"], Test.Out.PASS>(),
	Test.It<Map<[1, 2, 3], "a">, ["a", "a", "a"], Test.Out.PASS>(),
	Test.It<Map<[1, 2, 3], `1+${number}`, "eval">, [2, 3, 4], Test.Out.PASS>(),
);

declare type MapMode = "literal" | "eval";

declare type InferMapIntoString<
	TElement,
	TFilter extends string,
	TMode extends MapMode = "literal",
	TResult extends string = "",
> = TFilter extends `${infer Head}${infer Tail}`
	? InferMapIntoString<
			TElement,
			Tail,
			TMode,
			`${TResult}${`${Satisfy<TElement, string | number | bigint | boolean>}` extends `${Head}` ? Satisfy<TElement, string | number | bigint | boolean> : Head}`
		>
	: TMode extends "eval"
		? Eval<`${TResult}${TFilter}`>
		: `${TResult}${TFilter}`;

declare type _Map<
	TArray extends DefaultArrayType,
	TFilter,
	TMode extends MapMode = "literal",
	TResult extends DefaultArrayType = [],
> = TArray extends [infer Head, ...infer Tail]
	? _Map<
			Tail,
			TFilter,
			TMode,
			[
				...TResult,
				TFilter extends string
					? IsExactString<TFilter> extends true
						? `${Satisfy<Head, string | number | bigint | boolean>}`
						: InferMapIntoString<Head, TFilter, TMode>
					: TFilter,
			]
		>
	: TResult;

/**
 * -
 * @example
 * ```tsx
 * import type { Arr } from "@dulysse1/ts-helper";
 *
 * type A = Map<[1, 2, 3], `1+${number}`, "eval">; // [2, 3, 4]
 * type B = Map<[1, 2, 3], string>; // ["1", "2", "3"]
 * type C = Map<[1, 2, 3], "a">; // ["a", "a", "a"]
 * ```
 * ---------------------------
 * Do you have any questions about `Map` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Map<
	TArray extends DefaultArrayType,
	TFilter,
	TMode extends MapMode = "literal",
> = IsTuple<TArray> extends true ? _Map<TArray, TFilter, TMode> : TFilter[];
