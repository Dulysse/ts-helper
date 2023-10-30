import type { IsTuple, TArray } from "../utils";
import type { Readable } from "@/array";

declare type _Reverse<
	T extends TArray,
	Res extends TArray = [],
> = IsTuple<T> extends false
	? T
	: Readable<T> extends [...infer Next, infer Last]
	? _Reverse<Next, [...Res, Last]>
	: Res;

/**
 * #### Get a reversed `T` array
 * ---------------------------
 * @example
 * ```tsx
 * import type { Arr } from "@dulysse1/ts-helper";
 *
 * type Reversed = Arr.Reverse<
 *  [1, 2, 3]
 * >; // [3, 2, 1]
 * ```
 * ---------------------------
 * Do you have any questions about {@link Reverse} usage ?
 * ### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Reverse<T extends TArray> = _Reverse<T>;
