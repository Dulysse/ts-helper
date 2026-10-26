import type { Satisfy } from "@/operator";
import type { ConditionTuple } from "@/operator/modules/andAll";

/**
 * - Check if at least one condition in `TConditions` is true, if it's the case, return `true` else return `false`
 *
 * @template TConditions - The tuple of conditions to check.
 * @example
 * ```tsx
 * import type { Op } from "@dulysse1/ts-helper";
 *
 * type A = Op.OrAll<[true, true, true]>; // true
 * type B = Op.OrAll<[true, false, true]>; // true
 * type C = Op.OrAll<[true, boolean, true]>; // true
 * type D = Op.OrAll<[false, boolean]>; // boolean
 * type E = Op.OrAll<[false, false]>; // false
 * ```
 * ---------------------------
 * Do you have any questions about `OrAll` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type OrAll<TConditions extends ConditionTuple> =
	TConditions extends [
		infer Head extends boolean,
		...infer Tail extends boolean[],
	]
		? Head extends true
			? true
			: Tail extends []
				? Head
				: OrAll<Satisfy<Tail, ConditionTuple>>
		: boolean;
