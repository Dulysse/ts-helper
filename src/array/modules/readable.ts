import * as Test from "@/test/local";

Test.Describe(
	"Get a readonly array type as writable",
	Test.It<Readable<[1, 2]>, [1, 2], Test.Out.PASS>(),
	Test.It<Readable<string[]>, string[], Test.Out.PASS>(),
	Test.It<Readable<[] | readonly [1]>, [1] | [], Test.Out.PASS>(),
	Test.It<Readable<readonly [2, 3, 4, "5"]>, [2, 3, 4, "5"], Test.Out.PASS>(),
);

/**
 * - Get a readonly `TArray` array as writable
 *
 * @template TArray - The array type to convert to writable.
 * @example
 * ```tsx
 * import type { Arr } from "@dulysse1/ts-helper";
 *
 * type A = Arr.Readable<
 *  readonly [1, 2, 3]
 * >; // [1, 2, 3]
 * ```
 * ---------------------------
 * Do you have any questions about `Readable` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Readable<TArray extends readonly unknown[]> =
	TArray extends readonly [...infer R] ? R : TArray;
