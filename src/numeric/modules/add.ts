import type { Equal, And, Satisfy } from "@/operator";
import type { Increment, Decrement, IsPositive } from "@/numeric";
import type { IsValidInput } from "../utils";

declare type AddPositive<
	N1 extends number,
	N2 extends number,
> = IsValidInput<N1> extends true
	? Equal<N2, 0> extends true
		? N1
		: AddPositive<Increment<N1>, Decrement<N2>>
	: never;

declare type AddNegative<
	N1 extends number,
	N2 extends number,
> = IsValidInput<N1> extends true
	? Equal<N2, 0> extends true
		? N1
		: AddNegative<Decrement<N1>, Increment<N2>>
	: never;

/**
 * #### Add `N2` to `N1`
 * ### ⚠️ Only works for Numbers in range `[-250; 250]` ⚠️
 * ---------------------------
 * @example
 * ```tsx
 * import type { Numeric } from "@dulysse1/ts-helper";
 *
 * type AddPositive = Numeric.Add<10, 10>; // 20
 * type AddNegate = Numeric.Add<10, -40>; // -30
 * ```
 * ---------------------------
 * Do you have any questions about {@link Add} usage ?
 * ### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Add<N1 extends number, N2 extends number> = And<
	IsValidInput<N1>,
	IsValidInput<N2>
> extends true
	? {
			true: AddPositive<N1, N2>;
			false: AddNegative<N1, N2>;
	  }[`${Satisfy<IsPositive<N2>, boolean>}`]
	: never;
