import type { And, Satisfy, Equal } from "@/operator";
import type { ObjectMode } from "../utils";
import type { Prettify } from "@/object";

import * as Test from "@/test/local";

Test.Describe(
	"Merge two object types",
	Test.It<
		Merge<{ a: string }, { b: number }>,
		{ a: string; b: number },
		Test.Out.PASS
	>(),
	Test.It<
		Merge<{ a: string; b: { c: number } }, { b: { d: boolean } }, "deep">,
		{
			a: string;
			b: { c: number; d: boolean };
		},
		Test.Out.PASS
	>(),
	Test.It<
		Merge<{ a: string }, { a: number }>,
		{ a: string | number } | { a: string; b?: number },
		Test.Out.PASS
	>(),
	Test.It<
		Merge<{ a: string }, { b: number } | { c: boolean }>,
		{
			a: string;
			b?: number;
			c?: boolean;
		},
		Test.Out.PASS
	>(),
);

/**
 * - Merge type object `TObjectA` with type object `TObjectB`
 * @template TObjectA The first object type
 * @template TObjectB The second object type
 * @template TMode The object operator mode
 * - `flat`: do not apply changes for sub-objects
 * - `deep`: apply changes recursively inside the object
 * @example
 * ```tsx
 * import type { Obj } from "@dulysse1/ts-helper";
 *
 * type A = Obj.Merge<
 *  { a: string; },
 *  { b: number; }
 * >; // { a: string; b: number; }
 * ```
 * ---------------------------
 * Do you have any questions about `Merge` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Merge<
	TObjectA extends object,
	TObjectB extends object,
	TMode extends ObjectMode = "flat",
> = Prettify<{
	[key in keyof (TObjectA & TObjectB)]: And<
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
			? Merge<
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
