import type { And, Equal, Satisfy } from "@/operator";
import type { ObjectMode } from "../utils";

/**
 * - Make all keys of `TObject` object type partial
 * ---------------------------
 * @param Mode The object operator mode
 * - `flat`: do not apply changes for sub-objects
 * - `deep`: apply changes recursively inside the object
 * ---------------------------
 * @example
 * ```tsx
 * import type { Obj } from "@dulysse1/ts-helper";
 *
 * type A = Obj.Partial<
 *  { a: string; b: number; }
 * >; // { a?: string; b?: number;  }
 * ```
 * ---------------------------
 * Do you have any questions about {@link Partial} usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Partial<
	TObject extends object,
	Mode extends ObjectMode = "flat",
> = {
	[key in keyof TObject]?: And<
		Equal<Mode, "deep"> extends true ? true : false,
		TObject[key] extends object ? true : false
	> extends true
		? Partial<Satisfy<TObject[key], object>, Mode>
		: TObject[key];
};
