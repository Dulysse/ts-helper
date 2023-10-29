import type { Increment } from "./modules/increment";
import type { Decrement } from "./modules/decrement";
import type { Greater } from "./modules/greater";
import type { Lower } from "./modules/lower";
import type { IsPositive } from "./modules/isPositive";
import type { IsNegative } from "./modules/isNegative";
import type { Add } from "./modules/add";
import type { Subtract } from "./modules/subtract";
import type { Opposite } from "./modules/opposite";

/**
 * List of `ts-helper` numeric types:
 * - {@link Increment}*
 * - {@link Decrement}*
 * - {@link Greater}*
 * - {@link Lower}*
 * - {@link IsPositive}
 * - {@link IsNegative}
 * - {@link Add}*
 * - {@link Subtract}*
 * - {@link Opposite}*
 *
 * ##### <i>* ⚠️ Only works for Numbers in range `[-250; 250]` ⚠️</i>
 * ---------------------------
 * Do you have any ideas or recommendations for improvement?
 * ### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare namespace Num {
	export {
		Increment,
		Decrement,
		Greater,
		Lower,
		IsPositive,
		IsNegative,
		Add,
		Subtract,
		Opposite,
	};
}

export {
	Increment,
	Decrement,
	Greater,
	Lower,
	IsPositive,
	IsNegative,
	Add,
	Subtract,
	Opposite,
};
