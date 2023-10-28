/**
 * #### Merge type object `A` with type object `B`
 * ---------------------------
 * @example
 * ```tsx
 * import type { Object } from "@dulysse1/ts-helper";
 *
 * type Merged = Object.Merge<
 *  { a: string; },
 *  { b: number; }
 * >; // { a: string; b: number; }
 * ```
 * ---------------------------
 * Do you have any questions about {@link Merge} usage ?
 * ### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Merge<A extends object, B extends object> = {
	[key in keyof (A & B)]: key extends keyof A
		? A[key]
		: key extends keyof B
		? B[key]
		: never;
};
