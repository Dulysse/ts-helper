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
	Opposite,
	IsZero,
	ParseFloat,
	Lower,
} from "@/numeric";
import type { NextPositive } from "@/numeric/modules/increment";

export declare type PreviousPositive<TNumber extends number> =
	IsZero<TNumber> extends true
		? -1
		: BuildTuple<TNumber> extends [...infer U, infer _]
			? U["length"]
			: never;

declare type Previous<TNumber extends number> = {
	true: PreviousPositive<TNumber>;
	false: Opposite<NextPositive<Opposite<TNumber>>>;
}[`${IsPositive<TNumber>}`];

/**
 * - Decrement a number `TNumber` of one
 * - ⚠️ Returns an absolute result with a precision of two decimals for numbers that don't reach compiler limits, otherwise it returns an `explicit result`. ⚠️
 *
 * @template TNumber - The number to decrement.
 * @example
 * ```tsx
 * import type { Num } from "@dulysse1/ts-helper";
 *
 * type A = Num.Decrement<10>; // 9
 * ```
 * ---------------------------
 * Do you have any questions about `Decrement` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Decrement<TNumber extends number> =
	IsValidNumberInput<TNumber> extends true
		? IsFloat<TNumber> extends true
			? `${TNumber}` extends `0.${infer Decimal}`
				? ParseFloat<`-0.${Lower<OppositeDecimal<DecimalOf<Decimal>>, 10> extends true ? `0${OppositeDecimal<DecimalOf<Decimal>>}` : OppositeDecimal<DecimalOf<Decimal>>}`>
				: `${TNumber}` extends `${infer Numerator extends number}.${infer Decimal}`
					? ParseFloat<`${Previous<Numerator>}.${ParseDecimal<DecimalOf<Decimal>>}`>
					: never
			: Previous<TNumber>
		: number;
