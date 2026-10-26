import type { IsBranded } from "@/brand";
import type { Exclude, Filter } from "@/object";
import type { $brand } from "@/brand/modules/symbol";
import type { Branded } from "../modules/branded";
import { Test } from "@/test";
import { it } from "vitest";

type User = {
	uuid: Branded<string, "uuid">;
	name: string;
	createdAt: Branded<Date, "timestamp">;
	updatedAt: Branded<Date, "timestamp">;
};

it("type tests pass for this module", () => {
	Test.Describe(
		"Brand a type with a symbol and check it",
		Test.It<
			Exclude<User, Branded<unknown, "timestamp"> | Branded<unknown, "uuid">>,
			{ name: string },
			typeof Test.Out.PASS
		>(),
		Test.It<
			Filter<User, Branded<unknown, "uuid">>,
			Pick<User, "uuid">,
			typeof Test.Out.PASS
		>(),
		Test.It<
			Branded<string, "password">,
			string & { [$brand]: { password: true } },
			typeof Test.Out.PASS
		>(),
		Test.It<
			IsBranded<Branded<string, "password">, "password">,
			true,
			typeof Test.Out.PASS
		>(),
		Test.It<IsBranded<string, "password">, false, typeof Test.Out.PASS>(),
	);
});
