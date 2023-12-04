/**
 * #### Check if both condition `A` and `B` are true, if it's the case, return `true` else return `false`
 * ---------------------------
 * @example
 * ```tsx
 * import type { Op } from "@dulysse1/ts-helper";
 *
 * type A = Op.And<true, true>; // true
 * type B = Op.And<true, false>; // false
 * ```
 * ---------------------------
 * Do you have any questions about {@link And} usage ?
 * ### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type And<A extends boolean, B extends boolean> = {
	true: {
		true: true;
		false: false;
	};
	false: {
		true: false;
		false: false;
	};
}[`${A}`][`${B}`];
