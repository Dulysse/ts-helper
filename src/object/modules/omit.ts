import type { And, Equal, Satisfy } from "@/operator";
import type { ObjectMode } from "../utils";
import type { Exclude } from "@/union";

/**
 * #### Omit `TKey` keys from object `TObject`
 * ---------------------------
 * @param Mode The object operator mode
 * - `flat`: do not apply changes for sub-objects
 * - `deep`: apply changes recursively inside the object
 * ---------------------------
 * @example
 * ```tsx
 * import type { Obj } from "@dulysse1/ts-helper";
 *
 * type Omitted = Obj.Omit<{ a: string; b: { a: number } }, "a" | "b">; // {}
 * ```
 * ---------------------------
 * Do you have any questions about {@link Omit} usage ?
 * ### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Omit<
	TObject extends object,
	TKey extends string | number | symbol,
	Mode extends ObjectMode = "flat",
> = {
	[key in Exclude<keyof TObject, TKey>]-?: key extends keyof TObject
		? And<
				Equal<Mode, "deep"> extends true ? true : false,
				keyof TObject[key] extends keyof TObject ? true : false
		  > extends true
			? Omit<Satisfy<TObject[key], object>, TKey, Mode>
			: TObject[key]
		: never;
};
