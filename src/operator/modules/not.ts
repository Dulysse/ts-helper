import type { Equal } from "@/operator";

/**
 * #### Get the opposite of a boolean `TOperator`
 * ---------------------------
 * @example
 * ```tsx
 * import type { Op } from "@dulysse1/ts-helper";
 *
 * type True = Op.Not<false>; // true
 * type False = Op.Not<true>; // false
 * ```
 * ---------------------------
 * Do you have any questions about {@link Not} usage ?
 * ### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Not<TOperator extends boolean> = Equal<
	TOperator,
	boolean
> extends true
	? boolean
	: TOperator extends true
	  ? false
	  : true;
