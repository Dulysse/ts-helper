import type { IsValidNumberInput } from "@/numeric/utils";
import * as Test from "@/test";

Test.Describe(
	"Check if a number is a float number",
	Test.It<IsFloat<number>, boolean, Test.Out.PASS>(),
	Test.It<IsFloat<2.33>, true, Test.Out.PASS>(),
	Test.It<IsFloat<-5>, false, Test.Out.PASS>(),
);

/**
 * - Check if a number `TNumber` is a float number
 *
 * @template TNumber - The number to check.
 * @example
 * ```tsx
 * import type { Num } from "@dulysse1/ts-helper";
 *
 * type A = Num.IsFloat<-23>; // false
 * type B = Num.IsFloat<10.29>; // true
 * ```
 * ---------------------------
 * Do you have any questions about `IsFloat` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type IsFloat<TNumber extends number> =
	IsValidNumberInput<TNumber> extends true
		? `${TNumber}` extends `${infer _ extends number}.${infer __ extends number}`
			? true
			: false
		: boolean;
