/**
 * - Get keys of `TObject` object by an optional filter `ValueLike` value, if value look like this `ValueLike` value, it will return this key else it will skip that key
 * ---------------------------
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
 * Do you have any questions about {@link KeyOf} usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type KeyOf<TObject extends object, ValueLike = unknown> = {
	[key in keyof TObject]: TObject[key] extends ValueLike ? key : never;
}[keyof TObject];
