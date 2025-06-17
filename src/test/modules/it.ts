import type { Equal } from "@/operator";
import type { Out } from "@/test";

/**
 * - the `it` function for unit tests allow you to test a test with template parameters and return a {@link Out} response.
 *
 * @template Type - The entry type to compare with the expected type.
 * @template Expect - The output type expected that will be compared with the input type.
 * @template Output - The expected result of the compare between the input and expected type.
 * @param description - The description of the current test.
 * @example
 * ```tsx
 * import type { Num, Test } from "@dulysse1/ts-helper";
 *
 * Test.Describe(
 *    "Add a number to another",
 *    Test.It<Num.Add<1.1, 30>, 31.1, Test.Out.PASS>(), // return Out.PASS
 *    Test.It<Num.Add<5, -10>, 66, Test.Out.FAIL>(), // return Out.PASS
 * );
 * ```
 * ---------------------------
 * Do you have any questions about `It` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare function ItFn<Type, Expect, Output extends Out>(
	description?: string,
): {
	true: {
		[Out.PASS]: Out.PASS;
		[Out.FAIL]: Out.FAIL;
	};
	false: {
		[Out.PASS]: Out.FAIL;
		[Out.FAIL]: Out.PASS;
	};
}[`${Equal<Type, Expect>}`][Output];

export declare const It: typeof ItFn;
