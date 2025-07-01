import type { Prettify } from "@/object";

import { Test } from "@/test";

Test.Describe(
	"Rename a property in an object type",
	Test.It<
		Rename<{ a: string }, "a", "b">,
		{ b: string },
		typeof Test.Out.PASS
	>(),
	Test.It<
		Rename<{ a: string; b: number }, "a", "c">,
		{ c: string; b: number },
		typeof Test.Out.PASS
	>(),
	Test.It<
		Rename<{ a: string; b?: number }, "b", "d">,
		{ a: string; d?: number },
		typeof Test.Out.PASS
	>(),
);

/**
 * - Rename a property in an object type `TObject` from `From` to `To`
 * @template TObject - The object type to rename a property in.
 * @template From - The property key to rename.
 * @template To - The new property key to use.
 * @example
 * ```tsx
 * import type { Obj } from "@dulysse1/ts-helper";
 *
 * type A = Obj.Rename<
 *  { a: string; },
 *  "a",
 * 	"b"
 * >; // { b: string; }
 * ```
 * ---------------------------
 * Do you have any questions about `Rename` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Rename<
	TObject extends object,
	From extends PropertyKey,
	To extends PropertyKey,
> = Prettify<{
	[key in keyof TObject as key extends From ? To : key]: TObject[key];
}>;
