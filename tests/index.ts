import type { Num, Lab } from "../dist";

declare function eval<T extends string>(value: T): Num.Eval<T>;

const evaluation = eval("21+1");
//     ^?

declare function add<T1 extends number, T2 extends number>(
	n1: T1,
	n2: T2,
): Num.Add<T1, T2>;

declare function sub<T1 extends number, T2 extends number>(
	n1: T1,
	n2: T2,
): Num.Subtract<T1, T2>;

const resAdd = add(87.67, 10.34);
//      ^?

const resSub = sub(77.67, 154.34);
//      ^?

declare function multiply<T1 extends number, T2 extends number>(
	n1: T1,
	n2: T2,
): Num.Multiply<T1, T2>;

const resMultiply = add(1.008, 2);
//      ^?

type GAME = Lab.Connect4<
	//  ^?
	[
		[".", ".", ".", ".", ".", ".", "."],
		[".", ".", ".", ".", ".", ".", "."],
		[".", ".", ".", "O", "X", ".", "."],
		[".", ".", ".", "X", "X", ".", "."],
		[".", "O", "X", "O", "X", ".", "."],
		[".", "X", "O", "X", "O", "O", "."],
	]
>;
