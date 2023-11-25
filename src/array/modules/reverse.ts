import type { TDefaultArray } from "../utils";
import type { UnReadonly, IsTuple } from "@/array";

declare type _Reverse<
	TArray extends TDefaultArray,
	Res extends TDefaultArray = [],
> = IsTuple<TArray> extends false
	? TArray
	: UnReadonly<TArray> extends [...infer Next, infer Last]
	  ? _Reverse<Next, [...Res, Last]>
	  : Res;

/**
 * #### Get a reversed `TArray` array
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
export declare type Reverse<TArray extends TDefaultArray> = _Reverse<TArray>;
