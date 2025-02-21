import type { TDefaultArray } from "../utils";
import type { IsTuple } from "@/array";

/**
 * - Get the `last` element of an array type `TArray`
 * ---------------------------
 * @example
 * ```tsx
 * import type { Arr } from "@dulysse1/ts-helper";
 *
 * type A = Arr.Last<[1, 2, 3]>; // 3
 * ```
 * ---------------------------
 * Do you have any questions about {@link Last} usage ?
 * ### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Last<TArray extends TDefaultArray> =
	IsTuple<TArray> extends true
		? TArray extends [...start: unknown[], infer End]
			? End
			: undefined
		: TArray[number] | undefined;
