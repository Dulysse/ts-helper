import type { IsPositive } from "@/numeric";
import type { IsValidInput, PositiveNumbers, NegativeNumbers } from "../utils";
import type { Satisfy } from "@/operator";

declare type OppositePositive<N extends number> = NegativeNumbers[N];

declare type OppositeNegative<N extends number> = PositiveNumbers[Satisfy<
	`${N}` extends `-${infer Index}` ? Index : never,
	keyof PositiveNumbers
>];

/**
 * #### Check if a number `N` is a negative number
 * ### ⚠️ Only works for Numbers in range `[-250; 250]` ⚠️
 * ---------------------------
 * @example
 * ```tsx
 * import type { Num } from "@dulysse1/ts-helper";
 *
 * type Positive = Num.Opposite<23>; // -23
 * type Negative = Num.Opposite<-34>; // 34
 * ```
 * ---------------------------
 * Do you have any questions about {@link Opposite} usage ?
 * ### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Opposite<N extends number> = IsValidInput<N> extends true
	? {
			true: OppositePositive<N>;
			false: OppositeNegative<N>;
	  }[`${Satisfy<IsPositive<N>, boolean>}`]
	: never;
