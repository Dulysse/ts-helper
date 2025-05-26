/**
 * - This module provides a type definition for a constructor function.
 * - It allows you to define a class constructor with specific argument types and a return type.
 * - The `Constructor` type can be used to create instances of classes with defined parameters.
 *
 * @template TArgs - An array of argument types that the constructor accepts.
 * @template TReturn - The return type of the constructor, typically the class instance type.
 *
 * ---------------------------
 * @example
 * ```tsx
 * import type { Class } from "@dulysse1/ts-helper";
 *
 * type MyClass = Class.Constructor<[string, number], boolean>;
 * const myInstance: MyClass = new MyClass('example', 42);
 * ```
 * ---------------------------
 * Do you have any questions about {@link Strict} usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare interface Constructor<
	TArgs extends unknown[] = unknown[],
	TReturn = unknown,
> {
	new (...args: TArgs): TReturn;
}
