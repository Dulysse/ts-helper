import type { $brand } from "@/brand/modules/symbol";

import { Test } from "@/test";

Test.Describe(
	"Find a symbol into a type",
	Test.It<IsBranded<number, "mySymbol">, false, typeof Test.Out.PASS>(),
	Test.It<
		IsBranded<number & { [$brand]: { ["mySymbol"]: true } }, "mySymbol">,
		true,
		typeof Test.Out.PASS
	>(),
	Test.It<
		IsBranded<string & { [$brand]: { ["anotherSymbol"]: true } }, "mySymbol">,
		false,
		typeof Test.Out.PASS
	>(),
);

/**
 * - Find a symbol `Brand` into a `T` type.
 *
 * @template T The type to check the symbol.
 * @template Brand The brand symbol to retreive into the type.
 *
 * @example
 * ```tsx
 * import type { Brd } from "@dulysse1/ts-helper";
 *
 * type CheckMe = Brd.Branded<number, 'password'>;
 *
 * type A = Brd.IsBranded<number, 'password'>; // false
 * type B = Brd.IsBranded<CheckMe, 'password'>; // true
 * ```
 * ---------------------------
 * Do you have any questions about `IsBranded` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type IsBranded<T, Brand extends PropertyKey> = T extends {
	[$brand]: {
		[key in Brand]: true;
	};
}
	? true
	: false;
