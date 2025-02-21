import type { Exclude, Last } from "@/union";
import type { Equal } from "@/operator";

/**
 * - Check if union type `TUnion` is an union with many choices
 * ---------------------------
 * @example
 * ```tsx
 * import type { Union } from "@dulysse1/ts-helper";
 *
 * type A = Union.IsUnion<1>; // false
 * type B = Union.IsUnion<1 | 2 | 3>; // true
 * ```
 * ---------------------------
 * Do you have any questions about {@link IsUnion} usage ?
 * ### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type IsUnion<TUnion> =
	Equal<TUnion, Exclude<TUnion, Last<TUnion>>> extends false ? false : true;
