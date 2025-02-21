import type { TDefaultArray, TDefaultArraySeparator } from "../utils";
import type { IsTuple } from "@/array";
import type { Equal, Or, Satisfy } from "@/operator";

declare type _Join<
	TArray extends TDefaultArray,
	TSeparator extends string = TDefaultArraySeparator,
	TResult extends string = "",
> =
	IsTuple<TArray> extends true
		? Equal<TArray, []> extends true
			? TResult
			: TArray extends [infer First, ...infer Next]
				? _Join<
						Next,
						TSeparator,
						`${TResult}${Stringify<First, TSeparator>}${Equal<
							Next,
							[]
						> extends true
							? ""
							: TSeparator}`
					>
				: never
		: string;

declare type Stringify<
	T,
	TSeparator extends string = TDefaultArraySeparator,
> = T extends unknown[]
	? _Join<T, TSeparator>
	: T extends object
		? "[object Object]"
		: Or<Equal<T, undefined>, Equal<T, null>> extends true
			? ""
			: `${Satisfy<T, string | number | bigint | boolean>}`;

/**
 * - Join all element of an array `TArray` type with `TSeparator` for each element
 * ---------------------------
 * @example
 * ```tsx
 * import type { Arr } from "@dulysse1/ts-helper";
 *
 * type A = Arr.Join<["H", "e", "l", "l", "o"]>; // "h,e,l,l,o"
 * ```
 * ---------------------------
 * Do you have any questions about {@link Join} usage ?
 * ### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Join<
	TArray extends TDefaultArray,
	TSeparator extends string = TDefaultArraySeparator,
> = _Join<TArray, TSeparator>;
