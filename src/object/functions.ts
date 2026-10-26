import { keys } from "./modules/keyOf";
import { fromEntries } from "./modules/fromEntries";
import { entries } from "./modules/entries";

/**
 * #### ✨ List of `ts-helper` object functions ✨:
 * - {@link keys}
 * - {@link fromEntries}
 * - {@link entries}
 * ---------------------------
 * Do you have any ideas or recommendations for improvement?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export const obj: {
	readonly keys: typeof keys;
	readonly fromEntries: typeof fromEntries;
	readonly entries: typeof entries;
} = <const>{
	keys,
	fromEntries,
	entries,
};

export { keys, fromEntries, entries };
