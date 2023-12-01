import type { Increment } from "./modules/increment";
import type { Decrement } from "./modules/decrement";
import type { Greater } from "./modules/greater";
import type { Lower } from "./modules/lower";
import type { GreaterEq } from "./modules/greaterEq";
import type { LowerEq } from "./modules/lowerEq";
import type { IsPositive } from "./modules/isPositive";
import type { IsNegative } from "./modules/isNegative";
import type { Add } from "./modules/add";
import type { Subtract } from "./modules/subtract";
import type { Opposite } from "./modules/opposite";
import type { Range } from "./modules/range";
import type { Between } from "./modules/between";
import type { IsZero } from "./modules/isZero";
import type { Multiply } from "./modules/multiply";
import type { Divide } from "./modules/divide";

/**
 * ### ✨ List of `ts-helper` numeric types ✨:
 * - {@link Increment}*
 * - {@link Decrement}*
 * - {@link Greater}*
 * - {@link Lower}*
 * - {@link GreaterEq}*
 * - {@link LowerEq}*
 * - {@link IsPositive}
 * - {@link IsNegative}
 * - {@link Add}*
 * - {@link Subtract}*
 * - {@link Opposite}*
 * - {@link Range}*
 * - {@link Between}*
 * - {@link IsZero}
 * - {@link Multiply}*
 * - {@link Divide}*
 * ---------------------------
 * ##### * ⚠️ Returns an absolute result for numbers in the interval `[-200; 200]`, otherwise it returns an `explicit result`. ⚠️
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
		GreaterEq,
		LowerEq,
		IsPositive,
		IsNegative,
		Add,
		Subtract,
		Opposite,
		Range,
		Between,
		IsZero,
		Multiply,
		Divide,
	};
}

export {
	Increment,
	Decrement,
	Greater,
	Lower,
	GreaterEq,
	LowerEq,
	IsPositive,
	IsNegative,
	Add,
	Subtract,
	Opposite,
	Range,
	Between,
	IsZero,
	Multiply,
	Divide,
};
