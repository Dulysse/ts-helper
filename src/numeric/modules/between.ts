import type { And } from "@/operator";
import type { IsValidNumberInput, InvalidNumberInput } from "../utils";
import type { LowerEq, GreaterEq } from "@/numeric";

/**
 * #### Check if type `TNumber` is between `From` and `To` numbers
 * ### ⚠️ Returns an absolute result for numbers in the interval `[-250; 250]`, otherwise it returns an explicit result. ⚠️
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
	TNumber extends number,
	From extends number,
	To extends number,
> = And<
	And<IsValidNumberInput<From>, IsValidNumberInput<To>>,
	IsValidNumberInput<TNumber>
> extends true
	? And<GreaterEq<TNumber, From>, LowerEq<TNumber, To>>
	: InvalidNumberInput<boolean>;
