import type { AsciiMap } from "@/string/utils";
import type { Reversed } from "@/object";
import type {
	Range,
	IsInteger,
	IsPositive,
	GreaterEq,
	LowerEq,
} from "@/numeric";
import type { AndAll, Equal, Not } from "@/operator";
import type { IsUnion } from "@/union";

import { Test } from "@/test";

Test.Describe(
	"Get an array of ASCII characters within a specified range",
	Test.It<
		AsciiRange<65, 70>,
		["A", "B", "C", "D", "E", "F"],
		typeof Test.Out.PASS
	>(),
	Test.It<
		AsciiRange<48, 57>,
		["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
		typeof Test.Out.PASS
	>(),
	Test.It<
		AsciiRange<0, 3>,
		["\0", "\x01", "\x02", "\x03"],
		typeof Test.Out.PASS
	>(),
	Test.It<AsciiRange<250, 300>, never, typeof Test.Out.PASS>(),
	Test.It<AsciiRange<-10, 10>, never, typeof Test.Out.PASS>(),
	Test.It<AsciiRange<10.5, 20>, never, typeof Test.Out.PASS>(),
	Test.It<AsciiRange<20 | 2, 10>, never, typeof Test.Out.PASS>(),
);

/**
 * - Helper type to get ASCII characters from a range of numbers.
 */
declare type _AsciiRange<
	TRange extends number[],
	TResult extends (keyof AsciiMap)[] = [],
> =
	Equal<TRange, []> extends true
		? TResult
		: TRange extends [
					infer Head extends keyof Reversed<AsciiMap>,
					...infer Tail extends number[],
			  ]
			? _AsciiRange<Tail, [...TResult, Reversed<AsciiMap>[Head]]>
			: TResult;

/***
 * - Get an array of ASCII characters within a specified range.
 *
 * @template From - The starting ASCII code (inclusive).
 * @template To - The ending ASCII code (inclusive).
 *
 *  @example
 * ```tsx
 * import type { Str } from "@dulysse1/ts-helper";
 *
 * type A = Str.AsciiRange<65, 70>; // ["A", "B", "C", "D", "E", "F"]
 * type B = Str.AsciiRange<48, 57>; // ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
 * ```
 * ---------------------------
 * Do you have any questions about `AsciiRange` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulysse.dupont@example.com)
 * | [my github](https://github.com/ulysse-dupont)
 * | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type AsciiRange<From extends number, To extends number> =
	AndAll<
		[
			Not<IsUnion<From>>,
			Not<Equal<From, number>>,
			IsInteger<From>,
			IsPositive<From>,
			GreaterEq<From, 0>,
			Not<IsUnion<To>>,
			Not<Equal<To, number>>,
			IsInteger<To>,
			IsPositive<To>,
			LowerEq<To, 255>,
		]
	> extends true
		? _AsciiRange<Range<From, To>>
		: never;

Test.Describe(
	'"Get the ASCII code of a character"',
	Test.It<AsciiCode<"A">, 65, typeof Test.Out.PASS>(),
	Test.It<AsciiCode<"0">, 48, typeof Test.Out.PASS>(),
	Test.It<AsciiCode<"z">, 122, typeof Test.Out.PASS>(),
	Test.It<AsciiCode<"€">, 128, typeof Test.Out.PASS>(),
	Test.It<AsciiCode<"�">, never, typeof Test.Out.PASS>(),
	Test.It<AsciiCode<"hello">, never, typeof Test.Out.PASS>(),
);

/**
 * - Get the ASCII character corresponding to a given ASCII code.
 *
 * @template TString - The ASCII character to get the code for.
 *
 * @example
 * ```tsx
 * import type { Str } from "@dulysse1/ts-helper";
 *
 * type A = Str.AsciiCode<"A">; // 65
 * type B = Str.AsciiCode<"0">; // 48
 * ```
 * ---------------------------
 * Do you have any questions about `AsciiCode` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulysse.dupont@example.com)
 * | [my github](https://github.com/ulysse-dupont)
 * | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type AsciiCode<TString extends string> =
	TString extends keyof AsciiMap ? AsciiMap[TString] : never;
