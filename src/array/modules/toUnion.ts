import type { TDefaultArray } from "../utils";

/**
 * - Transform an array type `TArray` to union with each properties
 * ---------------------------
 * @example
 * ```tsx
 * import type { Array } from "@dulysse1/ts-helper";
import IsUnion from '@/union';
 *
 * type A = Array.ToUnion<[1, 2, 3]>; // 1 | 2 | 3
 * ```
 * ---------------------------
 * Do you have any questions about {@link ToUnion} usage ?
 * ### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type ToUnion<TArray extends TDefaultArray> = TArray[number];
