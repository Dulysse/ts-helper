import type { Filter } from "../modules/filter";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
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
});
