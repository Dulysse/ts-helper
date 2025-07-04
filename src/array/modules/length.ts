import type { DefaultArrayType } from "../utils";

import { Test } from "@/test";

Test.Describe(
	"Get the length of an array type",
	Test.It<Length<[1, 2]>, 2, typeof Test.Out.PASS>(),
	Test.It<Length<string[]>, number, typeof Test.Out.PASS>(),
	Test.It<Length<[]>, 0, typeof Test.Out.PASS>(),
	Test.It<Length<[2, 3, 4] | [1, 2]>, 2 | 3, typeof Test.Out.PASS>(),
);

/**
 * - Get the length of an array type `TArray`
 *
 * @template TArray - The array type to get the length from.
 * @example
 * ```tsx
 * import type { Arr } from "@dulysse1/ts-helper";
 *
 * type A = Arr.Length<[1, 2, 3]>; // 3
 * ```
 * ---------------------------
 * Do you have any questions about `Length` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Length<TArray extends DefaultArrayType> = TArray extends {
	length: infer Length;
}
	? Length
	: never;
