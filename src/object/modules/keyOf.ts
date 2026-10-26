/**
 * - Get keys of `TObject` object by an optional filter `TValueLike` value, if value look like this `TValueLike` value, it will return this key else it will skip that key
 *
 * @template TObject The object type to get keys from
 * @template TValueLike optional filter
 * @example
 * ```tsx
 * import type { Obj } from "@dulysse1/ts-helper";
 *
 * type A = Obj.KeyOf<
 *  { a: string; b: number; },
 *  string
 * >; // "a"
 * ```
 * ---------------------------
 * Do you have any questions about `KeyOf` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type KeyOf<TObject extends object, TValueLike = unknown> = {
	[key in keyof TObject]: TObject[key] extends TValueLike ? key : never;
}[keyof TObject];

/**
 * - Get a tuple of an object's keys
 *
 * @param object The object to get entries from.
 * @example
 * ```tsx
 * import { keys } from "@dulysse1/ts-helper/object";
 *
 * const a = keys({ a: "ahaha", b: 111, c: true, d: "no" }); // ("a" | "b" | "c"| "d")[]
 * ```
 * ---------------------------
 * Do you have any questions about `keys` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export function keys<const T extends object>(object: T): KeyOf<T>[] {
	return Object.keys(object) as KeyOf<T>[];
}
