import type { Equal, And, Satisfy } from "@/operator";
import type { Increment, Decrement, IsPositive } from "@/numeric";
import type { IsValidInput } from "../utils";

declare type SubtractPositive<
	N1 extends number,
	N2 extends number,
> = IsValidInput<N1> extends true
	? Equal<N2, 0> extends true
		? N1
		: SubtractPositive<Decrement<N1>, Decrement<N2>>
	: never;

declare type SubtractNegative<
	N1 extends number,
	N2 extends number,
> = IsValidInput<N1> extends true
	? Equal<N2, 0> extends true
		? N1
		: SubtractNegative<Increment<N1>, Increment<N2>>
	: never;

/**
 * #### Subtract `N2` from `N1`
 * ### ⚠️ Only works for Numbers in range `[-250; 250]` ⚠️
 * ---------------------------
 * @example
 * ```tsx
 * import type { Num } from "@dulysse1/ts-helper";
 *
 * type SubtractPositive = Num.Subtract<10, 10>; // 0
 * type SubtractNegative = Num.Subtract<10, -40>; // 40
 * ```
 * ---------------------------
 * Do you have any questions about {@link Subtract} usage ?
 * ### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Subtract<N1 extends number, N2 extends number> = And<
	IsValidInput<N1>,
	IsValidInput<N2>
> extends true
	? {
			true: SubtractPositive<N1, N2>;
			false: SubtractNegative<N1, N2>;
	  }[`${Satisfy<IsPositive<N2>, boolean>}`]
	: never;
