/**
 * - Get a readonly `TArray` array as writable
 *
 * @template TArray - The array type to convert to writable.
 * @example
 * ```tsx
 * import type { Arr } from "@dulysse1/ts-helper";
 *
 * type A = Arr.UnReadonly<
 *  readonly [1, 2, 3]
 * >; // [1, 2, 3]
 * ```
 * ---------------------------
 * Do you have any questions about `UnReadonly` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type UnReadonly<TArray extends readonly unknown[]> =
	TArray extends readonly [...infer R] ? R : TArray;
