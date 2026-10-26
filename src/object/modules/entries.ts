import type { IsPrimitive } from "@/any";
import type { KeyOf } from "@/object";
import type { Equal } from "@/operator";
import type { ToArray } from "@/union";

declare type _EntriesTuple<
	TObject extends object,
	TKeys extends unknown[] = ToArray<KeyOf<TObject>>,
> = {
	[K in keyof TKeys]: TKeys[K] extends infer Key extends keyof TObject
		? [Key, TObject[Key]]
		: never;
};

declare type _Entries<TObject extends object> =
	Equal<IsPrimitive<keyof TObject>, false> extends true
		? _EntriesTuple<TObject>
		: {
				[K in NonNullable<keyof TObject>]: [K, TObject[K]];
			}[keyof TObject][];

/**
 * - Extract object entries as a union of `[key, value]` tuples
 *
 * @template TObject The object type to get entries from.
 * @example
 * ```tsx
 * import type { Obj } from "@dulysse1/ts-helper";
 *
 * type A = Obj.Entries<
 * 	{ a: string; b: number; c: boolean; d: string; },
 * >; // tuple containing ["a", string], ["b", number], ["c", boolean], and ["d", string]
 * ```
 * ---------------------------
 * Do you have any questions about `Entries` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Entries<TObject extends object> =
	Equal<TObject, object> extends true
		? [PropertyKey, unknown][]
		: [keyof TObject] extends [never]
			? []
			: _Entries<TObject>;

/**
 * - Extract object entries as a union of `[key, value]` tuples
 *
 * @param object The object to get entries from.
 * @example
 * ```tsx
 * import { entries } from "@dulysse1/ts-helper/object";
 *
 * const a = entries({ a: "ahaha", b: 111, c: true, d: "no" }); // tuple of entry pairs
 * ```
 * ---------------------------
 * Do you have any questions about `entries` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export function entries<const T extends object>(object: T): Entries<T> {
	return Object.entries(object) as Entries<T>;
}
