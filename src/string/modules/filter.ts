import { Equal } from "@/operator";
import type { IsExactString } from "@/string";

import { Test } from "@/test";

Test.Describe(
	"Filter a string to only include allowed characters",
	Test.It<
		Filter<"Hello World!", { allowedChars: ["H", "e", "l", "o", " "] }>,
		"Hello ol",
		typeof Test.Out.PASS
	>(),
	Test.It<
		Filter<
			"123-456-7890",
			{ allowedChars: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"] }
		>,
		"1234567890",
		typeof Test.Out.PASS
	>(),
	Test.It<
		Filter<
			"TypeScript is awesome!",
			{ allowedChars: ["a", "e", "i", "o", "u", "s", "t"] }
		>,
		"eitisaesoe",
		typeof Test.Out.PASS
	>(),
	Test.It<
		Filter<"Filter this string!", { excludedChars: ["t", "h", "i", "s"] }>,
		"Fler  rng!",
		typeof Test.Out.PASS
	>(),
	Test.It<
		Filter<
			"Exclude vowels from this string.",
			{ excludedChars: ["a", "e", "i", "o", "u"] }
		>,
		"Excld vwls frm ths strng.",
		typeof Test.Out.PASS
	>(),
	Test.It<
		Filter<
			"Special characters: !@#$%^&*()",
			{ excludedChars: ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"] }
		>,
		"Special characters: ",
		typeof Test.Out.PASS
	>(),
	Test.It<
		Filter<`demo ${string}`, { allowedChars: [] }>,
		never,
		typeof Test.Out.PASS
	>(),
	Test.It<
		Filter<`demo ${string}`, { excludedChars: [] }>,
		`demo ${string}`,
		typeof Test.Out.PASS
	>(),
	Test.It<
		Filter<string, { allowedChars: ["a", "b", "c"] }>,
		string,
		typeof Test.Out.PASS
	>(),
	Test.It<
		Filter<"Hello", { excludedChars: [] }>,
		"Hello",
		typeof Test.Out.PASS
	>(),
);

/**
 * Options for filtering characters in a string.
 */
declare type FilterOptions =
	| {
			/**
			 * An array of allowed characters. Only these characters will be retained in the filtered string.
			 */
			allowedChars: string[];
	  }
	| {
			/**
			 * An optional array of characters to be excluded from the filtering process.
			 */
			excludedChars: string[];
	  };

declare type _Filter<
	TString extends string,
	TOptions extends FilterOptions,
	TResult extends string = "",
> =
	Equal<TString, string> extends true
		? `${TResult}${string}`
		: TString extends `${infer Head}${infer Tail extends string}`
			? _Filter<
					Tail,
					TOptions,
					Equal<Head, string> extends true
						? `${TResult}${Head}`
						: TOptions extends {
									allowedChars: infer TAllowedChars extends string[];
							  }
							? Head extends TAllowedChars[number]
								? `${TResult}${Head}`
								: TResult
							: TOptions extends {
										excludedChars: infer TExcludedChars extends string[];
								  }
								? Head extends TExcludedChars[number]
									? TResult
									: `${TResult}${Head}`
								: TResult
				>
			: TResult;

/**
 * - Filters a string to only include characters from a specified set of allowed characters.
 * @template TString The string to be filtered.
 * @template TOptions The filtering options, either specifying allowed characters or excluded characters.
 *
 * @example
 * ```tsx
 * import type { Str } from "@dulysse1/ts-helper";
 *
 * type A = Str.Filter<"Hello World!", { allowedChars: ["H", "e", "l", "o", " "] }>; // "Hello ol"
 * type B = Str.Filter<"123-456-7890", { allowedChars: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"] }>; // "1234567890"
 * type C = Str.Filter<"TypeScript is awesome!", { excludedChars: ["T"] }>; // "ypeScript is awesome!"
 *
 * ```
 * ---------------------------
 * Do you have any questions about `Filter` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Filter<
	TString extends string,
	TOptions extends FilterOptions,
> = TOptions extends { allowedChars: [] }
	? never
	: TOptions extends { excludedChars: [] }
		? TString
		: IsExactString<TString> extends true
			? string
			: _Filter<TString, TOptions>;
