import type { And } from "@/operator";
import type { IsValidInput } from "../utils";
import type { LowerEq, GreaterEq } from "@/numeric";

/**
 * #### Create an array of a range between two numbers `N1` and `N2`
 * ### ⚠️ Only works for Numbers in range `[-250; 250]` ⚠️
 * ---------------------------
 * @example
 * ```tsx
 * import type { Num } from "@dulysse1/ts-helper";
 *
 * type No = Num.Between<-1, 1, 5>; // false
 * type Yes = Num.Between<2, 1, 5>; // true
 * ```
 * ---------------------------
 * Do you have any questions about {@link Between} usage ?
 * ### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Between<
	N extends number,
	From extends number,
	To extends number,
> = And<And<IsValidInput<From>, IsValidInput<To>>, IsValidInput<N>> extends true
	? And<GreaterEq<N, From>, LowerEq<N, To>>
	: never;
