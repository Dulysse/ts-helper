import type { Includes } from "@/array";
import type { ToArray } from "@/union";
/**
 * - Check if `TIncluded` is an element of an union type `TUnion`
 * ---------------------------
 * @example
 * ```tsx
 * import type { Union } from "@dulysse1/ts-helper";
 *
 * type A = Union.Has<1 | 2 | 3, 2>; // true
 * type B = Union.Has<1 | 2 | 3, 4>; // false
 * ```
 * ---------------------------
 * Do you have any questions about {@link Has} usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Has<TUnion, TIncluded> = Includes<
	ToArray<TUnion>,
	TIncluded
>;
