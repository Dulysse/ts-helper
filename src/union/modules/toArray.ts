import type { Last } from "@/union";
import type { Satisfy } from "@/operator";

declare type _ToArray<U, Res extends unknown[] = []> = [Last<U>] extends [never]
	? Res
	: _ToArray<Exclude<U, Last<U>>, [Last<U>, ...Res]>;

/**
 * #### Transform an union type `U` to array with each properties
 * ---------------------------
 * @example
 * ```tsx
 * import type { Union } from "@dulysse1/ts-helper";
 *
 * type UnionToArray = Union.ToArray<1 | 2 | 3>; // [1, 2, 3]
 * ```
 * ---------------------------
 * Do you have any questions about {@link ToArray} usage ?
 * ### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type ToArray<U> = Satisfy<_ToArray<U>, unknown[]>;
