import type {
	BuildTuple,
	OppositeDecimal,
	IsValidNumberInput,
	TwoDigit,
} from "../utils";
import type {
	IsFloat,
	IsPositive,
	Lower,
	Opposite,
	ParseFloat,
} from "@/numeric";
import type { PreviousPositive } from "@/numeric/modules/decrement";

export declare type NextPositive<TNumber extends number> =
	BuildTuple<TNumber> extends [...infer U] ? [...U, 0]["length"] : never;

declare type Next<TNumber extends number> = {
	true: NextPositive<TNumber>;
	false: Opposite<PreviousPositive<Opposite<TNumber>>>;
}[`${IsPositive<TNumber>}`];

/**
 * - Increment a number `TNumber` of one
 * - ⚠️ Returns an absolute result for numbers that don't reach compiler limits, otherwise it returns an `explicit result`. ⚠️
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
				? ParseFloat<`-0.${Decimal}`>
				: `${TNumber}` extends `-0.${infer Decimal}`
					? ParseFloat<`0.${Lower<OppositeDecimal<TwoDigit<Decimal>>, 10> extends true ? `0${OppositeDecimal<TwoDigit<Decimal>>}` : OppositeDecimal<TwoDigit<Decimal>>}`>
					: `${TNumber}` extends `${infer Numerator extends number}.${infer Decimal}`
						? ParseFloat<`${Next<Numerator>}.${Decimal}`>
						: never
			: Next<TNumber>
		: number;
