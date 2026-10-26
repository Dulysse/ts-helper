import type { Implicit } from "@/any";
import type { Constructor } from "../modules/constructor";
import { Test } from "@/test";
import { it } from "vitest";

type InstanceExample = {
	name: string;
};

type ParamsExample = [name: string];

it("type tests pass for this module", () => {
	Test.Describe(
		"Type definition for a constructor function",
		Test.It<
			InstanceType<Constructor["prototype"]>,
			Implicit,
			typeof Test.Out.PASS
		>(),
		Test.It<
			InstanceType<Constructor<[], InstanceExample>>,
			InstanceExample,
			typeof Test.Out.PASS
		>(),
		Test.It<
			InstanceType<Constructor<[], InstanceExample>>,
			InstanceExample,
			typeof Test.Out.PASS
		>(),
		Test.It<
			ConstructorParameters<Constructor<ParamsExample>>,
			ParamsExample,
			typeof Test.Out.PASS
		>(),
	);
});
