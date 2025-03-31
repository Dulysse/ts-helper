import { Equal } from "@/operator";
import { IsUnion } from "@/union";

export declare type IsValidNumberInput<TNumber extends number> =
	Equal<TNumber, number> extends true
		? false
		: IsUnion<TNumber> extends true
			? false
			: IsFloatInput<TNumber> extends true
				? false
				: true;

export declare type IsFloatInput<TNumber extends number> =
	`${TNumber}` extends `${infer _ extends number}.${infer __ extends number}`
		? true
		: false;

export declare type Compare<
	TNumber1 extends number,
	TNumber2 extends number,
	L extends readonly number[] = [],
> =
	Equal<TNumber1, TNumber2> extends true
		? "equal"
		: Equal<TNumber1, L["length"]> extends true
			? "lower"
			: Equal<TNumber2, L["length"]> extends true
				? "greater"
				: Compare<TNumber1, TNumber2, [...L, 0]>;

export declare type BuildTuple<
	L extends number,
	T extends number[] = [],
> = T["length"] extends L ? T : BuildTuple<L, [...T, 0]>;
