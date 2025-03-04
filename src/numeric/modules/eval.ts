import type { Add, Multiply, Divide, Subtract } from "@/numeric";

declare type Operator = "+" | "-" | "*" | "/";

declare type PriorityOperator = "*" | "/";

declare type Calcule = `${number}${Operator}${number}`;

type result = Eval<"10+20-30">;
//    ^?

declare type Calculate<T extends string> =
	T extends `${infer First extends number}*${infer Second extends number}`
		? Multiply<First, Second>
		: T extends `${infer First extends number}/${infer Second extends number}`
			? Divide<First, Second>
			: T extends `${infer First extends number}+${infer Second extends number}`
				? Add<First, Second>
				: T extends `${infer First extends number}-${infer Second extends number}`
					? Subtract<First, Second>
					: number;

declare type _Eval<T extends string> =
	T extends `${infer First}(${infer Priority})${infer Second}`
		? _Eval<`${First}${_Eval<Priority>}${Second}`>
		: T extends `-${Calcule}`
			? Calculate<T>
			: T extends `${Calcule}`
				? Calculate<T>
				: T extends `${Calcule}${Operator}${infer Next}`
					? T extends `${infer C}${Next}`
						? C
						: number
					: T extends `${infer Result extends number}`
						? Result
						: 999;

/**
 * - `eval()` function but as type allow you to calculate the result of the expression
 * ---------------------------
 * @example
 * ```tsx
 * import type { Num } from "@dulysse1/ts-helper";
 * // good syntaxe
 * type A = Num.Eval<"3*(4+1)">; // 15
 * // bad syntaxe
 * type B = Num.Eval<"2dzjedkz">; // number
 * ```
 * ---------------------------
 * Do you have any questions about {@link Eval} usage ?
 * ### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Eval<T extends string> = _Eval<T>;
