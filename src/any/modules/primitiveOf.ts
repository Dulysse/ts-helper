import * as Test from "@/test/local";

Test.Describe(
	"Extract the primitive type of a value",
	Test.It<PrimitiveOf<"hello">, string, Test.Out.PASS>(),
	Test.It<PrimitiveOf<1>, number, Test.Out.PASS>(),
	Test.It<PrimitiveOf<true>, boolean, Test.Out.PASS>(),
	Test.It<PrimitiveOf<bigint>, bigint, Test.Out.PASS>(),
	Test.It<PrimitiveOf<symbol>, symbol, Test.Out.PASS>(),
);

/**
 * - `PrimitiveOf<T>` is a type that extracts the primitive type of `T`.
 * @template T - The type to extract the primitive type from.
 * @example
 * ```tsx
 * import type { Any } from "@dulysse1/ts-helper";
 *
 * type A = Any.PrimitiveOf<"hello">; // string
 * type B = Any.PrimitiveOf<1>; // number
 * type C = Any.PrimitiveOf<true>; // boolean
 * ```
 * ---------------------------
 * Do you have any questions about `PrimitiveOf` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type PrimitiveOf<T> = T extends string
	? string
	: T extends number
		? number
		: T extends boolean
			? boolean
			: T extends bigint
				? bigint
				: T extends symbol
					? symbol
					: never;
