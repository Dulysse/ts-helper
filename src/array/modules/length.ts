import type { TDefaultArray } from "../utils";

/**
 * - Get the length of an array type `TArray`
 * ---------------------------
 * @example
 * ```tsx
 * import type { Arr } from "@dulysse1/ts-helper";
 *
 * type A = Arr.Length<[1, 2, 3]>; // 3
 * ```
 * ---------------------------
 * Do you have any questions about {@link Length} usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Length<TArray extends TDefaultArray> = TArray extends {
	length: infer Length;
}
	? Length
	: never;
