import type { HasKey } from "@/object";

import * as Test from "@/test/local";

declare const _exampleSymbol: unique symbol;

Test.Describe(
	"Find a symbol into a type",
	Test.It<
		IsBranded<"hello" & { [_exampleSymbol]: "" }, typeof _exampleSymbol>,
		true,
		Test.Out.PASS
	>(),
	Test.It<IsBranded<"hello", typeof _exampleSymbol>, false, Test.Out.PASS>(),
);

/**
 * - Find a symbol `Brand` into a `T` type.
 *
 * @template T The type to check the symbol.
 * @template Brand The brand symbol to retreive into the type.
 *
 * @example
 * ```tsx
 * import type { Smbl } from "@dulysse1/ts-helper";
 *
 * declare const mySymbol: unique symbol;
 *
 * type CheckMe = number & { [mySymbol]: true; }
 *
 * type A = Smbl.IsBranded<number, typeof mySymbol>; // false
 * type B = Smbl.IsBranded<CheckMe, typeof mySymbol>; // true
 * ```
 * ---------------------------
 * Do you have any questions about `IsBranded` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type IsBranded<T, Brand extends symbol> = HasKey<T, Brand>;
