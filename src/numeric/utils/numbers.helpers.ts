import type { Equal, Or, Satisfy } from "@/operator";
import type { Numbers } from "./numbers.map";
import type { Reverse } from "@/array";
import type { IsUnion } from "@/union";

export declare type IsValidNumberInput<T extends number> = Or<
	Equal<T, number>,
	IsUnion<T>
> extends true
	? false
	: T extends Numbers[number]
	  ? true
	  : false;

export declare type Range = `${Numbers[0]}` extends `-${infer R}` ? R : never;

export declare type IndexOf<
	TNumber extends number,
	L extends readonly number[] = Numbers,
	I extends number[] = [],
> = L extends readonly [infer First, ...infer Next]
	? First extends TNumber
		? I["length"]
		: IndexOf<
				TNumber,
				Satisfy<Next, readonly number[]>,
				Satisfy<[First, ...I], number[]>
		  >
	: never;

export declare type PositiveNumbers<
	L extends readonly number[] = Reverse<Numbers>,
	Res extends readonly number[] = [],
> = L extends readonly [infer Start, ...infer Next]
	? Equal<Start, 0> extends true
		? Reverse<[...Res, 0]>
		: PositiveNumbers<
				Satisfy<Next, readonly number[]>,
				Satisfy<[...Res, Start], readonly number[]>
		  >
	: never;

export declare type NegativeNumbers<
	L extends readonly number[] = Numbers,
	Res extends readonly number[] = [],
> = L extends readonly [infer Start, ...infer Next]
	? Equal<Start, 0> extends true
		? Reverse<[...Res, 0]>
		: PositiveNumbers<
				Satisfy<Next, readonly number[]>,
				Satisfy<[...Res, Start], readonly number[]>
		  >
	: never;
