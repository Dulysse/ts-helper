import type { $brand } from "@/brand/modules/symbol";

/**
 * - Brand a type `T` with a symbol `Brand`.
 *
 * @template T The type to brand.
 * @template Brand The brand symbol to add into the type.
 * @example
 * ```tsx
 * import type { Brd } from "@dulysse1/ts-helper";
 *
 *
 * type CheckMe = Brd.Branded<number, 'password'>;
 *
 * // CheckMe is now equivalent to:
 * // number & { [$brand]: { 'password': true; } }
 * type A = Brd.IsBranded<number, 'password'>; // false
 * type B = Brd.IsBranded<CheckMe, 'password'>; // true
 * ```
 * ---------------------------
 * Do you have any questions about `Branded` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Branded<T, Brand extends PropertyKey> = T & {
	[$brand]: {
		[key in Brand]: true;
	};
};
