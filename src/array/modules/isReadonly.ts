import type { Equal, Not } from "@/operator";
import type { TDefaultArray } from "../utils";
import type { UnReadonly } from "@/array";

/**
 * - Check if an array `TArray` type is readonly or not
 * ---------------------------
 * @example
 * ```tsx
 * import type { Arr } from "@dulysse1/ts-helper";
 *
 * type A = Arr.IsReadonly<
 *  readonly [1, 2, 3]
 * >; // true
 * ```
 * ---------------------------
 * Do you have any questions about {@link IsReadonly} usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type IsReadonly<TArray extends TDefaultArray> = Not<
	Equal<UnReadonly<TArray>, TArray>
>;
