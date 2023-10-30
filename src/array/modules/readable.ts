/**
 * #### Get a readonly `T` array as readable
 * ---------------------------
 * @example
 * ```tsx
 * import type { Arr } from "@dulysse1/ts-helper";
 *
 * type Readable = Arr.Readable<
 *  readonly [1, 2, 3]
 * >; // [1, 2, 3]
 * ```
 * ---------------------------
 * Do you have any questions about {@link Readable} usage ?
 * ### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Readable<T extends readonly unknown[]> =
	T extends readonly [...infer R] ? R : T;
