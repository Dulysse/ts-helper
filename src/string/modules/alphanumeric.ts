import type { AsciiCode, AsciiRange } from "@/string";

/**
 * - This module provides a type definition for alphanumeric characters.
 * @example
 * ```tsx
 * import type { Str } from "@dulysse1/ts-helper";
 *
 * type A = Str.Alphanumeric["a_z"]; // [...]
 * type B = Str.Alphanumeric["A_Z"]; // [...]
 * type C = Str.Alphanumeric["0_9"]; // [...]
 * ```
 * ---------------------------
 * Do you have any questions about `Alphanumeric` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Alphanumeric = {
	/**
	 * - An array of lowercase letters from 'a' to 'z'.
	 */
	a_z: AsciiRange<AsciiCode<"a">, AsciiCode<"z">>;
	/**
	 * - An array of lowercase letters with accents.
	 */
	accents: AsciiRange<AsciiCode<"à">, AsciiCode<"ÿ">>;
	/**
	 * - An array of uppercase letters from 'A' to 'Z'.
	 */
	A_Z: AsciiRange<AsciiCode<"A">, AsciiCode<"Z">>;
	/**
	 * - An array of uppercase letters with accents.
	 */
	ACCENTS: AsciiRange<AsciiCode<"À">, AsciiCode<"Ý">>;
	/**
	 * - An array of digits from '0' to '9'.
	 */
	"0_9": AsciiRange<AsciiCode<"0">, AsciiCode<"9">>;
};

/**
 * Intercection of uppercase and lowercase strings to represent special characters.
 * Includes all characters that are neither uppercase nor lowercase letters (specials, numbers).
 * @example
 * ```tsx
 * import type { Str } from "@dulysse1/ts-helper";
 *
 * const specialChar: Str.Special = "@"; // Valid
 * const anotherSpecialChar: Str.Special = "a"; // Error
 * const numberChar: Str.Special = "1"; // Valid
 * ```
 * ---------------------------
 * Do you have any questions about `Special` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 * | [my github](https://github.com/Dulysse)
 * | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Special = Uppercase<string> & Lowercase<string>;
