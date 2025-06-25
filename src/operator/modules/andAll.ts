import type { FillRange } from "@/array";
import type { Satisfy } from "@/operator";

import * as Test from "@/test/local";

Test.Describe(
	"Check if all conditions are true",
	Test.It<AndAll<[true, true, true]>, true, Test.Out.PASS>(),
	Test.It<AndAll<[true, false, true]>, false, Test.Out.PASS>(),
	Test.It<AndAll<[true, true, boolean]>, boolean, Test.Out.PASS>(),
);

export declare type ConditionTuple = FillRange<1, 10, boolean>;

/**
 * - Check if all conditions in `TConditions` are true, if it's the case, return `true` else return `false`
 *
 * @template TConditions - The tuple of conditions to check.
 * @example
 * ```tsx
 * import type { Op } from "@dulysse1/ts-helper";
 *
 * type A = Op.AndAll<[true, true, true]>; // true
 * type B = Op.AndAll<[true, false, true]>; // false
 * type C = Op.AndAll<[true, boolean, true]>; // boolean
 * ```
 * ---------------------------
 * Do you have any questions about `AndAll` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type AndAll<TConditions extends ConditionTuple> =
	TConditions extends [
		infer Head extends boolean,
		...infer Tail extends boolean[],
	]
		? Head extends false
			? false
			: Tail extends []
				? Head
				: AndAll<Satisfy<Tail, ConditionTuple>>
		: boolean;
