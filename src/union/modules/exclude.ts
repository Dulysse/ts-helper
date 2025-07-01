import type { Range } from "@/numeric";

import { Test } from "@/test";

Test.Describe(
	"Exclude an element of an union type",
	Test.It<
		Exclude<Range<1, 5>[number], 4>,
		1 | 2 | 3 | 5,
		typeof Test.Out.PASS
	>(),
	Test.It<Exclude<Range<1, 5>[number], number>, never, typeof Test.Out.PASS>(),
	Test.It<Exclude<string, "demo">, string, typeof Test.Out.PASS>(),
);

/**
 * - Exclude an element of an union type `TUnion`
 *
 * @template TUnion - The union type from which to exclude an element.
 * @template TExcluded - The element to exclude from the union type.
 * @example
 * ```tsx
 * import type { Union } from "@dulysse1/ts-helper";
 *
 * type A = Union.Exclude<1 | 2 | 3, 2>; // 1 | 3
 * ```
 * ---------------------------
 * Do you have any questions about `Exclude` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Exclude<TUnion, TExcluded> = TUnion extends TExcluded
	? never
	: TUnion;
