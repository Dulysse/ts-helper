import type { Numbers } from "./utils/numbers.map";

declare type Equal<A, B> = A extends B ? (B extends A ? true : false) : false;

declare type Satisfy<A, B> = A extends B ? A : B;

declare type Or<A extends boolean, B extends boolean> = {
	true: {
		true: true;
		false: true;
	};
	false: {
		true: true;
		false: false;
	};
}[`${A}`][`${B}`];

declare type And<A extends boolean, B extends boolean> = {
	true: {
		true: true;
		false: false;
	};
	false: {
		true: false;
		false: false;
	};
}[`${A}`][`${B}`];

declare type IsValidInput<T extends number> = Equal<T, number> extends true
	? false
	: T extends Numbers[number]
	? true
	: false;

declare type GetNext<
	T extends number,
	N extends readonly number[] = Numbers,
> = IsValidInput<T> extends true
	? N extends readonly [infer First, infer Next, ...infer Rest]
		? Equal<First, T> extends true
			? Next
			: GetNext<T, Satisfy<[Next, ...Rest], readonly number[]>>
		: never
	: never;

declare type GetPrevious<
	T extends number,
	N extends readonly number[] = Numbers,
> = IsValidInput<T> extends true
	? N extends readonly [infer First, infer Next, ...infer Rest]
		? Equal<Next, T> extends true
			? First
			: GetPrevious<T, Satisfy<[Next, ...Rest], readonly number[]>>
		: never
	: never;

export declare type Increment<T extends number> = GetNext<T>;

export declare type Decrement<T extends number> = GetPrevious<T>;

export declare type Greater<
	T1 extends number,
	T2 extends number,
	N extends readonly number[] = Numbers,
> = And<IsValidInput<T1>, IsValidInput<T2>> extends true
	? N extends readonly [infer First, ...infer Next]
		? Equal<First, T1> extends true
			? false
			: Equal<First, T2> extends true
			? Equal<T1, T2> extends true
				? false
				: true
			: Greater<T1, T2, Satisfy<Next, readonly number[]>>
		: never
	: never;

export declare type Lower<
	T1 extends number,
	T2 extends number,
	N extends readonly number[] = Numbers,
> = And<IsValidInput<T1>, IsValidInput<T2>> extends true
	? N extends readonly [infer First, ...infer Next]
		? Equal<First, T1> extends true
			? Equal<T1, T2> extends true
				? false
				: true
			: Equal<First, T2> extends true
			? false
			: Lower<T1, T2, Satisfy<Next, readonly number[]>>
		: never
	: never;

export declare type IsNegate<T extends number> = Lower<T, 0>;

export declare type IsPositive<T extends number> = Or<
	Equal<T, 0>,
	Greater<T, 0>
>;

declare type AddPositive<
	T1 extends number,
	T2 extends number,
> = IsValidInput<T1> extends true
	? Equal<T2, 0> extends true
		? T1
		: AddPositive<GetNext<T1>, GetPrevious<T2>>
	: never;

declare type AddNegative<
	T1 extends number,
	T2 extends number,
> = IsValidInput<T1> extends true
	? Equal<T2, 0> extends true
		? T1
		: AddNegative<GetPrevious<T1>, GetNext<T2>>
	: never;

export declare type Add<T1 extends number, T2 extends number> = And<
	IsValidInput<T1>,
	IsValidInput<T2>
> extends true
	? {
			true: AddPositive<T1, T2>;
			false: AddNegative<T1, T2>;
	  }[`${Satisfy<IsPositive<T2>, boolean>}`]
	: never;

declare type SubPositive<
	T1 extends number,
	T2 extends number,
> = IsValidInput<T1> extends true
	? Equal<T2, 0> extends true
		? T1
		: SubPositive<GetPrevious<T1>, GetPrevious<T2>>
	: never;

declare type SubNegative<
	T1 extends number,
	T2 extends number,
> = IsValidInput<T1> extends true
	? Equal<T2, 0> extends true
		? T1
		: SubNegative<GetNext<T1>, GetNext<T2>>
	: never;

export declare type Sub<T1 extends number, T2 extends number> = And<
	IsValidInput<T1>,
	IsValidInput<T2>
> extends true
	? {
			true: SubPositive<T1, T2>;
			false: SubNegative<T1, T2>;
	  }[`${Satisfy<IsPositive<T2>, boolean>}`]
	: never;
