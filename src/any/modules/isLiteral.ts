import type { Not } from "@/operator";
import type { IsPrimitive } from "@/any";

/**
 * - Check if `T` is a literal type.
 * @template T - The type to check.
 * @example
 * ```tsx
 * import type { Any } from "@dulysse1/ts-helper";
 *
 * type A = Any.IsLiteral<"hello">; // true
 * type B = Any.IsLiteral<1>; // true
 * type C = Any.IsLiteral<true>; // true
 * ```
 * ---------------------------
 * Do you have any questions about `IsLiteral` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type IsLiteral<T> = Not<IsPrimitive<T>>;
