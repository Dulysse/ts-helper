import type { And, Equal } from "@/operator";
import type { IsValidNumberInput } from "../utils";
import type { LowerEq, Increment, Decrement } from "@/numeric";

export declare type AscRange<
	From extends number,
	To extends number,
	Res extends number[] = [],
> = Equal<From, To> extends true
	? [...Res, From]
	: AscRange<Increment<From>, To, [...Res, From]>;

export declare type DescRange<
	From extends number,
	To extends number,
	Res extends number[] = [],
> = Equal<From, To> extends true
	? [...Res, From]
	: DescRange<Decrement<From>, To, [...Res, From]>;

/**
 * #### Create an array of a range between two numbers `TNumber1` and `TNumber2`
 * ### ⚠️ Returns an absolute result for numbers in the interval `[-200; 200]`, otherwise it returns an `explicit result`. ⚠️
 * ---------------------------
 * @example
 * ```tsx
 * import type { Num } from "@dulysse1/ts-helper";
 *
 * type A = Num.Range<1, 5>; // [1, 2, 3, 4, 5]
 * ```
 * ---------------------------
 * Do you have any questions about {@link Range} usage ?
 * ### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Range<From extends number, To extends number> = And<
	IsValidNumberInput<From>,
	IsValidNumberInput<To>
> extends true
	? {
			true: AscRange<From, To>;
			false: DescRange<From, To>;
	  }[`${LowerEq<From, To> extends boolean ? LowerEq<From, To> : boolean}`]
	: number[];
