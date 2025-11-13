import type { Prettify } from "@/object";

import { Test } from "@/test";

Test.Describe(
	"Reverse the keys and values of an object type",
	Test.It<
		Reversed<{ a: "x"; b: "y"; c: "z" }>,
		{ x: "a"; y: "b"; z: "c" },
		typeof Test.Out.PASS
	>(),
	Test.It<
		Reversed<{ name: "firstName"; age: "yearsOld" }>,
		{ firstName: "name"; yearsOld: "age" },
		typeof Test.Out.PASS
	>(),
	Test.It<
		Reversed<{ a: 1; b: 2; c: 3 }>,
		{ 1: "a"; 2: "b"; 3: "c" },
		typeof Test.Out.PASS
	>(),
	Test.It<
		Reversed<{ a: true; b: "lol" }>,
		{ lol: "b" },
		typeof Test.Out.PASS
	>(),
);

/**
 * - Reverse the keys and values of an object type `TObject`.
 *
 * @template TObject The object type to reverse keys and values.
 * @example
 * ```tsx
 * import type { Obj } from "@dulysse1/ts-helper";
 *
 * type A = Obj.Reversed<
 *  { a: 'x'; b: 'y'; c: 'z'; }
 * >; // { x: 'a'; y: 'b'; z: 'c'; }
 * ```
 * ---------------------------
 * Do you have any questions about `Reversed` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulysse.dupont@example.com)
 * | [my github](https://github.com/ulysse-dupont)
 * | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Reversed<TObject extends object> = Prettify<{
	[key in keyof TObject as TObject[key] extends PropertyKey
		? TObject[key]
		: never]: key;
}>;
