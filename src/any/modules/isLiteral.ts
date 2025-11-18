import type { Not } from "@/operator";
import type { IsPrimitive } from "@/any";

import { Test } from "@/test";

Test.Describe(
	"Check if a type is a literal type",
	Test.It<IsLiteral<"hello">, true, typeof Test.Out.PASS>(),
	Test.It<IsLiteral<1 | 2 | 3>, true, typeof Test.Out.PASS>(),
	Test.It<IsLiteral<true>, true, typeof Test.Out.PASS>(),
	Test.It<IsLiteral<bigint>, false, typeof Test.Out.PASS>(),
	Test.It<IsLiteral<symbol>, false, typeof Test.Out.PASS>(),
	Test.It<IsLiteral<string | number>, false, typeof Test.Out.PASS>(),
	Test.It<IsLiteral<string | 1>, boolean, typeof Test.Out.PASS>(),
);

/**
 * - Check if `T` is a literal type.
 * @template T - The type to check.
 * @example
 * ```tsx
 * import type { Any } from "@dulysse1/ts-helper";
 *
 * type A = Any.IsLiteral<"hello">; // true
 * type B = Any.IsLiteral<1>; // true
 * type C = Any.IsLiteral<true>; // true
 * ```
 * ---------------------------
 * Do you have any questions about `IsLiteral` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type IsLiteral<T> = Not<IsPrimitive<T>>;
