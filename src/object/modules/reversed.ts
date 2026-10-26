import type { Prettify } from "@/object";

/**
 * - Reverse the keys and values of an object type `TObject`.
 *
 * @template TObject The object type to reverse keys and values.
 * @example
 * ```tsx
 * import type { Obj } from "@dulysse1/ts-helper";
 *
 * type A = Obj.Reversed<
 *  { a: 'x'; b: 'y'; c: 'z'; }
 * >; // { x: 'a'; y: 'b'; z: 'c'; }
 * ```
 * ---------------------------
 * Do you have any questions about `Reversed` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulysse.dupont@example.com)
 * | [my github](https://github.com/ulysse-dupont)
 * | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Reversed<TObject extends object> = Prettify<{
	[key in keyof TObject as TObject[key] extends PropertyKey
		? TObject[key]
		: never]: key;
}>;
