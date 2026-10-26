import type { OneOf } from "../modules/oneOf";
import { Test } from "@/test";
import { it } from "vitest";

type BaseMessage = { id: string };
type TextMessage = BaseMessage & { text: string };
type ImgMessage = BaseMessage & { imgPath: string };
type UrlMessage = BaseMessage & { url: string };

it("type tests pass for this module", () => {
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
});
