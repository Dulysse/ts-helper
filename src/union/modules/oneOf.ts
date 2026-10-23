import { Test } from "@/test";

type BaseMessage = { id: string };
type TextMessage = BaseMessage & { text: string };
type ImgMessage = BaseMessage & { imgPath: string };
type UrlMessage = BaseMessage & { url: string };

Test.Describe(
	"Make union discrimitable",
	Test.It<
		OneOf<[TextMessage, ImgMessage, UrlMessage]>,
		| {
				id: string;
				text: string;
				imgPath: never;
				url: never;
		  }
		| {
				id: string;
				imgPath: string;
				text: never;
				url: never;
		  }
		| {
				id: string;
				url: string;
				text: never;
				imgPath: never;
		  },
		typeof Test.Out.PASS
	>(),
	Test.It<
		OneOf<
			[
				{
					bar: string;
				},
				{
					can: number;
				},
			]
		>,
		| {
				bar: string;
				can: never;
		  }
		| {
				can: number;
				bar: never;
		  },
		typeof Test.Out.PASS
	>(),
	Test.It<
		OneOf<[{ value: string }, { value: number }, { other: boolean }]>,
		| { value: string; other: never }
		| { value: number; other: never }
		| { other: boolean; value: never },
		typeof Test.Out.PASS
	>(),
);

type AllKeys<T> = T extends unknown ? keyof T : never;

type Simplify<T> = { [Key in keyof T]: T[Key] };

type AddMissingKeys<Variant, AllVariants> = Variant extends object
	? Simplify<
			Variant & {
				[Key in Exclude<AllKeys<AllVariants>, keyof Variant>]: never;
			}
		>
	: never;

/**
 * - Make `TUnionArray` union array element discriminable by adding missing keys as `undefined`
 *
 * @template TUnionArray - The union type array.
 * @example
 * ```tsx
 * import type { Union } from "@dulysse1/ts-helper";
 *
 * type IFoo = Union.OneOf<[{
 *		bar: string;
 *	}, {
 *		can: number;
 *	}]>
 *
 *	let val0: IFoo = { bar: "hello", can: undefined } // OK
 *	let val1: IFoo = { can: 22, bar: undefined } // OK
 *	let val2: IFoo = { bar: "hello",  can: 22 } // Error (can't be both)
 *	let val3: IFoo = {  } // Error
 * ```
 * ---------------------------
 * Do you have any questions about `OneOf` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type OneOf<TUnionArray extends readonly object[]> =
	AddMissingKeys<TUnionArray[number], TUnionArray[number]>;
