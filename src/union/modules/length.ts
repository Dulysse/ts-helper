import type { ToArray } from "@/union";

/**
 * #### Get an union type `U` length of possibilities
 * ---------------------------
 * @example
 * ```tsx
 * import type { Union } from "@dulysse1/ts-helper";
 *
 * type UnionLength = Union.Length<1 | 2 | 3>; // 3
 * ```
 * ---------------------------
 * Do you have any questions about {@link Length} usage ?
 * ### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Length<U> = ToArray<U> extends { length: infer Length }
	? Length
	: never;
