import type { And, Equal, Satisfy } from "@/operator";
import type { ObjectMode } from "../utils";
import type { Prettify } from "@/object";

import { Test } from "@/test";

Test.Describe(
	"Get the Intersection object type of two objects",
	Test.It<Intersection<{}, {}>, {}, typeof Test.Out.PASS>(),
	Test.It<Intersection<{ name: string }, {}>, {}, typeof Test.Out.PASS>(),
	Test.It<
		Intersection<{ name: string }, { name?: boolean }>,
		{ name: string | boolean | undefined },
		typeof Test.Out.PASS
	>(),
	Test.It<
		Intersection<{ a: string; b: number }, { b: number; c: boolean }>,
		{ b: number },
		typeof Test.Out.PASS
	>(),
);

/**
 * - Get the Intersection object type of `TObjectA` and `TObjectB`
 * @template TObjectA The first object type
 * @template TObjectB The second object type
 * @template TMode The object operator mode
 * - `flat`: do not apply changes for sub-objects
 * - `deep`: apply changes recursively inside the object
 * @example
 * ```tsx
 * import type { Obj } from "@dulysse1/ts-helper";
 *
 * type A = Obj.Intersection<
 *  { a: string; },
 *  { b: number; a: number; }
 * >; // { a: string | number; }
 * ```
 * ---------------------------
 * Do you have any questions about `Intersection` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Intersection<
	TObjectA extends object,
	TObjectB extends object,
	TMode extends ObjectMode = "flat",
> = Prettify<{
	[key in {
		[key in keyof TObjectA | keyof TObjectB]: And<
			key extends keyof TObjectA ? true : false,
			key extends keyof TObjectB ? true : false
		> extends true
			? key
			: never;
	}[keyof TObjectA | keyof TObjectB]]: And<
		key extends keyof TObjectA ? true : false,
		key extends keyof TObjectB ? true : false
	> extends true
		? And<
				And<
					Equal<TMode, "deep"> extends true ? true : false,
					TObjectA[Satisfy<key, keyof TObjectA>] extends object ? true : false
				>,
				TObjectB[Satisfy<key, keyof TObjectB>] extends object ? true : false
			> extends true
			? Intersection<
					Satisfy<TObjectA[Satisfy<key, keyof TObjectA>], object>,
					Satisfy<TObjectB[Satisfy<key, keyof TObjectB>], object>,
					TMode
				>
			:
					| TObjectA[Satisfy<key, keyof TObjectA>]
					| TObjectB[Satisfy<key, keyof TObjectB>]
		: key extends keyof TObjectA
			? TObjectA[key]
			: key extends keyof TObjectB
				? TObjectB[key]
				: never;
}>;
