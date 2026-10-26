/**
 * - Check if an object `TObject` has a specific key `TElement`
 * @template TObject - The object type to check.
 * @template TElement - The key to check for in the object.
 * @example
 * ```tsx
 * import type { Obj } from "@dulysse1/ts-helper";
 *
 * type A = Obj.HasKey<{ a: string; b: number }, "a">; // true
 * type B = Obj.HasKey<{ a: string; b: number }, "c">; // false
 * ```
 * ---------------------------
 * Do you have any questions about `HasKey` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type HasKey<TObject, TElement> = TElement extends keyof TObject
	? true
	: false;
