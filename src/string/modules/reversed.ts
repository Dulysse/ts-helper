import type { Equal } from "@/operator";

declare type _Reversed<
	TString extends string,
	Res extends string = "",
> = TString extends `${infer First}${infer Next}`
	? _Reversed<Next, `${First}${Res}`>
	: Res;

/**
 * - Reverse a string type `T` to produce a new string type with the characters in reverse order.
 *
 * @template T - The string to reverse.
 * ---------------------------
 *
 * @example
 * ```tsx
 * import type { Str } from "@dulysse1/ts-helper";
 *
 * type Reversed = Str.Reversed<'hello'>; // 'olleh'
 * ```
 *
 * ---------------------------
 * Do you have any questions about `Reversed` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Reversed<T extends string> = T extends string
	? Equal<T, string> extends true
		? string
		: _Reversed<T>
	: never;
