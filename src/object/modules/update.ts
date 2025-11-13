import type { Prettify } from "@/object";
import type { ObjectMode } from "@/object/utils";
import type { And, Equal, Satisfy } from "@/operator";

import { Test } from "@/test";

Test.Describe(
	"Update a property in an object type",
	Test.It<
		Update<{ a: string; b: number }, "a", boolean>,
		{ a: boolean; b: number },
		typeof Test.Out.PASS
	>(),
	Test.It<
		Update<{ name: string; age: number; active: boolean }, "age", string>,
		{ name: string; age: string; active: boolean },
		typeof Test.Out.PASS
	>(),
	Test.It<
		Update<{ x: number; y: number; z: number }, "y", null>,
		{ x: number; y: null; z: number },
		typeof Test.Out.PASS
	>(),
	Test.It<
		Update<
			{ user: { name: string; age: number }; age: boolean },
			"age",
			string,
			"deep"
		>,
		{ user: { name: string; age: string }; age: string },
		typeof Test.Out.PASS
	>(),
);

/**
 * - Update a property in an object type `TObject` from `Key` to `NewValue`
 * @template TObject - The object type to update a property in.
 * @template Key - The property key to update.
 * @template NewValue - The new property type to use.
 * @template TMode - The object operator mode
 * - `flat`: do not apply changes for sub-objects
 * - `deep`: apply changes recursively inside the object
 * @example
 * ```tsx
 * import type { Obj } from "@dulysse1/ts-helper";
 *
 * type A = Obj.Update<
 *  { a: string; b: number; },
 *  "a",
 * 	boolean
 * >; // { a: boolean; b: number; }
 *
 * type B = Obj.Update<
 * { user: { name: string; age: number; }; active: boolean; },
 *  "age",
 * string,
 * "deep"
 * >; // { user: { name: string; age: string; }; active: boolean; }
 * ```
 * ---------------------------
 * Do you have any questions about `Update` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Update<
	TObject extends object,
	Key extends PropertyKey,
	NewValue,
	TMode extends ObjectMode = "flat",
> = Prettify<{
	[key in keyof TObject]: key extends Key
		? NewValue
		: And<
					TObject[key] extends object ? true : false,
					Equal<TMode, "deep">
			  > extends true
			? Update<Satisfy<TObject[key], object>, Key, NewValue, TMode>
			: TObject[key];
}>;
