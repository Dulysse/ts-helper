import type { And, Equal } from "@/operator";
import type { ObjectMode } from "../utils";
import type { Prettify } from "@/object";

import { Test } from "@/test";

Test.Describe(
	"Required keys from object type",
	Test.It<
		Required<{ a?: string; b: number }>,
		{ a: string; b: number },
		typeof Test.Out.PASS
	>(),
	Test.It<
		Required<{ a?: string; b?: number }, "deep">,
		{ a: string; b: number },
		typeof Test.Out.PASS
	>(),
	Test.It<
		Required<{ a?: string; b?: { c?: number } }, "deep">,
		{ a: string; b: { c: number } },
		typeof Test.Out.PASS
	>(),
);

/**
 * - Make all keys of `TObject` object type required
 * @template TObject The object type to make keys required
 * @template TMode The object operator mode
 * - `flat`: do not apply changes for sub-objects
 * - `deep`: apply changes recursively inside the object
 * @example
 * ```tsx
 * import type { Obj } from "@dulysse1/ts-helper";
 *
 * type A = Obj.Required<
 *  { a?: string; b: number; }
 * >; // { a: string; b: number;  }
 * ```
 * ---------------------------
 * Do you have any questions about `Required` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Required<
	TObject extends object,
	TMode extends ObjectMode = "flat",
> = Prettify<{
	[key in keyof TObject]-?: And<
		Equal<TMode, "deep"> extends true ? true : false,
		NonNullable<TObject[key]> extends Record<string, unknown> ? true : false
	> extends true
		? Required<NonNullable<TObject[key]>, TMode>
		: TObject[key];
}>;
