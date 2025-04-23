import type { IsFloat, IsPositive, Opposite } from "@/numeric";
import type { And, Equal, Satisfy } from "@/operator";
import type { Split } from "@/string";

export declare type GetBiggestNumber<
	TNumber1 extends number,
	TNumber2 extends number,
	L extends readonly number[] = [],
> =
	Equal<TNumber1, L["length"]> extends true
		? "lower"
		: Equal<TNumber2, L["length"]> extends true
			? "greater"
			: GetBiggestNumber<TNumber1, TNumber2, [...L, 0]>;

export declare type _CompareDenominators<
	TDenominator1 extends string[],
	TDenominator2 extends string[],
> = TDenominator1 extends [`${infer TNumber1 extends number}`, ...infer Rest1]
	? TDenominator2 extends [`${infer TNumber2 extends number}`, ...infer Rest2]
		? Equal<TNumber1, TNumber2> extends true
			? _CompareDenominators<Satisfy<Rest1, string[]>, Satisfy<Rest2, string[]>>
			: GetBiggestNumber<TNumber1, TNumber2>
		: "greater"
	: "lower";

export declare type _ComparePositive<
	TNumber1 extends number,
	TNumber2 extends number,
> =
	And<IsFloat<TNumber1>, IsFloat<TNumber2>> extends true
		? `${TNumber1}` extends `${infer Numerator1 extends number}.${infer TDenominator1}`
			? `${TNumber2}` extends `${infer Numerator2 extends number}.${infer TDenominator2}`
				? Equal<Numerator1, Numerator2> extends true
					? _CompareDenominators<Split<TDenominator1>, Split<TDenominator2>>
					: GetBiggestNumber<Numerator1, Numerator2>
				: never
			: never
		: IsFloat<TNumber1> extends true
			? `${TNumber1}` extends `${infer Numerator extends number}.${infer Denominator extends number}`
				? Equal<Numerator, TNumber2> extends true
					? Denominator extends 0
						? "equal"
						: "greater"
					: GetBiggestNumber<Numerator, TNumber2>
				: never
			: IsFloat<TNumber2> extends true
				? `${TNumber2}` extends `${infer Numerator extends number}.${infer Denominator extends number}`
					? Equal<Numerator, TNumber1> extends true
						? Denominator extends 0
							? "equal"
							: "lower"
						: GetBiggestNumber<TNumber1, Numerator>
					: never
				: GetBiggestNumber<TNumber1, TNumber2>;

export declare type _Compare<
	TNumber1 extends number,
	TNumber2 extends number,
> = {
	true: {
		true: _ComparePositive<TNumber1, TNumber2>;
		false: "greater";
	};
	false: {
		true: "lower";
		false: _ComparePositive<Opposite<TNumber2>, Opposite<TNumber1>>;
	};
}[`${IsPositive<TNumber1>}`][`${IsPositive<TNumber2>}`];

/**
 * - Compare number `TNumber1` with `TNumber2` it will return (`"lower"`, `"greater"` or `"equal"`)
 * - ⚠️ Returns an absolute re ult for numbers that don't reach compiler limits, otherwise it returns an `explicit result`. ⚠️
 * ---------------------------
 * @example
 * ```tsx
 * import type { Num } from "@dulysse1/ts-helper";
 *
 * type A = Num.Compare<-10, 10>; // "lower"
 * type B = Num.Compare<23, 10>; // "greater"
 * ```
 * ---------------------------
 * Do you have any questions about {@link Compare} usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Compare<TNumber1 extends number, TNumber2 extends number> =
	Equal<TNumber1, TNumber2> extends true
		? "equal"
		: _Compare<TNumber1, TNumber2>;
