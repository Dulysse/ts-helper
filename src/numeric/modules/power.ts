import type {
	Compare,
	Decrement,
	IsFloat,
	IsPositive,
	IsZero,
	Multiply,
	Opposite,
} from "@/numeric";
import type { IsValidNumberInput } from "../utils";
import type { And } from "@/operator";

declare type _Power<TNumber1 extends number, TNumber2 extends number> =
	IsZero<TNumber2> extends true
		? 1
		: Compare<TNumber2, 1> extends "equal"
			? TNumber1
			: IsPositive<TNumber2> extends true
				? Multiply<TNumber1, _Power<TNumber1, Decrement<TNumber2>>>
				: `${1}.${_Power<TNumber1, Opposite<TNumber2>>}` extends infer T
					? T extends `${infer I extends number}`
						? I
						: never
					: never;

/**
 * The modulo mathematical operation (often referred to as `%` in programming) is used to obtain the remainder of an integer division between two numbers.
 * - ⚠️ Returns an absolute result for numbers that don't reach compiler limits, otherwise it returns an `explicit result`. ⚠️
 *
 * @template TNumber1 - The first number (the base).
 * @template TNumber2 - The second number (the exponent).
 * @example
 * ```tsx
 * import type { Num } from "@dulysse1/ts-helper";
 *
 * type A = Num.Power<0, 0>; // 1
 * type B = Num.Power<0, 10>; // 0
 * type C = Num.Power<2, 9>; // 512
 * ```
 * ---------------------------
 * Do you have any questions about `Power` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Power<TNumber1 extends number, TNumber2 extends number> =
	And<IsValidNumberInput<TNumber1>, IsValidNumberInput<TNumber2>> extends true
		? {
				true: {
					true: number;
					false: number;
				};
				false: {
					true: number;
					false: _Power<TNumber1, TNumber2>;
				};
			}[`${IsFloat<TNumber1>}`][`${IsFloat<TNumber2>}`]
		: number;
