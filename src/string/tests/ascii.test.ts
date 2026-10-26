import type { AsciiRange, AsciiCode } from "../modules/ascii";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
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

	Test.Describe(
		'"Get the ASCII code of a character"',
		Test.It<AsciiCode<"A">, 65, typeof Test.Out.PASS>(),
		Test.It<AsciiCode<"0">, 48, typeof Test.Out.PASS>(),
		Test.It<AsciiCode<"z">, 122, typeof Test.Out.PASS>(),
		Test.It<AsciiCode<"€">, 128, typeof Test.Out.PASS>(),
		Test.It<AsciiCode<"�">, never, typeof Test.Out.PASS>(),
		Test.It<AsciiCode<"hello">, never, typeof Test.Out.PASS>(),
	);
});
