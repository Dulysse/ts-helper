import type { Equal, And } from "@/operator";
import type {
	Decrement,
	GreaterEq,
	IsPositive,
	Opposite,
	ParseFloat,
	ParseInt,
} from "@/numeric";
import type {
	GetSign,
	IsValidNumberInput,
	Sign,
	TwoDigit,
	TwoDigitify,
} from "../utils";
import type { _Add } from "@/numeric/modules/add";

declare type PickNumerator<TNumber extends number> =
	Equal<TNumber, ParseInt<`${TNumber}`>> extends true
		? `${TNumber}`
		: `${TNumber}` extends `${infer Numerator}.${string}`
			? Numerator
			: never;

export declare type _Subtract<
	TNumber1 extends number,
	TNumber2 extends number,
	TSign extends Sign = "+",
	TDenominator1 extends number = `${TNumber1}` extends `${string}.${infer D}`
		? TwoDigit<D>
		: 100,
> =
	And<IsValidNumberInput<TNumber1>, IsValidNumberInput<TNumber2>> extends true
		? IsPositive<TNumber2> extends true
			? `${TNumber2}` extends `0.${infer TDenominator2}`
				? {
						"+": {
							true: ParseFloat<`${PickNumerator<TNumber1>}.${TwoDigitify<_Subtract<TDenominator1, TwoDigit<TDenominator2>>>}`>;
							false: ParseFloat<`${PickNumerator<Decrement<TNumber1>>}.${TwoDigitify<_Subtract<_Add<TDenominator1, 100>, TwoDigit<TDenominator2>>>}`>;
						};
						"-": {
							true: ParseFloat<`${PickNumerator<TNumber1>}.${TwoDigitify<_Subtract<_Add<TwoDigit<TDenominator2>, 100>, TDenominator1>>}`>;
							false: ParseFloat<`${PickNumerator<Decrement<TNumber1>>}.${TwoDigitify<_Subtract<TwoDigit<TDenominator2>, TDenominator1>>}`>;
						};
					}[TSign][`${GreaterEq<TDenominator1, TwoDigit<TDenominator2>>}`]
				: Equal<TNumber2, 0> extends true
					? TNumber1
					: _Subtract<
							Decrement<TNumber1>,
							Decrement<TNumber2>,
							TSign,
							TDenominator1
						>
			: number
		: number;

/**
 * - Subtract `TNumber2` from `TNumber1`
 * - ⚠️ Returns an absolute result for numbers that don't reach compiler limits, otherwise it returns an `explicit result`. ⚠️
 * ---------------------------
 * @example
 * ```tsx
 * import type { Num } from "@dulysse1/ts-helper";
 *
 * type A = Num.Subtract<10, 10>; // 0
 * type B = Num.Subtract<10, -40>; // 40
 * type C = Num.Subtract<12.4, 3.2>; // 9.2  NEW!
 * ```
 * ---------------------------
 * Do you have any questions about {@link Subtract} usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Subtract<TNumber1 extends number, TNumber2 extends number> =
	And<IsValidNumberInput<TNumber1>, IsValidNumberInput<TNumber2>> extends true
		? {
				true: {
					true: _Subtract<
						ParseFloat<`${TNumber1}`>,
						ParseFloat<`${TNumber2}`>,
						GetSign<TNumber1, TNumber2>
					>;
					false: _Add<
						ParseFloat<`${TNumber1}`>,
						Opposite<ParseFloat<`${TNumber2}`>>
					>;
				};
				false: {
					true: Opposite<
						_Add<ParseFloat<`${TNumber2}`>, Opposite<ParseFloat<`${TNumber1}`>>>
					>;
					false: Opposite<
						_Subtract<
							Opposite<ParseFloat<`${TNumber1}`>>,
							Opposite<ParseFloat<`${TNumber2}`>>,
							GetSign<TNumber1, TNumber2>
						>
					>;
				};
			}[`${IsPositive<ParseFloat<`${TNumber1}`>>}`][`${IsPositive<ParseFloat<`${TNumber2}`>>}`]
		: number;
