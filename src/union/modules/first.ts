import type { ToArray } from "@/union";

/**
 * - Get the first element of an union type `TUnion`
 *
 * @template TUnion The union type to get the first element from
 * @example
 * ```tsx
 * import type { Union } from "@dulysse1/ts-helper";
 *
 * type A = Union.First<1 | 2 | 3>; // 1
 * ```
 * ---------------------------
 * Do you have any questions about `First` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type First<TUnion> =
	ToArray<TUnion> extends [infer First, ...unknown[]] ? First : never;
