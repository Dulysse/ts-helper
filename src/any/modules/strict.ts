/**
 * - The only valid way to use `any` as type. it's provide you to override the default eslint `@typescript-eslint/no-explicit-any` rule.
 * But be careful ! Don't use this type in your code for bad reasons.
 * ---------------------------
 * @example
 * ```tsx
 * import type { Any } from "@dulysse1/ts-helper";
 *
 * declare type IAnyFunction = (...args: Any.Strict[]) => Any.Strict; // "right way !"
 * const name: Any.Strict = {} // "wrong way !"
 * ```
 * ---------------------------
 * Do you have any questions about {@link Strict} usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export declare type Strict = any;
