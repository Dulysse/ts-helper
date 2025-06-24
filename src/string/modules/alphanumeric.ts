/**
 * - This module provides a type definition for alphanumeric characters.
 * @example
 * ```tsx
 * import type { Str } from "@dulysse1/ts-helper";
 *
 * type A = Str.Alphanumeric["a_z"]; // [...]
 * type B = Str.Alphanumeric["A_Z"]; // [...]
 * type C = Str.Alphanumeric["NUM"]; // [...]
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
	a_z: [
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"g",
		"h",
		"i",
		"j",
		"k",
		"l",
		"m",
		"n",
		"o",
		"p",
		"q",
		"r",
		"s",
		"t",
		"u",
		"v",
		"w",
		"x",
		"y",
		"z",
	];
	/**
	 * - An array of uppercase letters from 'A' to 'Z'.
	 */
	A_Z: [
		"A",
		"B",
		"C",
		"D",
		"E",
		"F",
		"G",
		"H",
		"I",
		"J",
		"K",
		"L",
		"M",
		"N",
		"O",
		"P",
		"Q",
		"R",
		"S",
		"T",
		"U",
		"V",
		"W",
		"X",
		"Y",
		"Z",
	];
	/**
	 * - An array of digits from '0' to '9'.
	 */
	"0_9": ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
};
