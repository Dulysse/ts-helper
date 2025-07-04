import type {
	BuildTuple,
	OppositeDecimal,
	IsValidNumberInput,
	DecimalOf,
	ParseDecimal,
} from "../utils";
import type {
	IsFloat,
	IsPositive,
	Lower,
	Opposite,
	ParseFloat,
} from "@/numeric";
import type { PreviousPositive } from "@/numeric/modules/decrement";

import { Test } from "@/test";

Test.Describe(
	"Increment a number of one unit",
	Test.It<Increment<1>, 2, typeof Test.Out.PASS>(),
	Test.It<Increment<-0.56>, 0.44, typeof Test.Out.PASS>(),
	Test.It<Increment<1.902>, number, typeof Test.Out.PASS>(),
);

export declare type NextPositive<TNumber extends number> =
	BuildTuple<TNumber> extends [...infer U] ? [...U, 0]["length"] : never;

declare type Tail<TNumber extends number> = {
	true: NextPositive<TNumber>;
	false: Opposite<PreviousPositive<Opposite<TNumber>>>;
}[`${IsPositive<TNumber>}`];

/**
 * - Increment a number `TNumber` of one
 * - ⚠️ Returns an absolute result with a precision of two decimals for numbers that don't reach compiler limits, otherwise it returns an `explicit result`. ⚠️
 *
 * @template TNumber - The number to increment.
 * @example
 * ```tsx
 * import type { Num } from "@dulysse1/ts-helper";
 *
 * type A = Num.Increment<10>; // 11
 * ```
 * ---------------------------
 * Do you have any questions about `Increment` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Increment<TNumber extends number> =
	IsValidNumberInput<TNumber> extends true
		? IsFloat<TNumber> extends true
			? `${TNumber}` extends `-1.${infer Decimal}`
				? ParseFloat<`-0.${ParseDecimal<DecimalOf<Decimal>>}`>
				: `${TNumber}` extends `-0.${infer Decimal}`
					? ParseFloat<`0.${Lower<OppositeDecimal<DecimalOf<Decimal>>, 10> extends true ? `0${OppositeDecimal<DecimalOf<Decimal>>}` : OppositeDecimal<DecimalOf<Decimal>>}`>
					: `${TNumber}` extends `${infer Numerator extends number}.${infer Decimal}`
						? ParseFloat<`${Tail<Numerator>}.${ParseDecimal<DecimalOf<Decimal>>}`>
						: never
			: Tail<TNumber>
		: number;
