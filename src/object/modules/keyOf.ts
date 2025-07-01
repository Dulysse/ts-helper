import * as Test from "@/test";

Test.Describe(
	"Get keys of an object type by an optional filter value",
	Test.It<KeyOf<{}, number>, never, Test.Out.PASS>(),
	Test.It<KeyOf<{ a: string; b: number }, string>, "a", Test.Out.PASS>(),
	Test.It<KeyOf<{ a: string; b: number }, number>, "b", Test.Out.PASS>(),
);

/**
 * - Get keys of `TObject` object by an optional filter `ValueLike` value, if value look like this `ValueLike` value, it will return this key else it will skip that key
 *
 * @template TObject The object type to get keys from
 * @example
 * ```tsx
 * import type { Obj } from "@dulysse1/ts-helper";
 *
 * type A = Obj.KeyOf<
 *  { a: string; b: number; },
 *  string
 * >; // "a"
 * ```
 * ---------------------------
 * Do you have any questions about `KeyOf` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type KeyOf<TObject extends object, ValueLike = unknown> = {
	[key in keyof TObject]: TObject[key] extends ValueLike ? key : never;
}[keyof TObject];
