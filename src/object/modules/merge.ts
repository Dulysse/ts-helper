import type { IsEqual } from "@/operator";
import type { ObjectMode } from "../utils";
import type { Prettify } from "@/object";

type AllKeys<T> = T extends unknown ? keyof T : never;

type OptionalKeys<T> = Exclude<AllKeys<T>, keyof T>;

type ValueAt<T, Key extends PropertyKey> = T extends unknown
	? Key extends keyof T
		? T[Key]
		: never
	: never;

type MergeValue<Left, Right, Mode extends ObjectMode> = Left extends object
	? Right extends object
		? IsEqual<Mode, "deep"> extends true
			? Merge<Left, Right, Mode>
			: Left | Right
		: Left | Right
	: Left | Right;

type MergeObjects<
	Left extends object,
	Right extends object,
	Mode extends ObjectMode,
> = Prettify<
	{
		[Key in Exclude<
			keyof Left | AllKeys<Right>,
			OptionalKeys<Right>
		>]: Key extends keyof Left
			? Key extends AllKeys<Right>
				? MergeValue<Left[Key], ValueAt<Right, Key>, Mode>
				: Left[Key]
			: ValueAt<Right, Key>;
	} & {
		[Key in Exclude<OptionalKeys<Right>, keyof Left>]?: ValueAt<Right, Key>;
	}
>;

/**
 * - Merge type object `TObjectA` with type object `TObjectB`
 * @template TObjectA The first object type
 * @template TObjectB The second object type
 * @template TMode The object operator mode
 * - `flat`: do not apply changes for sub-objects
 * - `deep`: apply changes recursively inside the object
 * - When `TObjectB` is a union, keys not present in every member are optional
 * @example
 * ```tsx
 * import type { Obj } from "@dulysse1/ts-helper";
 *
 * type A = Obj.Merge<
 *  { a: string; },
 *  { b: number; }
 * >; // { a: string; b: number; }
 * ```
 * ---------------------------
 * Do you have any questions about `Merge` usage ?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export declare type Merge<
	TObjectA extends object,
	TObjectB extends object,
	TMode extends ObjectMode = "flat",
> = MergeObjects<TObjectA, TObjectB, TMode>;
