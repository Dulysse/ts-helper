import type { TDefaultArray } from "../utils";
import type { IsTuple } from "@/array";

/**
 * #### Get the `first` element of an array type `TArray`
 * ---------------------------
 * @example
 * ```tsx
 * import type { Arr } from "@dulysse1/ts-helper";
 *
 * type A = Arr.First<[1, 2, 3]>; // 1
 * ```
 * ---------------------------
 * Do you have any questions about {@link First} usage ?
 * ### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type First<TArray extends TDefaultArray> =
	IsTuple<TArray> extends true ? TArray[0] : TArray[number] | undefined;
