import type {
	Opposite,
	IsPositive,
	IsZero,
	Multiply,
	Decrement,
	IsFloat,
} from "@/numeric";
import type { IsValidNumberInput } from "../utils";
import type { And, Not } from "@/operator";

declare type _Factorial<TNumber extends number> =
	IsZero<TNumber> extends true
		? 1
		: Multiply<TNumber, _Factorial<Decrement<TNumber>>>;

/**
 * Get the factorial value of `TNumber`
 * - ⚠️ Returns an absolute result for numbers that don't reach compiler limits, otherwise it returns an `explicit result`. ⚠️
 * ---------------------------
 * @example
 * ```tsx
 * import type { Num } from "@dulysse1/ts-helper";
 *
 * type A = Num.Factorial<0>; // 1
 * type B = Num.Factorial<5>; // 120
 * type C = Num.Factorial<-3>; // -6
 * ```
 * ---------------------------
 * Do you have any questions about {@link Factorial} usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Factorial<TNumber extends number> =
	And<IsValidNumberInput<TNumber>, Not<IsFloat<TNumber>>> extends true
		? {
				true: _Factorial<TNumber>;
				false: Opposite<_Factorial<Opposite<TNumber>>>;
			}[`${IsPositive<TNumber>}`]
		: number;
