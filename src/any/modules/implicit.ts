import { Test } from "@/test";

Test.Describe(
	"an implicit any type",
	Test.It<Implicit, string, typeof Test.Out.FAIL>(),
	Test.It<Implicit, number, typeof Test.Out.FAIL>(),
	Test.It<Implicit, unknown, typeof Test.Out.FAIL>(),
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	Test.It<Implicit, any, typeof Test.Out.PASS>(),
);

/**
 * - The only valid way to use `any` as type. it's provide you to override the default eslint `@typescript-eslint/no-explicit-any` rule.
 * But be careful ! Don't use this type in your code for bad reasons.
 * @example
 * ```tsx
 * import type { Any } from "@dulysse1/ts-helper";
 *
 * declare type AnyFunction = (...args: Any.Implicit[]) => Any.Implicit; // "right way !"
 * const name: Any.Implicit = {} // "wrong way !"
 * ```
 * ---------------------------
 * Do you have any questions about `Implicit` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export declare type Implicit = any;
