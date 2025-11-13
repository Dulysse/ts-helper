import type { Prettify } from "@/object";
import type { ObjectMode } from "@/object/utils";
import type { And, Equal, Satisfy } from "@/operator";

import { Test } from "@/test";

Test.Describe(
	"Exclude the properties of an object type that satisfy a condition",
	Test.It<
		Exclude<{ a: string; b: number; c: boolean; d: string }, string>,
		{ b: number; c: boolean },
		typeof Test.Out.PASS
	>(),
	Test.It<
		Exclude<{ a: string; b: number; c: boolean; d: string }, number>,
		{ a: string; c: boolean; d: string },
		typeof Test.Out.PASS
	>(),
	Test.It<
		Exclude<{ a: { x: string }; b: { y: number }; c: boolean }, string, "deep">,
		{ b: { y: number }; c: boolean },
		typeof Test.Out.PASS
	>(),
	Test.It<
		Exclude<{ a: { x: string }; b: { y: number }; c: boolean }, string>,
		{ a: { x: string }; b: { y: number }; c: boolean },
		typeof Test.Out.PASS
	>(),
	Test.It<
		Exclude<{ a: number; b: { c: string }; d: { e: number } }, object>,
		{ a: number },
		typeof Test.Out.PASS
	>(),
	Test.It<
		Exclude<{ a: number; b: { c: string }; d: { e: number } }, number, "deep">,
		{ b: { c: string } },
		typeof Test.Out.PASS
	>(),
);

/**
 * - Exclude the properties of an object type `TObject` that satisfy the `TSatisfy` condition
 * @template TObject The object type to exclude properties from.
 * @template TSatisfy The condition to satisfy.
 * @template TMode The object operator mode
 * - `flat`: do not apply changes for sub-objects
 * - `deep`: apply changes recursively inside the object
 * @example
 * ```tsx
 * import type { Obj } from "@dulysse1/ts-helper";
 *
 * type A = Obj.Exclude<
 * 	{ a: string; b: number; c: boolean; d: string; },
 * 	string
 * >; // { b: number; c: boolean; }
 * ```
 * ---------------------------
 * Do you have any questions about `Exclude` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Exclude<
	TObject extends object,
	TSatisfy,
	TMode extends ObjectMode = "flat",
> = Prettify<
	{
		[key in keyof TObject as TObject[key] extends TSatisfy ? never : key]: And<
			TObject[key] extends object ? true : false,
			Equal<TMode, "deep">
		> extends true
			? Exclude<Satisfy<TObject[key], object>, TSatisfy, TMode>
			: TObject[key];
	} extends infer TCleanedObject
		? {
				[K in keyof TCleanedObject as And<
					Equal<TMode, "deep">,
					Equal<TCleanedObject[K], {}>
				> extends true
					? never
					: K]: TCleanedObject[K];
			}
		: never
>;
