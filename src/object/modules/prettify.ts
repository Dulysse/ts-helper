/**
 * - Prettify object `TObject`
 * ---------------------------
 * @example
 * ```tsx
 * import type { Obj } from "@dulysse1/ts-helper";
 *
 * type A = Obj.Prettify<{
		a: string;
		} & {
			b: number;
		} & {
			c: boolean;
	};>; // { a: string; b: number; c: boolean; }
 * ```
 * ---------------------------
 * Do you have any questions about {@link Prettify} usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Prettify<TObject extends object> = {
	[K in keyof TObject]: TObject[K];
} & {};
