import type { Equal, And } from "@/operator";
import type {
	Increment,
	Decrement,
	IsPositive,
	ParseFloat,
	Opposite,
	ParseInt,
	GreaterEq,
} from "@/numeric";
import type {
	GetSign,
	IsValidNumberInput,
	DecimalOf,
	ParseDecimal,
} from "../utils";
import type { _Subtract } from "@/numeric/modules/subtract";

import { Test } from "@/test";

Test.Describe(
	"Add a number to another",
	Test.It<Add<1.1, 30>, 31.1, typeof Test.Out.PASS>(),
	Test.It<Add<5, -10>, -5, typeof Test.Out.PASS>(),
	Test.It<Add<5, -10>, number, typeof Test.Out.FAIL>(),
);

export declare type _Add<TNumber1 extends number, TNumber2 extends number> =
	And<IsValidNumberInput<TNumber1>, IsValidNumberInput<TNumber2>> extends true
		? IsPositive<TNumber2> extends true
			? `${TNumber2}` extends `0.${infer TDecimal2}`
				? `${TNumber1}` extends `${infer _}.${infer TDecimal1}`
					? `${_Add<DecimalOf<TDecimal1>, DecimalOf<TDecimal2>>}` extends `${infer D extends number}`
						? GreaterEq<D, 100> extends true
							? ParseFloat<`${Increment<ParseInt<`${TNumber1}`>>}.${ParseDecimal<_Subtract<D, 100>>}`>
							: ParseFloat<`${ParseInt<`${TNumber1}`>}.${ParseDecimal<D>}`>
						: never
					: ParseFloat<`${TNumber1}.${DecimalOf<TDecimal2>}`>
				: Equal<TNumber2, 0> extends true
					? TNumber1
					: _Add<Increment<TNumber1>, Decrement<TNumber2>>
			: number
		: number;

/**
 * - Add `TNumber2` to `TNumber1`
 * - ⚠️ Returns an absolute result with a precision of two decimals for numbers that don't reach compiler limits, otherwise it returns an `explicit result`. ⚠️
 *
 * @template TNumber1 - The first number to add.
 * @template TNumber2 - The second number to add.
 * @example
 * ```tsx
 * import type { Num } from "@dulysse1/ts-helper";
 *
 * type A = Num.Add<10, 10>; // 20
 * type B = Num.Add<10, -40>; // -30
 * type C = Num.Add<12.41, 3.21>; // 15.62  NEW!
 * ```
 * ---------------------------
 * Do you have any questions about `Add` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Add<TNumber1 extends number, TNumber2 extends number> =
	And<IsValidNumberInput<TNumber1>, IsValidNumberInput<TNumber2>> extends true
		? {
				true: {
					true: _Add<ParseFloat<`${TNumber1}`>, ParseFloat<`${TNumber2}`>>;
					false: _Subtract<
						ParseFloat<`${TNumber1}`>,
						Opposite<ParseFloat<`${TNumber2}`>>,
						GetSign<TNumber1, TNumber2>
					>;
				};
				false: {
					true: _Subtract<
						ParseFloat<`${TNumber2}`>,
						Opposite<ParseFloat<`${TNumber1}`>>,
						GetSign<TNumber1, TNumber2>
					>;
					false: Opposite<
						_Add<
							Opposite<ParseFloat<`${TNumber1}`>>,
							Opposite<ParseFloat<`${TNumber2}`>>
						>
					>;
				};
			}[`${IsPositive<ParseFloat<`${TNumber1}`>>}`][`${IsPositive<ParseFloat<`${TNumber2}`>>}`]
		: number;
