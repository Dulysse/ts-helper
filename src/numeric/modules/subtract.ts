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
	DecimalOf,
	ParseDecimal,
} from "../utils";
import type { _Add } from "@/numeric/modules/add";

import * as Test from "@/test/local";

Test.Describe(
	"Substract a number from another",
	Test.It<Subtract<10, 3>, 7, Test.Out.PASS>(),
	Test.It<Subtract<134.67, 45.87>, 88.8, Test.Out.PASS>(),
	Test.It<Subtract<typeof Infinity, -10>, number, Test.Out.PASS>(),
);

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
	TDecimal1 extends number = `${TNumber1}` extends `${string}.${infer D}`
		? DecimalOf<D>
		: 100,
> =
	And<IsValidNumberInput<TNumber1>, IsValidNumberInput<TNumber2>> extends true
		? IsPositive<TNumber2> extends true
			? `${TNumber2}` extends `0.${infer TDecimal2}`
				? {
						"+": {
							true: ParseFloat<`${PickNumerator<TNumber1>}.${ParseDecimal<_Subtract<TDecimal1, DecimalOf<TDecimal2>>>}`>;
							false: ParseFloat<`${PickNumerator<Decrement<TNumber1>>}.${ParseDecimal<_Subtract<_Add<TDecimal1, 100>, DecimalOf<TDecimal2>>>}`>;
						};
						"-": {
							true: ParseFloat<`${PickNumerator<TNumber1>}.${ParseDecimal<_Subtract<_Add<DecimalOf<TDecimal2>, 100>, TDecimal1>>}`>;
							false: ParseFloat<`${PickNumerator<Decrement<TNumber1>>}.${ParseDecimal<_Subtract<DecimalOf<TDecimal2>, TDecimal1>>}`>;
						};
					}[TSign][`${GreaterEq<TDecimal1, DecimalOf<TDecimal2>>}`]
				: Equal<TNumber2, 0> extends true
					? TNumber1
					: _Subtract<
							Decrement<TNumber1>,
							Decrement<TNumber2>,
							TSign,
							TDecimal1
						>
			: number
		: number;

/**
 * - Subtract `TNumber2` from `TNumber1`
 * - ⚠️ Returns an absolute result with a precision of two decimals for numbers that don't reach compiler limits, otherwise it returns an `explicit result`. ⚠️
 *
 * @template TNumber1 - The first number (the minuend).
 * @template TNumber2 - The second number (the subtrahend).
 * @example
 * ```tsx
 * import type { Num } from "@dulysse1/ts-helper";
 *
 * type A = Num.Subtract<10, 10>; // 0
 * type B = Num.Subtract<10, -40>; // 40
 * type C = Num.Subtract<12.4, 3.2>; // 9.2  NEW!
 * ```
 * ---------------------------
 * Do you have any questions about `Subtract` usage ?
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
