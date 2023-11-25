import type { IsPositive } from "@/numeric";
import type {
	IsValidNumberInput,
	PositiveNumbers,
	NegativeNumbers,
} from "../utils";
import type { Satisfy } from "@/operator";

declare type OppositePositive<TNumber extends number> =
	NegativeNumbers[TNumber];

declare type OppositeNegative<TNumber extends number> = PositiveNumbers[Satisfy<
	`${TNumber}` extends `-${infer Index}` ? Index : never,
	keyof PositiveNumbers
>];

/**
 * #### Check if a number `TNumber` is a negative number
 * ### ⚠️ Returns an absolute result for numbers in the interval `[-250; 250]`, otherwise it returns an `explicit result`. ⚠️
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
export declare type Opposite<TNumber extends number> =
	IsValidNumberInput<TNumber> extends true
		? {
				true: OppositePositive<TNumber>;
				false: OppositeNegative<TNumber>;
		  }[`${Satisfy<IsPositive<TNumber>, boolean>}`]
		: number;
