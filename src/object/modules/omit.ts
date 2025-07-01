import type { And, Equal, Satisfy } from "@/operator";
import type { ObjectMode } from "../utils";
import type { Exclude } from "@/union";
import type { Prettify } from "@/object";

import { Test } from "@/test";

Test.Describe(
	"Omit keys from object type",
	Test.It<
		Omit<{ a: string; b: number }, "a">,
		{ b: number },
		typeof Test.Out.PASS
	>(),
	Test.It<
		Omit<{ a: string; b: { c: number } }, "b", "deep">,
		{ a: string },
		typeof Test.Out.PASS
	>(),
	Test.It<
		Omit<{ a: string; b: { c: number } }, "c", "deep">,
		{ a: string; b: { c: number } },
		typeof Test.Out.PASS
	>(),
	Test.It<
		Omit<{ a: string; b?: number }, "b">,
		{ a: string },
		typeof Test.Out.PASS
	>(),
);

/**
 * - Omit `TKey` keys from object `TObject`
 * @template TObject The object type to omit keys from
 * @template TKey The keys to omit from the object, which can be a string, number, or symbol
 * @template TMode The object operator mode
 * - `flat`: do not apply changes for sub-objects
 * - `deep`: apply changes recursively inside the object
 * @example
 * ```tsx
 * import type { Obj } from "@dulysse1/ts-helper";
 *
 * type A = Obj.Omit<{ a: string; b: { a: number } }, "a" | "b">; // {}
 * ```
 * ---------------------------
 * Do you have any questions about `Omit` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Omit<
	TObject extends object,
	TKey extends PropertyKey,
	TMode extends ObjectMode = "flat",
> = Prettify<{
	[key in Exclude<keyof TObject, TKey>]-?: key extends keyof TObject
		? And<
				Equal<TMode, "deep"> extends true ? true : false,
				keyof TObject[key] extends keyof TObject ? true : false
			> extends true
			? Omit<Satisfy<TObject[key], object>, TKey, TMode>
			: TObject[key]
		: never;
}>;
