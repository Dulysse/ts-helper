import type { FillRange } from "@/array";
import { Infer } from "@/string";
import type { Out } from "@/test";

/**
 * The `minimal` amount of test for {@link DescribeFn}.
 */
declare type MIN_TEST = 1;

/**
 * The `maximal` amount of test for {@link DescribeFn}.
 */
declare type MAX_TEST = 8;

/**
 * - the `describe` function for unit tests allow you to test a function with multiple test.
 *
 * @param description - The description of the incoming tests (minimum 10 characters).
 * @param test - a rest array of tests that should pass, they should all pass and you must use an amount of test between {@link MIN_TEST} and {@link MAX_TEST}.
 * @example
 * ```tsx
 * import { Num, Test } from "@dulysse1/ts-helper";
 *
 * Test.Describe(
 *    "Add a number to another",
 *    Test.It<Num.Add<1.1, 30>, 31.1, Test.Out.PASS>(),
 *    Test.It<Num.Add<5, -10>, 66, Test.Out.FAIL>(),
 * );
 * ```
 * ---------------------------
 * Do you have any questions about `Describe` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare function DescribeFn<TDescription extends string>(
	description: Infer<TDescription, { minChar: 10 }>,
	...test: FillRange<Out.PASS, MIN_TEST, MAX_TEST>
): void;

export declare const Describe: typeof DescribeFn;
