import type { Equal } from "@/operator";
import type { Numbers } from "./numbers.map";

export declare type IsValidInput<T extends number> = Equal<
	T,
	number
> extends true
	? false
	: T extends Numbers[number]
	? true
	: false;
