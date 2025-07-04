import { Test } from "@/test";

Test.Describe(
	"Prettify object type",
	Test.It<
		Prettify<
			{
				a: string;
			} & {
				b: number;
			} & {
				c: boolean;
			}
		>,
		{ a: string; b: number; c: boolean },
		typeof Test.Out.PASS
	>(),
);

/**
 * - Prettify object `TObject`
 * 
 * @template TObject The object type to prettify
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
 * Do you have any questions about `Prettify` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Prettify<TObject extends object> = {
	[K in keyof TObject]: TObject[K];
} & {};
