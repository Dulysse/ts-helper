import type { At as AtArray } from "@/array";
import type { ToArray } from "@/union";

/**
 * #### Get the element with number `TIndex` from the index of union type `TUnion`.
 * ---------------------------
 * @example
 * ```tsx
 * import type { Union } from "@dulysse1/ts-helper";
 *
 * type AtUnion = Union.At<
 *  1 | 2 | 3,
 *  -1
 * >; // 3
 * ```
 * ---------------------------
 * Do you have any questions about {@link At} usage ?
 * ### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type At<TUnion, TIndex extends number> = AtArray<
	ToArray<TUnion>,
	TIndex
>;
