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

import { Test } from "@/test";

Test.Describe(
	"Get the factorial of a number",
	Test.It<Factorial<0>, 1, typeof Test.Out.PASS>(),
	Test.It<Factorial<-3>, -6, typeof Test.Out.PASS>(),
	Test.It<Factorial<5>, 120, typeof Test.Out.PASS>(),
	Test.It<Factorial<1.2>, 1, typeof Test.Out.FAIL>(),
);

declare type _Factorial<TNumber extends number> =
	IsZero<TNumber> extends true
		? 1
		: Multiply<TNumber, _Factorial<Decrement<TNumber>>>;

/**
 * Get the factorial value of `TNumber`
 * - ⚠️ Returns an absolute result with a precision of two decimals for numbers that don't reach compiler limits, otherwise it returns an `explicit result`. ⚠️
 *
 * @template TNumber - The number to get the factorial of.
 * @example
 * ```tsx
 * import type { Num } from "@dulysse1/ts-helper";
 *
 * type A = Num.Factorial<0>; // 1
 * type B = Num.Factorial<5>; // 120
 * type C = Num.Factorial<-3>; // -6
 * ```
 * ---------------------------
 * Do you have any questions about `Factorial` usage ?
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
