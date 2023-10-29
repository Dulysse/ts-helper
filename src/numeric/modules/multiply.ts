import type { And } from "@/operator";
import type {} from "@/numeric";
import type { IsValidInput } from "../utils";

/**
 * #### Multiply `N1` and `N2`
 * ### ⚠️ Only works for Numbers in range `[-250; 250]` ⚠️
 * ---------------------------
 * @example
 * ```tsx
 * import type { Numeric } from "@dulysse1/ts-helper";
 *
 * type MultiplyPositive = Numeric.Multiply<6, 7>; // 42
 * type MultiplyNegative = Numeric.Multiply<6, -7>; // -42
 * ```
 * ---------------------------
 * Do you have any questions about {@link Multiply} usage ?
 * ### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Multiply<N1 extends number, N2 extends number> = And<
	IsValidInput<N1>,
	IsValidInput<N2>
> extends true
	? N1
	: never;
