import type { ToArray } from "@/union";

type FirstFromArray<TUnion> =
	ToArray<TUnion> extends [infer TFirst, ...unknown[]] ? TFirst : never;

type NumberFromString<TUnion> = TUnion extends `${infer TNumber extends number}`
	? TNumber
	: never;

/**
 * - Get the first element of an union type `TUnion`
 *
 * @template TUnion The union type to get the first element from
 * @example
 * ```tsx
 * import type { Union } from "@dulysse1/ts-helper";
 *
 * type A = Union.First<1 | 2 | 3>; // 1
 * ```
 * ---------------------------
 * Do you have any questions about `First` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type First<TUnion> = [TUnion] extends [`${number}`]
	? ToArray<NumberFromString<TUnion>> extends [
			infer TFirst extends number,
			...unknown[],
		]
		? Extract<TUnion, `${TFirst}`> extends never
			? FirstFromArray<TUnion>
			: Extract<TUnion, `${TFirst}`>
		: never
	: FirstFromArray<TUnion>;
