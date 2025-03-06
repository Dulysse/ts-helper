import type { Num } from "../dist";

declare function eval<T extends string>(value: T): Num.Eval<T>;

const result = eval("3(4-2) + 15 * (2 + 1)");
//     ^?
