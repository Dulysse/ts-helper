/**
 * #### Merge type object `TObjectA` with type object `TObjectB`
 * ---------------------------
 * @example
 * ```tsx
 * import type { Obj } from "@dulysse1/ts-helper";
 *
 * type Merged = Obj.Merge<
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
export declare type Merge<TObjectA extends object, TObjectB extends object> = {
	[key in keyof (TObjectA & TObjectB)]: key extends keyof TObjectA
		? TObjectA[key]
		: key extends keyof TObjectB
		? TObjectB[key]
		: never;
};
