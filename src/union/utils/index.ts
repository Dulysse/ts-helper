export declare type IntersectOf<TUnion> = (
	TUnion extends unknown ? (k: TUnion) => void : never
) extends (k: infer I) => void
	? I
	: never;
