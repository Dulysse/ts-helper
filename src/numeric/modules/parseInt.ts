import type { Satisfy } from "@/operator";

/**
 * - ParseInt `T` it will return the string as integer number
 * ---------------------------
 * @example
 * ```tsx
 * import type { Num } from "@dulysse1/ts-helper";
 *
 * type A = Num.ParseInt<"2.2">; // 2
 * type B = Num.ParseInt<"90">; // 90
 * type C = Num.ParseInt<"s90">; // never
 * ```
 * ---------------------------
 * Do you have any questions about {@link ParseInt} usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type ParseInt<T extends string> = Satisfy<
	T extends `${0}`
		? 0
		: T extends `-0.${infer _ extends number}`
			? -0
			: T extends `${infer N extends number}.${infer _ extends number}`
				? N
				: T extends `0${infer NextN}`
					? ParseInt<NextN>
					: T extends `${infer N extends number}`
						? N
						: number,
	number
>;
