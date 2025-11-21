import type { FillRange } from "@/array";
import type { Infer } from "@/string";
import type { InferStringRules } from "@/string/modules/infer";
import { Out } from "@/test";

/**
 * The `minimal` amount of test for {@link DescribeFn}.
 */
declare type MIN_TEST = 1;

/**
 * The `maximal` amount of test for {@link DescribeFn}.
 */
declare type MAX_TEST = 8;

/**
 * The default rules for the `describe` function.
 * - `minChar`: 10 characters minimum.
 * - `maxChar`: 100 characters maximum.
 * - `alphanumeric`: false, meaning special characters are allowed.
 */
declare type DefaultDescribeRules = {
	/**
	 * The minimum number of characters for the description.
	 */
	minChar: 10;
	/**
	 * The maximum number of characters for the description.
	 */
	maxChar: 100;
	/**
	 * Whether the description must be alphanumeric or not.
	 */
	alphanumeric: false;
};

/**
 * - the `describe` function for unit tests allow you to test a function with multiple test.
 *
 * @param description - The description of the incoming tests (minimum 10 characters).
 * @param test - a rest array of tests that should pass, they should all pass and you must use an amount of test between {@link MIN_TEST} and {@link MAX_TEST}.
 * @example
 * ```tsx
 * import { Test, type Num } from "@dulysse1/ts-helper";
 *
 * Test.Describe(
 *    "Add a number to another",
 *    Test.It<Num.Add<1.1, 30>, 31.1, typeof Test.Out.PASS>(),
 *    Test.It<Num.Add<5, -10>, 66, typeof Test.Out.FAIL>(),
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
export declare function DescribeFn<
	TRules extends InferStringRules = DefaultDescribeRules,
	TDescription extends string = string,
>(
	description: Infer<TDescription, TRules>,
	...test: FillRange<MIN_TEST, MAX_TEST, Out.PASS>
): void;

export const Describe: typeof DescribeFn = (() => {}) as typeof DescribeFn;
