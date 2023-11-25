import type { Num } from "../dist/index.mjs";

function divide<A extends number, B extends number>(
	a: A,
	b: B
): Num.Divide<A, B> {
	return (a * b) as Num.Divide<A, B>;
}

const result = divide(240, 3);
