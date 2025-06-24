import type { Implicit } from "@/any";

import * as Test from "@/test/local";

Test.Describe(
	"Check if a type is exact type any",
	Test.It<Is<Implicit>, true, Test.Out.PASS>(),
	Test.It<Is<unknown>, true, Test.Out.FAIL>(),
	Test.It<Is<string>, true, Test.Out.FAIL>(),
);

/**
 * - Check if `T` is equal to `any`
 *
 * @template T - The type to check
 * @example
 * ```tsx
 * import type { Any } from "@dulysse1/ts-helper";
 *
 * type A = Any.Is<"hello">; // false
 * type B = Any.Is<any>; // true
 * ```
 * ---------------------------
 * Do you have any questions about `Equal` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Is<T> = Implicit extends T
	? [T] extends [{}]
		? true
		: false
	: false;
