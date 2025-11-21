import type { Implicit } from "@/any";
import type { $internal } from "@/brand/modules/symbol";
import type { Equal, Fallback, Satisfy } from "@/operator";

import { Test } from "@/test";

Test.Describe(
	"Generate a tree structure from an object type",
	Test.It<
		Tree<
			{ a: { b: { c: number } }; d: string },
			{ showValues: false; pathSeparator: "/" }
		>,
		"a/b/c" | "d",
		typeof Test.Out.PASS
	>(),
	Test.It<
		Tree<
			{ x: { y: { z: boolean } }; w: number },
			{ pathSeparator: "->"; valueSeparator: "="; showValues: true }
		>,
		`x->y->z=true` | "x->y->z=false" | `w=${number}`,
		typeof Test.Out.PASS
	>(),
	Test.It<
		Tree<{ foo: { bar: { baz: string } }; qux: boolean }>,
		`foo.bar.baz` | "qux",
		typeof Test.Out.PASS
	>(),
	Test.It<
		Tree<
			{ foo: { bar: { baz: string }; sdk: string }; qux: boolean },
			{ valueSatisfy: string }
		>,
		`foo.bar.baz` | `foo.sdk`,
		typeof Test.Out.PASS
	>(),
);

/**
 * Configuration options for the Tree type
 */
declare interface TreeConfig {
	/**
	 * Separator used between tree levels in the output
	 * @default "."
	 */
	pathSeparator?: string;
	/**
	 * Separator used between keys and values in the output
	 * @default ":"
	 */
	valueSeparator?: string;
	/**
	 * Whether to show values in the output or just the keys
	 * @default false
	 */
	showValues?: boolean;
	/**
	 * Custom condition to determine if a value should be included in the output
	 * @default any (all values are included)
	 */
	valueSatisfy?: Implicit;
}

/**
 * The default configuration for the Tree type
 */
declare interface DefaultTreeConfig extends TreeConfig {
	pathSeparator: ".";
	valueSeparator: ":";
	showValues: false;
	valueSatisfy: Implicit;
}

/**
 * Infers and validates the TreeConfig type
 */
declare type InferTreeConfigError<TConfig extends TreeConfig> =
	Equal<TConfig["showValues"], boolean> extends true
		? {
				[$internal]: "'showValues' must be a boolean literal (true or false)";
			}
		: undefined;

/**
 * - Generates a string representation of the tree structure of an object type `TObject`
 * based on the provided configuration `TConfig`.
 * @template TObject - The object type to generate the tree structure from.
 * @template TConfig - Configuration options for generating the tree structure.
 * @example
 * ```tsx
 * import type { Obj } from "@dulysse1/ts-helper";
 *
 * type A = Obj.Tree<
 *  { a: { b: { c: number } }; d: string; },
 *  { showValues: false }
 * >; // "a.b.c" | "d"
 * ---------------------------
 * Do you have any questions about `Tree` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulysse.dupont@example.com)
 * | [my github](https://github.com/ulysse-dupont)
 * | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Tree<
	TObject extends object,
	TConfig extends TreeConfig = DefaultTreeConfig,
> =
	InferTreeConfigError<TConfig> extends infer TError
		? Equal<TError, undefined> extends true
			? {
					[K in keyof TObject]: TObject[K] extends object
						? `${Satisfy<K, string | number | bigint | boolean | null | undefined>}${Fallback<TConfig["pathSeparator"], DefaultTreeConfig["pathSeparator"]>}${Satisfy<Tree<TObject[K], TConfig>, string>}`
						: TObject[K] extends Fallback<
									TConfig["valueSatisfy"],
									DefaultTreeConfig["valueSatisfy"]
							  >
							? Fallback<
									TConfig["showValues"],
									DefaultTreeConfig["showValues"]
								> extends true
								? `${Satisfy<K, string | number | bigint | boolean | null | undefined>}${Fallback<TConfig["valueSeparator"], DefaultTreeConfig["valueSeparator"]>}${Satisfy<TObject[K], string | number | bigint | boolean | null | undefined>}`
								: `${Satisfy<K, string | number | bigint | boolean | null | undefined>}`
							: never;
				}[keyof TObject]
			: TError
		: never;
