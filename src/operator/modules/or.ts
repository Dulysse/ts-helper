/**
 * #### Check if one of condition `A` and `B` are true, if it's the case, return `true` else return `false`
 * ---------------------------
 * @example
 * ```tsx
 * import type { Op } from "@dulysse1/ts-helper";
 *
 * type Yes = Op.Or<true, false>; // true
 * type No = Op.Or<false, false>; // false
 * ```
 * ---------------------------
 * Do you have any questions about {@link Or} usage ?
 * ### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Or<A extends boolean, B extends boolean> = {
	true: {
		true: true;
		false: true;
	};
	false: {
		true: true;
		false: false;
	};
}[`${A}`][`${B}`];
