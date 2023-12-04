import type { Last, Exclude } from "@/union";
import type { Satisfy } from "@/operator";

declare type _ToArray<TUnion, Res extends unknown[] = []> = [
	Last<TUnion>,
] extends [never]
	? Res
	: _ToArray<Exclude<TUnion, Last<TUnion>>, [Last<TUnion>, ...Res]>;

/**
 * #### Transform an union type `TUnion` to array with each properties
 * ---------------------------
 * @example
 * ```tsx
 * import type { Union } from "@dulysse1/ts-helper";
 *
 * type A = Union.ToArray<1 | 2 | 3>; // [1, 2, 3]
 * ```
 * ---------------------------
 * Do you have any questions about {@link ToArray} usage ?
 * ### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type ToArray<TUnion> = Satisfy<_ToArray<TUnion>, unknown[]>;
