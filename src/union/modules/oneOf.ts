import { Test } from "@/test";

type BaseMessage = { id: string };
type TextMessage = BaseMessage & { text: string };
type ImgMessage = BaseMessage & { imgPath: string };
type UrlMessage = BaseMessage & { url: string };

Test.Describe(
	"Make union discrimitable",
	Test.It<
		OneOf<[TextMessage, ImgMessage, UrlMessage]>,
		TextMessage | ImgMessage | UrlMessage,
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
				can: undefined;
		  }
		| {
				can: number;
				bar: undefined;
		  },
		typeof Test.Out.PASS
	>(),
);

type MergeTypes<
	TUnionArray extends unknown[],
	TResult = {},
> = TUnionArray extends [infer Head, ...infer Rem]
	? MergeTypes<Rem, TResult & Head>
	: TResult;

type _OneOf<
	TUnionArray extends unknown[],
	TResult = never,
	TAllProperties = MergeTypes<TUnionArray>,
> = TUnionArray extends [infer Head, ...infer Rest]
	? _OneOf<Rest, TResult | OnlyFirst<Head, TAllProperties>, TAllProperties>
	: TResult;

type OnlyFirst<F, S> = F & { [Key in keyof Omit<S, keyof F>]?: never };

/**
 * - Make `TUnionArray` union array element discrimitable
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
 *	let val0: IFoo = { bar: "hello" } // OK
 *	let val1: IFoo = { can: 22 } // OK
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
export declare type OneOf<TUnionArray extends unknown[]> = _OneOf<TUnionArray>;
