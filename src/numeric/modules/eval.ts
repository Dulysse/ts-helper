import type { Add, Multiply, Divide, Subtract, Factorial } from "@/numeric";
import type { Satisfy } from "@/operator";
import type { ReplaceAll, Reversed } from "@/string";
import type { ToArray } from "@/union";

import * as Test from "@/test/local";

Test.Describe(
	"Type safe evaluation of mathematical expressions represented as string",
	Test.It<Eval<"2+2*2">, 6, Test.Out.PASS>(),
	Test.It<Eval<"20.2-4/2">, 18.2, Test.Out.PASS>(),
	Test.It<Eval<"HELLO">, unknown, Test.Out.PASS>(),
	Test.It<Eval<"23.3/32323">, number, Test.Out.PASS>(),
);

declare type PriorityOperator = "*" | "/";
declare type AdditiveOperator = "+" | "-";
declare type Operator = PriorityOperator | AdditiveOperator;
declare type Calculation = `${number}${Operator}${number}`;
declare type EvaluationFailed = unknown;
declare type AllowedEvaluateChar =
	| `${number}`
	| Operator
	| "("
	| ")"
	| " "
	| "!"
	| ".";

declare type IsAllowedCharacter<C extends string> =
	C extends AllowedEvaluateChar ? true : false;

declare type CheckCharacters<T extends string> =
	T extends `${infer Head}${infer Tail}`
		? IsAllowedCharacter<Head> extends true
			? CheckCharacters<Tail>
			: false
		: true;

declare type PickFirstNumber<T extends string> =
	T extends `${infer Char}${infer Tail}`
		? Char extends "-"
			? `-${ExtractNumber<Tail>}`
			: Char extends Operator
				? PickFirstNumber<Tail>
				: `${Char}${ExtractNumber<Tail>}`
		: never;

declare type ExtractNumber<T extends string> =
	T extends `${infer Char}${infer Tail}`
		? Char extends Operator
			? ""
			: `${Char}${ExtractNumber<Tail>}`
		: "";

declare type PickLastNumber<T extends string> =
	PickFirstNumber<Reversed<T>> extends `${infer RevNumber}`
		? Reversed<RevNumber>
		: never;

declare type IsSubstring<
	A extends string,
	B extends string,
> = A extends `${infer _}${B}${infer _}` ? true : false;

declare type IsSubstringOfAny<
	T extends string,
	U extends string[],
> = U extends [infer Head extends string, ...infer Tail extends string[]]
	? IsSubstring<Head, T> extends true
		? true
		: IsSubstringOfAny<T, Tail>
	: false;

declare type SuperElement<
	T extends string[],
	U extends string[] = T,
> = T extends [infer Head extends string, ...infer Tail extends string[]]
	? IsSubstringOfAny<Head, Tail> extends true
		? SuperElement<Tail, U>
		: Head
	: never;

declare type Super<T> = SuperElement<Satisfy<ToArray<T>, string[]>>;

declare type Calculate<T extends string> =
	T extends `${infer Head extends number}*${infer Tail extends number}`
		? Multiply<Head, Tail>
		: T extends `${infer Head extends number}/${infer Tail extends number}`
			? Divide<Head, Tail>
			: T extends `${infer Head extends number}+${infer Tail extends number}`
				? Add<Head, Tail>
				: T extends `${infer Head extends number}-${infer Tail extends number}`
					? Subtract<Head, Tail>
					: number;

declare type Evaluate<T extends string> =
	T extends `${infer Head}(${infer Priority})${infer Tail}` // Check priority calculation
		? Evaluate<`${Head extends `${string}${Operator}` | "" ? Head : `${Head}*`}${Satisfy<Evaluate<Priority>, number>}${Tail extends `${Operator}${string}` | "" ? Tail : `*${Tail}`}`>
		: T extends `${infer Head}!${infer Tail}` // Check factiorial calculation
			? Head extends `${infer _Head}${PickLastNumber<Head>}`
				? PickLastNumber<Head> extends `${infer N extends number}`
					? Evaluate<`${_Head}${Factorial<N>}${Tail}`>
					: EvaluationFailed
				: EvaluationFailed
			: T extends `-${Calculation}` // Check negative simple calculation
				? Calculate<T>
				: T extends `${Calculation}` // Check positive simple calculation
					? Calculate<T>
					: T extends `${infer Head}${PriorityOperator}${infer Tail}` // then, Check multiple calculation with priority operator "*" and "/"
						? T extends `${Head}${infer Op}${Super<Tail>}`
							? T extends `${infer _Head}${Op}${PickFirstNumber<Super<Tail>>}${infer _Rest}`
								? T extends `${infer __Head}${PickLastNumber<_Head>}${Op}${PickFirstNumber<Super<Tail>>}${_Rest}`
									? Evaluate<`${__Head}${Calculate<`${PickLastNumber<_Head>}${Op}${PickFirstNumber<Super<Tail>>}`>}${_Rest}`>
									: EvaluationFailed
								: EvaluationFailed
							: EvaluationFailed
						: T extends `-${infer Head}${AdditiveOperator}${infer Tail}` // finally resolve negative additional operators
							? T extends `-${Head}${infer Op}${Super<Tail>}`
								? T extends `-${infer _Head}${Op}${Super<Tail>}`
									? T extends `-${_Head}${Op}${infer _Rest}`
										? T extends `-${_Head}${Op}${PickFirstNumber<_Rest>}${infer __Rest}`
											? Evaluate<`${Calculate<`-${_Head}${Op}${PickFirstNumber<_Rest>}`>}${__Rest}`>
											: EvaluationFailed
										: EvaluationFailed
									: EvaluationFailed
								: EvaluationFailed
							: T extends `${infer Head}${AdditiveOperator}${infer Tail}` // finally resolve positive additional operators
								? T extends `${Head}${infer Op}${Super<Tail>}`
									? T extends `${infer _Head}${Op}${Super<Tail>}`
										? T extends `${_Head}${Op}${infer _Rest}`
											? T extends `${_Head}${Op}${PickFirstNumber<_Rest>}${infer __Rest}`
												? Evaluate<`${Calculate<`${_Head}${Op}${PickFirstNumber<_Rest>}`>}${__Rest}`>
												: EvaluationFailed
											: EvaluationFailed
										: EvaluationFailed
									: EvaluationFailed
								: T extends `${infer TResult extends number}`
									? TResult
									: EvaluationFailed;

/**
 * Type-safe evaluation of mathematical expressions represented as string literals.
 * This type allows you to calculate the result of the expression at compile time.
 * - ⚠️ Returns an absolute result with a precision of two decimals for numbers that don't reach compiler limits, otherwise it returns an `explicit result`. ⚠️
 *
 * @template T - The mathematical expression to evaluate, represented as a string literal.
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
 * Do you have any questions about `Eval` usage ?
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
