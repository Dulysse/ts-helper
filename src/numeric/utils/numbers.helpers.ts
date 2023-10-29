import type { Equal, Satisfy } from "@/operator";
import type { Numbers } from "./numbers.map";
import type { Reverse } from "@/array";

export declare type IsValidInput<T extends number> = Equal<
	T,
	number
> extends true
	? false
	: T extends Numbers[number]
	? true
	: false;

export declare type Range = `${Numbers[0]}` extends `-${infer R}` ? R : never;

export declare type IndexOf<
	N extends number,
	L extends readonly number[] = Numbers,
	I extends number[] = [],
> = L extends readonly [infer First, ...infer Next]
	? First extends N
		? I["length"]
		: IndexOf<
				N,
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
