import type { IsEqual, OrAll } from "@/operator";
import type { IsUnion, ToArray } from "@/union";

import { DefaultArrayType } from "@/array/utils";

/**
 * - Check if `T` is a unique primitive type.
 */
declare type IsUniquePrimitive<T> = OrAll<
	[
		IsEqual<T, string>,
		IsEqual<T, number>,
		IsEqual<T, boolean>,
		IsEqual<T, bigint>,
		IsEqual<T, symbol>,
		IsEqual<T, never>,
		IsEqual<T, unknown>,
		IsEqual<T, null>,
		IsEqual<T, undefined>,
	]
>;

/**
 * - Check if all types in tuple `T` are the same primitive type.
 */
declare type CheckTuplePrimitive<
	T extends DefaultArrayType,
	TResult extends boolean = IsUniquePrimitive<T[0]>,
> = T extends [infer Head, ...infer Tail]
	? IsEqual<TResult, IsUniquePrimitive<Head>> extends true
		? CheckTuplePrimitive<Tail, TResult>
		: boolean
	: TResult;

/**
 * - Check if `T` is a primitive type.
 * @template T - The type to check.
 * @example
 * ```tsx
 * import type { Any } from "@dulysse1/ts-helper";
 *
 * type A = Any.IsPrimitive<"hello">; // false
 * type B = Any.IsPrimitive<1>; // false
 * type C = Any.IsPrimitive<boolean>; // true
 * ```
 * ---------------------------
 * Do you have any questions about `IsPrimitive` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type IsPrimitive<T> =
	IsUnion<T> extends true
		? CheckTuplePrimitive<ToArray<T>>
		: IsUniquePrimitive<T>;
