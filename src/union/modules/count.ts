import type { ToArray } from "@/union";

/**
 * #### Get an union type `TUnion` length of possibilities
 * ---------------------------
 * @example
 * ```tsx
 * import type { Union } from "@dulysse1/ts-helper";
 *
 * type A = Union.Count<1 | 2 | 3>; // 3
 * ```
 * ---------------------------
 * Do you have any questions about {@link Count} usage ?
 * ### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Count<TUnion> = ToArray<TUnion> extends {
	length: infer Count;
}
	? Count
	: never;
