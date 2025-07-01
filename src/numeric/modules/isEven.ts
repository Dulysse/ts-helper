import type { Last } from "@/array";
import type { ParseInt } from "@/numeric";
import type { EvenNumber, IsValidNumberInput } from "@/numeric/utils";
import type { Split } from "@/string";

import * as Test from "@/test";

Test.Describe(
	"Check if a number is an even number",
	Test.It<IsEven<number>, boolean, Test.Out.PASS>(),
	Test.It<IsEven<2.33>, true, Test.Out.PASS>(),
	Test.It<IsEven<-5>, false, Test.Out.PASS>(),
);

/**
 * - Check if a number `TNumber` is an `even` number
 *
 * @template TNumber - The number to check.
 * @example
 * ```tsx
 * import type { Num } from "@dulysse1/ts-helper";
 *
 * type A = Num.IsEven<-23>; // false
 * type B = Num.IsEven<10.29>; // true
 * ```
 * ---------------------------
 * Do you have any questions about `IsEven` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type IsEven<TNumber extends number> =
	IsValidNumberInput<TNumber> extends true
		? Last<Split<`${ParseInt<`${TNumber}`>}`>> extends `${EvenNumber}`
			? true
			: false
		: boolean;
