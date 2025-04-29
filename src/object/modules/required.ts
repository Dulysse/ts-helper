import type { And, Equal, Satisfy } from "@/operator";
import type { ObjectMode } from "../utils";
import type { Prettify } from "@/object";

/**
 * - Make all keys of `TObject` object type required
 * ---------------------------
 * @param Mode The object operator mode
 * - `flat`: do not apply changes for sub-objects
 * - `deep`: apply changes recursively inside the object
 * ---------------------------
 * @example
 * ```tsx
 * import type { Obj } from "@dulysse1/ts-helper";
 *
 * type A = Obj.Required<
 *  { a?: string; b: number; }
 * >; // { a: string; b: number;  }
 * ```
 * ---------------------------
 * Do you have any questions about {@link Required} usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Required<
	TObject extends object,
	Mode extends ObjectMode = "flat",
> = Prettify<{
	[key in keyof TObject]-?: And<
		Equal<Mode, "deep"> extends true ? true : false,
		TObject[key] extends object ? true : false
	> extends true
		? Required<Satisfy<TObject[key], object>, Mode>
		: TObject[key];
}>;
