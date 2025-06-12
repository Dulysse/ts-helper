/**
 * - the `out` result enum for unit tests show the expected response of a test.
 *
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
export declare enum Out {
	/**
	 * ✅ The output result of a passing test. ✅
	 */
	PASS = 1,
	/**
	 * ❌ The output result of a failing test. ❌
	 */
	FAIL = 0,
}
