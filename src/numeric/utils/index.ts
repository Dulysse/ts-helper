import type {
	GreaterEq,
	IsFloat,
	Lower,
	ParseFloat,
	ParseInt,
} from "@/numeric";
import type { NextPositive } from "@/numeric/modules/increment";
import type { IsEqual, Not, Or } from "@/operator";
import type { Split, Width } from "@/string";
import type { IsUnion } from "@/union";

export declare type IsValidNumberInput<TNumber extends number> =
	IsUnion<TNumber> extends true
		? false
		: TNumber extends number
			? IsEqual<TNumber, number> extends true
				? false
				: `${TNumber}` extends `${infer _}.${infer Decimal}`
					? Lower<Width<Decimal>, 3>
					: true
			: false;

export declare type BuildTuple<
	L extends number,
	V = unknown,
	T extends unknown[] = [],
> =
	IsEqual<L, number> extends true
		? never
		: T["length"] extends L
			? T
			: BuildTuple<L, V, [...T, V]>;

export declare type DecimalOf<T extends string> =
	T extends `${infer TNumber extends number}`
		? Or<IsValidNumberInput<TNumber>, Not<IsFloat<TNumber>>> extends true
			? Split<T> extends [`${infer Head extends number}`, ...infer Tail]
				? IsEqual<Tail, []> extends true
					? ParseInt<`${Head}0`>
					: Tail extends [`${infer Second extends number}`, ...infer Tail]
						? ParseInt<`${Head}${Tail[0] extends `${UpperRoundingNumber}` ? NextPositive<Second> : Second}`>
						: never
				: never
			: never
		: never;

export declare type SubstractPositive<N1 extends number, N2 extends number> =
	BuildTuple<N1> extends [...BuildTuple<N2>, ...infer Rest]
		? Rest["length"]
		: never;

export declare type PositiveRange<
	N extends number,
	TResult extends number[] = [],
> =
	IsEqual<N, number> extends true
		? number[]
		: TResult["length"] extends N
			? TResult
			: PositiveRange<N, [...TResult, [...TResult, unknown]["length"]]>;

export declare type OppositeDecimal<T extends keyof DecimalMap> = DecimalMap[T];

export declare type DecimalMap = {
	[K in PositiveRange<99>[number]]: SubstractPositive<100, K>;
};

export declare type Sign = "+" | "-";

export declare type GetSign<TNumber1 extends number, TNumber2 extends number> =
	GreaterEq<ParseFloat<`${TNumber1}`>, ParseFloat<`${TNumber2}`>> extends true
		? "+"
		: "-";

export declare type ParseDecimal<TNumber extends number> =
	Lower<TNumber, 10> extends true ? `0${TNumber}` : TNumber;

export declare type EvenNumber = 0 | 2 | 4 | 6 | 8;
export declare type UpperRoundingNumber = 5 | 6 | 7 | 8 | 9;
