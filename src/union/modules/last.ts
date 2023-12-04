import type { IntersectOf } from "../utils";

/**
 * #### Get the last element of an union type `TUnion`
 * ---------------------------
 * @example
 * ```tsx
 * import type { Union } from "@dulysse1/ts-helper";
 *
 * type A = Union.Last<1 | 2 | 3>; // 3
 * ```
 * ---------------------------
 * Do you have any questions about {@link Last} usage ?
 * ### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Last<TUnion> = IntersectOf<
	TUnion extends unknown ? (x: TUnion) => void : never
> extends (x: infer P) => void
	? P
	: never;
