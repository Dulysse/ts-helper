import type { Or, Equal } from "@/operator";

/**
 * The allowed types of an array, can be readonly or readable
 */
export declare type TArray = unknown[] | readonly unknown[];

export declare type IsTuple<T extends TArray> = Or<
	Or<
		T extends [unknown, ...unknown[]] ? true : false,
		T extends readonly [unknown, ...unknown[]] ? true : false
	>,
	Or<
		Equal<T, []> extends true ? true : false,
		Equal<T, readonly []> extends true ? true : false
	>
> extends true
	? true
	: false;
