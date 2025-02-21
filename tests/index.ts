import type { Num, Union, Any } from "../dist/index.mjs";

function divide<A extends number, B extends number>(a: A, b: B) {
	return (a * b) as Num.Divide<A, B>;
}

const result = divide(150, 3);

type a = Any.Is<"any">; // false
