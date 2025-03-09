import type { Equal } from "@/operator";
/**
 * - Check if a number `TNumber` is positive or equal to zero
 * ---------------------------
 * @example
 * ```tsx
 * import type { Num } from "@dulysse1/ts-helper";
 *
 * type A = Num.IsPositive<-23>; // false
 * type B = Num.IsPositive<10>; // true
 * ```
 * ---------------------------
 * Do you have any questions about {@link IsPositive} usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type IsPositive<TNumber extends number> =
	Equal<TNumber, number> extends true
		? boolean
		: `${TNumber}` extends `-${number}`
			? false
			: true;
