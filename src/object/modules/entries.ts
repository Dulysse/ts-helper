import { Test } from "@/test";

Test.Describe(
	"Get a tuple of an object's entries",
	Test.It<
		Entries<{ a: string; b: number; c: boolean; d: string }>,
		["a" | "b" | "c" | "d", string | number | boolean][],
		typeof Test.Out.PASS
	>(),
	Test.It<Entries<{}>, [], typeof Test.Out.PASS>(),
	Test.It<
		Entries<Record<"demo", unknown>>,
		["demo", unknown][],
		typeof Test.Out.PASS
	>(),
);

declare type _EntryUnion<TObject extends object> = {
	[K in keyof TObject]: [K, TObject[K]];
}[keyof TObject];

/**
 * - Get a tuple of an object's entries
 *
 * @template TObject The object type to get entries from.
 * @example
 * ```tsx
 * import type { Obj } from "@dulysse1/ts-helper";
 *
 * type A = Obj.Entries<
 * 	{ a: string; b: number; c: boolean; d: string; },
 * >; // ["a" | "b" | "c" | "d", string | number | boolean][]
 * ```
 * ---------------------------
 * Do you have any questions about `Entries` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Entries<TObject extends object> = [keyof TObject] extends [
	never,
]
	? []
	: [keyof TObject, TObject[keyof TObject]][];
