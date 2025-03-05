import type { Last } from "@/array";
import type { Add, Multiply, Divide, Subtract } from "@/numeric";
import type { Satisfy } from "@/operator";
import type { ReplaceAll, Split } from "@/string";
import type { ToArray } from "@/union";

declare type Operator = "+" | "-" | "*" | "/";

declare type _PriorityOperator = "*" | "/"; // TODO: add priority operator

declare type Calculation = `${number}${Operator}${number}`;

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
	T extends `${infer First}(${infer Priority})${infer Second}` // Check priority calculation
		? _Eval<`${First}${_Eval<Priority>}${Second}`>
		: T extends `-${Calculation}` // Check negative simple calculation
			? Calculate<T>
			: T extends `${Calculation}` // Check positive simple calculation
				? Calculate<T>
				: T extends `-${Calculation}${Operator}${infer Next}` // Check negative multiple calculation
					? T extends `${infer Prefix}${MainString<Satisfy<ToArray<Next>, string[]>>}`
						? T extends `${infer FirstCalculation}${Last<Split<Prefix>>}${MainString<Satisfy<ToArray<Next>, string[]>>}`
							? _Eval<`${Calculate<FirstCalculation>}${Last<Split<Prefix>>}${MainString<Satisfy<ToArray<Next>, string[]>>}`>
							: never
						: never
					: T extends `${Calculation}${Operator}${infer Next}` // Check positive multiple calculation
						? T extends `${infer Prefix}${MainString<Satisfy<ToArray<Next>, string[]>>}`
							? T extends `${infer FirstCalculation}${Last<Split<Prefix>>}${MainString<Satisfy<ToArray<Next>, string[]>>}`
								? _Eval<`${Calculate<FirstCalculation>}${Last<Split<Prefix>>}${MainString<Satisfy<ToArray<Next>, string[]>>}`>
								: never
							: never
						: T extends `${infer Result extends number}`
							? Result
							: number;

declare type IsSubstring<
	A extends string,
	B extends string,
> = A extends `${infer _}${B}${infer _}` ? true : false;

declare type IsSubstringOfAny<
	T extends string,
	U extends string[],
> = U extends [infer First extends string, ...infer Next extends string[]]
	? IsSubstring<First, T> extends true
		? true
		: IsSubstringOfAny<T, Next>
	: false;

declare type MainString<
	T extends string[],
	U extends string[] = T,
> = T extends [infer First extends string, ...infer Next extends string[]]
	? IsSubstringOfAny<First, Next> extends true
		? MainString<Next, U>
		: First
	: never;

/**
 * Type-safe evaluation of mathematical expressions represented as string literals.
 * This type allows you to calculate the result of the expression at compile time.
 *
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
export declare type Eval<T extends string> = _Eval<ReplaceAll<T, " ", "">>;
