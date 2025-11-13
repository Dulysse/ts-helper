import type { Prettify } from "@/object";
import type { ObjectMode } from "@/object/utils";
import type { And, Equal, Satisfy } from "@/operator";

import { Test } from "@/test";

Test.Describe(
	"Filter the properties of an object type that satisfy a condition",
	Test.It<
		Filter<{ a: string; b: number; c: boolean; d: string }, string>,
		{ a: string; d: string },
		typeof Test.Out.PASS
	>(),
	Test.It<
		Filter<{ a: string; b: number; c: boolean; d: string }, number>,
		{ b: number },
		typeof Test.Out.PASS
	>(),
	Test.It<
		Filter<{ a: { x: string }; b: { y: number }; c: boolean }, string, "deep">,
		{ a: { x: string } },
		typeof Test.Out.PASS
	>(),
	Test.It<
		Filter<{ a: { x: string }; b: { y: number }; c: boolean }, string>,
		{},
		typeof Test.Out.PASS
	>(),
	Test.It<
		Filter<{ a: number; b: { c: string }; d: { e: number } }, object>,
		{ b: { c: string }; d: { e: number } },
		typeof Test.Out.PASS
	>(),
	Test.It<
		Filter<{ a: number; b: { c: string }; d: { e: number } }, number, "deep">,
		{ a: number; d: { e: number } },
		typeof Test.Out.PASS
	>(),
);

/**
 * - Filter the properties of an object type `TObject` that satisfy the `TSatisfy` condition
 * @template TObject The object type to filter.
 * @template TSatisfy The condition to satisfy.
 * @template TMode The object operator mode
 * - `flat`: do not apply changes for sub-objects
 * - `deep`: apply changes recursively inside the object
 * @example
 * ```tsx
 * import type { Obj } from "@dulysse1/ts-helper";
 *
 * type A = Obj.Filter<
 * 	{ a: string; b: number; c: boolean; d: string; },
 * 	string
 * >; // { a: string; d: string; }
 *
 * type B = Obj.Filter<
 * 	{ a: { x: string; }; b: { y: number; }; c: boolean; },
 * 	number,
 * 	"deep"
 * >; // { b: { y: number; }; }
 * ```
 * ---------------------------
 * Do you have any questions about `Filter` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Filter<
	TObject extends object,
	TSatisfy,
	TMode extends ObjectMode = "flat",
> = Prettify<
	{
		[key in keyof TObject as TObject[key] extends TSatisfy
			? key
			: And<
						TObject[key] extends object ? true : false,
						Equal<TMode, "deep">
				  > extends true
				? key
				: never]: And<
			TObject[key] extends object ? true : false,
			Equal<TMode, "deep">
		> extends true
			? Filter<Satisfy<TObject[key], object>, TSatisfy, TMode>
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
