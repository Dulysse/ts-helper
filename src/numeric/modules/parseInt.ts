import type { Satisfy } from "@/operator";

import { Test } from "@/test";

Test.Describe(
	"Parse a string litteral to integer number",
	Test.It<ParseInt<"10.23">, 10.23, typeof Test.Out.FAIL>(),
	Test.It<ParseInt<`${string}.2`>, number, typeof Test.Out.PASS>(),
	Test.It<ParseInt<"0">, 0, typeof Test.Out.PASS>(),
	Test.It<ParseInt<"0.34" | "1">, 0.34 | 1, typeof Test.Out.FAIL>(),
);

/**
 * - ParseInt `T` it will return the string as integer number
 *
 * @template T - The string to parse as integer.
 * @example
 * ```tsx
 * import type { Num } from "@dulysse1/ts-helper";
 *
 * type A = Num.ParseInt<"2.2">; // 2
 * type B = Num.ParseInt<"90">; // 90
 * type C = Num.ParseInt<"s90">; // never
 * ```
 * ---------------------------
 * Do you have any questions about `ParseInt` usage ?
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
