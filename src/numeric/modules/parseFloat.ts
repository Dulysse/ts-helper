import type { Satisfy } from "@/operator";

/**
 * - ParseFloat `T` it will return the string as float number
 * 
 * @template T - The string to parse as float.
  * @example
 * ```tsx
 * import type { Num } from "@dulysse1/ts-helper";
import IsZero from '@/numeric';
 *
 * type A = Num.ParseFloat<"2.2">; // 2.2
 * type B = Num.ParseFloat<"90">; // 90
 * type C = Num.ParseFloat<"s90">; // never
 * ```
 * ---------------------------
 * Do you have any questions about `ParseFloat` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type ParseFloat<T extends string> = Satisfy<
	T extends `${0}`
		? 0
		: T extends `${infer N}.${infer D}0`
			? D extends ""
				? ParseFloat<`${N}`>
				: ParseFloat<`${N}.${D}`>
			: T extends `0${infer NextN}`
				? NextN extends `.${string}`
					? T extends `${infer N extends number}`
						? N
						: number
					: ParseFloat<NextN>
				: T extends `${infer N extends number}`
					? N
					: number,
	number
>;
