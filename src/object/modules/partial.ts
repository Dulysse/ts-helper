import type { And, Equal, Satisfy } from "@/operator";
import type { ObjectMode } from "../utils";
import type { Prettify } from "@/object";

import { Test } from "@/test";

Test.Describe(
	"Make all keys of object type partial",
	Test.It<
		Partial<{ a: string; b: number }>,
		{ a?: string; b?: number },
		typeof Test.Out.PASS
	>(),
	Test.It<
		Partial<{ a: string; b: { c: number } }, "deep">,
		{ a?: string; b?: { c?: number } },
		typeof Test.Out.PASS
	>(),
	Test.It<
		Partial<{ a: string; b?: number }>,
		{ a?: string; b?: number },
		typeof Test.Out.PASS
	>(),
);

/**
 * - Make all keys of `TObject` object type partial
 * @template TObject The object type to omit keys from
 * @template TMode The object operator mode
 * - `flat`: do not apply changes for sub-objects
 * - `deep`: apply changes recursively inside the object
 * @example
 * ```tsx
 * import type { Obj } from "@dulysse1/ts-helper";
 *
 * type A = Obj.Partial<
 *  { a: string; b: number; }
 * >; // { a?: string; b?: number;  }
 * ```
 * ---------------------------
 * Do you have any questions about `Partial` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Partial<
	TObject extends object,
	TMode extends ObjectMode = "flat",
> = Prettify<{
	[key in keyof TObject]?: And<
		Equal<TMode, "deep"> extends true ? true : false,
		TObject[key] extends object ? true : false
	> extends true
		? Partial<Satisfy<TObject[key], object>, TMode>
		: TObject[key];
}>;
