import type { UnAccent } from "../modules/unAccent";
import { Test } from "@/test";
import { it } from "vitest";

it("type tests pass for this module", () => {
	Test.Describe(
		"Convert a string to its unaccented version",
		Test.It<UnAccent<"Café">, "Cafe", typeof Test.Out.PASS>(),
		Test.It<UnAccent<"Déjà vu">, "Deja vu", typeof Test.Out.PASS>(),
		Test.It<UnAccent<"À bientôt">, "A bientot", typeof Test.Out.PASS>(),
		Test.It<UnAccent<"Crème brûlée">, "Creme brulee", typeof Test.Out.PASS>(),
	);
});
