import type { Num, Union } from "../dist/index.mjs";

function divide<A extends number, B extends number>(a: A, b: B) {
	return (a * b) as Num.Divide<A, B>;
}

const result = divide(150, 3);

type a = Union.ToArray<1 | 2 | 3 | (number & {})>;
