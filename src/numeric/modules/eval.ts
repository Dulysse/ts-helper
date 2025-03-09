import type { Add, Multiply, Divide, Subtract } from "@/numeric";
import type { Satisfy } from "@/operator";
import type { ReplaceAll } from "@/string";
import type { ToArray } from "@/union";

declare type PriorityOperator = "*" | "/";
declare type AdditiveOperator = "+" | "-";
declare type Operator = PriorityOperator | AdditiveOperator;
declare type Calculation = `${number}${Operator}${number}`;
declare type EvaluationFailed = unknown;
declare type AllowedEvaluateChar = `${number | Operator | "(" | ")" | " "}`;

declare type IsAllowedCharacter<C extends string> =
	C extends AllowedEvaluateChar ? true : false;

declare type CheckCharacters<T extends string> =
	T extends `${infer First}${infer Rest}`
		? IsAllowedCharacter<First> extends true
			? CheckCharacters<Rest>
			: false
		: true;

declare type PickFirstNumber<T extends string> =
	T extends `${infer Char}${infer Rest}`
		? Char extends "-"
			? `-${ExtractNumber<Rest>}`
			: Char extends Operator
				? PickFirstNumber<Rest>
				: `${Char}${ExtractNumber<Rest>}`
		: never;

declare type ExtractNumber<T extends string> =
	T extends `${infer Char}${infer Rest}`
		? Char extends Operator
			? ""
			: `${Char}${ExtractNumber<Rest>}`
		: "";

declare type ReverseString<
	T extends string,
	R extends string = "",
> = T extends `${infer F}${infer Rest}` ? ReverseString<Rest, `${F}${R}`> : R;

declare type PickLastNumber<T extends string> =
	PickFirstNumber<ReverseString<T>> extends `${infer RevNumber}`
		? ReverseString<RevNumber>
		: never;

declare type IsSubstring<
	A extends string,
	B extends string,
> = A extends `${infer _}${B}${infer _}` ? true : false;

declare type IsSubstringOfAny<
	T extends string,
	U extends string[],
> = U extends [infer First extends string, ...infer Rest extends string[]]
	? IsSubstring<First, T> extends true
		? true
		: IsSubstringOfAny<T, Rest>
	: false;

declare type SuperElement<
	T extends string[],
	U extends string[] = T,
> = T extends [infer First extends string, ...infer Rest extends string[]]
	? IsSubstringOfAny<First, Rest> extends true
		? SuperElement<Rest, U>
		: First
	: never;

declare type Super<T> = SuperElement<Satisfy<ToArray<T>, string[]>>;

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

declare type Evaluate<T extends string> =
	T extends `${infer First}(${infer Priority})${infer Second}` // Check priority calculation
		? Evaluate<`${First extends `${string}${Operator}` | "" ? First : `${First}*`}${Satisfy<Evaluate<Priority>, number>}${Second extends `${Operator}${string}` | "" ? Second : `*${Second}`}`>
		: T extends `-${Calculation}` // Check negative simple calculation
			? Calculate<T>
			: T extends `${Calculation}` // Check positive simple calculation
				? Calculate<T>
				: T extends `${infer Head}${PriorityOperator}${infer Rest}` // then, Check multiple calculation with priority operator "*" and "/"
					? T extends `${Head}${infer Op}${Super<Rest>}`
						? T extends `${infer _Head}${Op}${PickFirstNumber<Super<Rest>>}${infer _Rest}`
							? T extends `${infer __Head}${PickLastNumber<_Head>}${Op}${PickFirstNumber<Super<Rest>>}${_Rest}`
								? Evaluate<`${__Head}${Calculate<`${PickLastNumber<_Head>}${Op}${PickFirstNumber<Super<Rest>>}`>}${_Rest}`>
								: EvaluationFailed
							: EvaluationFailed
						: EvaluationFailed
					: T extends `-${infer Head}${AdditiveOperator}${infer Rest}` // finally resolve negative additional operators
						? T extends `-${Head}${infer Op}${Super<Rest>}`
							? T extends `-${infer _Head}${Op}${Super<Rest>}`
								? T extends `-${_Head}${Op}${infer _Rest}`
									? T extends `-${_Head}${Op}${PickFirstNumber<_Rest>}${infer __Rest}`
										? Evaluate<`${Calculate<`-${_Head}${Op}${PickFirstNumber<_Rest>}`>}${__Rest}`>
										: EvaluationFailed
									: EvaluationFailed
								: EvaluationFailed
							: EvaluationFailed
						: T extends `${infer Head}${AdditiveOperator}${infer Rest}` // finally resolve positive additional operators
							? T extends `${Head}${infer Op}${Super<Rest>}`
								? T extends `${infer _Head}${Op}${Super<Rest>}`
									? T extends `${_Head}${Op}${infer _Rest}`
										? T extends `${_Head}${Op}${PickFirstNumber<_Rest>}${infer __Rest}`
											? Evaluate<`${Calculate<`${_Head}${Op}${PickFirstNumber<_Rest>}`>}${__Rest}`>
											: EvaluationFailed
										: EvaluationFailed
									: EvaluationFailed
								: EvaluationFailed
							: T extends `${infer Result extends number}`
								? Result
								: EvaluationFailed;

/**
 * Type-safe evaluation of mathematical expressions represented as string literals.
 * This type allows you to calculate the result of the expression at compile time.
 * - ⚠️ Returns an absolute result for numbers in the interval `[-400; 400]`, otherwise it returns an `explicit result`. ⚠️
 *
 * ---------------------------
 * @example
 * ```tsx
 * import type { Num } from "@dulysse1/ts-helper";
 * // good syntaxe
 * type A = Num.Eval<"3*(4+1) - 1">; // 14
 * // bad syntaxe
 * type B = Num.Eval<"2dzjedkz">; // unknown
 * // value too big
 * type B = Num.Eval<"476+382838">; // number
 * ```
 * ---------------------------
 * Do you have any questions about {@link Eval} usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Eval<T extends string> =
	CheckCharacters<T> extends true
		? Evaluate<ReplaceAll<T, " ", "">>
		: EvaluationFailed;
