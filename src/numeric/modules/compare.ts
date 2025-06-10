import type { IsFloat, IsPositive, Opposite } from "@/numeric";
import type { And, Equal, Satisfy } from "@/operator";
import type { Split } from "@/string";

/**
 * - The `Comparators` enum is used to define the possible comparison results
 *  when comparing two numbers.
 * - It includes three possible values:
 *  - `LOWER`: Indicates that the first number is less than the second number.
 * - `GREATER`: Indicates that the first number is greater than the second number.
 * - `EQUAL`: Indicates that the two numbers are equal.
 * - This enum is used in the `Compare` type to return the result of the comparison.
 * - ⚠️ Returns an absolute result with a precision of two decimals for numbers that don't reach compiler limits, otherwise it returns an `explicit result`. ⚠️
 */
export declare enum Comparators {
	LOWER = "lower",
	GREATER = "greater",
	EQUAL = "equal",
}

export declare type GetBiggestNumber<
	TNumber1 extends number,
	TNumber2 extends number,
	L extends readonly number[] = [],
> =
	Equal<TNumber1, L["length"]> extends true
		? Comparators.LOWER
		: Equal<TNumber2, L["length"]> extends true
			? Comparators.GREATER
			: GetBiggestNumber<TNumber1, TNumber2, [...L, 0]>;

export declare type _CompareDecimals<
	TDecimal1 extends string[],
	TDecimal2 extends string[],
> = TDecimal1 extends [`${infer TNumber1 extends number}`, ...infer Rest1]
	? TDecimal2 extends [`${infer TNumber2 extends number}`, ...infer Rest2]
		? Equal<TNumber1, TNumber2> extends true
			? _CompareDecimals<Satisfy<Rest1, string[]>, Satisfy<Rest2, string[]>>
			: GetBiggestNumber<TNumber1, TNumber2>
		: Comparators.GREATER
	: Comparators.LOWER;

export declare type _ComparePositive<
	TNumber1 extends number,
	TNumber2 extends number,
> =
	And<IsFloat<TNumber1>, IsFloat<TNumber2>> extends true
		? `${TNumber1}` extends `${infer Numerator1 extends number}.${infer TDecimal1}`
			? `${TNumber2}` extends `${infer Numerator2 extends number}.${infer TDecimal2}`
				? Equal<Numerator1, Numerator2> extends true
					? _CompareDecimals<Split<TDecimal1>, Split<TDecimal2>>
					: GetBiggestNumber<Numerator1, Numerator2>
				: never
			: never
		: IsFloat<TNumber1> extends true
			? `${TNumber1}` extends `${infer Numerator extends number}.${infer Decimal extends number}`
				? Equal<Numerator, TNumber2> extends true
					? Decimal extends 0
						? Comparators.EQUAL
						: Comparators.GREATER
					: GetBiggestNumber<Numerator, TNumber2>
				: never
			: IsFloat<TNumber2> extends true
				? `${TNumber2}` extends `${infer Numerator extends number}.${infer Decimal extends number}`
					? Equal<Numerator, TNumber1> extends true
						? Decimal extends 0
							? Comparators.EQUAL
							: Comparators.LOWER
						: GetBiggestNumber<TNumber1, Numerator>
					: never
				: GetBiggestNumber<TNumber1, TNumber2>;

export declare type _Compare<
	TNumber1 extends number,
	TNumber2 extends number,
> = {
	true: {
		true: _ComparePositive<TNumber1, TNumber2>;
		false: Comparators.GREATER;
	};
	false: {
		true: Comparators.LOWER;
		false: _ComparePositive<Opposite<TNumber2>, Opposite<TNumber1>>;
	};
}[`${IsPositive<TNumber1>}`][`${IsPositive<TNumber2>}`];

/**
 * - Compare number `TNumber1` with `TNumber2` it will return (`"lower"`, `"greater"` or `"equal"`)
 * - ⚠️ Returns an absolute re ult for numbers that don't reach compiler limits, otherwise it returns an `explicit result`. ⚠️
 *
 * @template TNumber1 - The first number to compare.
 * @template TNumber2 - The second number to compare.
 * @example
 * ```tsx
 * import type { Num } from "@dulysse1/ts-helper";
 *
 * type A = Num.Compare<-10, 10>; // "lower"
 * type B = Num.Compare<23, 10>; // "greater"
 * ```
 * ---------------------------
 * Do you have any questions about `Compare` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Compare<TNumber1 extends number, TNumber2 extends number> =
	Equal<TNumber1, TNumber2> extends true
		? Comparators.EQUAL
		: _Compare<TNumber1, TNumber2>;
