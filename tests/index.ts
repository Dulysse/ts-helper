import type { Num } from "../dist";

declare function eval<T extends string>(value: T): Num.Eval<T>;

const result = eval("1+1");
//     ^?
