import type { IsTuple } from "@/array";
import type { Prettify } from "@/object";
import type { Equal, Satisfy } from "@/operator";

type UnionToIntersection<T> = (
	T extends unknown ? (value: T) => void : never
) extends (value: infer I) => void
	? I
	: never;

declare type _FromEntries<
	TEntries extends readonly (readonly [PropertyKey, unknown])[] | unknown[][],
	TRequired extends boolean = IsTuple<TEntries> extends true ? true : false,
> = TEntries extends readonly []
	? {}
	: Equal<TEntries, unknown[][]> extends true
		? Record<PropertyKey, unknown>
		: UnionToIntersection<
				TEntries[number] extends infer Entry
					? Entry extends readonly [infer Key extends PropertyKey, infer Value]
						? TRequired extends true
							? { [K in Key]: Value }
							: { [K in Key]?: Value }
						: never
					: never
			>;

/**
 * - Get object from given entries union of `[key, value]` tuples
 *
 * @template TEntries The entries of the object.
 * @example
 * ```tsx
 * import type { Obj } from "@dulysse1/ts-helper";
 *
 * type A = Obj.FromEntries<[["a", string], ["b", number], ["c", boolean], ["d", string]]>; // { a: string; b: number; c: boolean; d: string; }

	type B = FromEntries<
			(["a", string] | ["b", number] | ["c", boolean] | ["d", string])[]
		>; // { a?: string | undefined; b?: number | undefined; c?: boolean | undefined; d?: string | undefined; }
 * ```
 * ---------------------------
 * Do you have any questions about `FromEntries` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type FromEntries<
	TEntries extends readonly (readonly [PropertyKey, unknown])[] | unknown[][],
> = Prettify<Satisfy<_FromEntries<TEntries>, Record<PropertyKey, unknown>>>;

/**
 * - Get object from given entries union of `[key, value]` tuples
 *
 * @param entries The entries of the object.
 * @example
 * ```tsx
 * import { obj } from "@dulysse1/ts-helper";
 *
 * const a = obj.fromEntries([
		["name", "Ulysse"],
		["age", 26],
	]); // { name: "Ulysse"; age: 26; }
 * ```
 * ---------------------------
 * Do you have any questions about `fromEntries` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export function fromEntries<
	const T extends [PropertyKey, unknown][] | unknown[][],
>(entries: T): FromEntries<T> {
	return Object.fromEntries(entries) as FromEntries<T>;
}
