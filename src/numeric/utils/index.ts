import type {
	GreaterEq,
	IsFloat,
	Lower,
	ParseFloat,
	ParseInt,
} from "@/numeric";
import type { NextPositive } from "@/numeric/modules/increment";
import type { Equal, Not, Or } from "@/operator";
import type { Split } from "@/string";
import type { IsUnion } from "@/union";

export declare type IsValidNumberInput<TNumber extends number> =
	TNumber extends number
		? Equal<TNumber, number> extends true
			? false
			: IsUnion<TNumber> extends true
				? false
				: true
		: false;

export declare type BuildTuple<
	L extends number,
	T extends number[] = [],
> = T["length"] extends L ? T : BuildTuple<L, [...T, 0]>;

export declare type DecimalOf<T extends string> =
	T extends `${infer TNumber extends number}`
		? Or<IsValidNumberInput<TNumber>, Not<IsFloat<TNumber>>> extends true
			? Split<T> extends [`${infer First extends number}`, ...infer Next]
				? Equal<Next, []> extends true
					? ParseInt<`${First}0`>
					: Next extends [`${infer Second extends number}`, ...infer Rest]
						? ParseInt<`${First}${Rest[0] extends `${UpperRoundingNumber}` ? NextPositive<Second> : Second}`>
						: never
				: never
			: never
		: never;

export declare type OppositeDecimal<T extends keyof DecimalMap> = DecimalMap[T];

declare type DecimalMap = {
	0: 100;
	1: 99;
	2: 98;
	3: 97;
	4: 96;
	5: 95;
	6: 94;
	7: 93;
	8: 92;
	9: 91;
	10: 90;
	11: 89;
	12: 88;
	13: 87;
	14: 86;
	15: 85;
	16: 84;
	17: 83;
	18: 82;
	19: 81;
	20: 80;
	21: 79;
	22: 78;
	23: 77;
	24: 76;
	25: 75;
	26: 74;
	27: 73;
	28: 72;
	29: 71;
	30: 70;
	31: 69;
	32: 68;
	33: 67;
	34: 66;
	35: 65;
	36: 64;
	37: 63;
	38: 62;
	39: 61;
	40: 60;
	41: 59;
	42: 58;
	43: 57;
	44: 56;
	45: 55;
	46: 54;
	47: 53;
	48: 52;
	49: 51;
	50: 50;
	51: 49;
	52: 48;
	53: 47;
	54: 46;
	55: 45;
	56: 44;
	57: 43;
	58: 42;
	59: 41;
	60: 40;
	61: 39;
	62: 38;
	63: 37;
	64: 36;
	65: 35;
	66: 34;
	67: 33;
	68: 32;
	69: 31;
	70: 30;
	71: 29;
	72: 28;
	73: 27;
	74: 26;
	75: 25;
	76: 24;
	77: 23;
	78: 22;
	79: 21;
	80: 20;
	81: 19;
	82: 18;
	83: 17;
	84: 16;
	85: 15;
	86: 14;
	87: 13;
	88: 12;
	89: 11;
	90: 10;
	91: 9;
	92: 8;
	93: 7;
	94: 6;
	95: 5;
	96: 4;
	97: 3;
	98: 2;
	99: 1;
};

export declare type Sign = "+" | "-";

export declare type GetSign<TNumber1 extends number, TNumber2 extends number> =
	GreaterEq<ParseFloat<`${TNumber1}`>, ParseFloat<`${TNumber2}`>> extends true
		? "+"
		: "-";

export declare type ParseDecimal<TNumber extends number> =
	Lower<TNumber, 10> extends true ? `0${TNumber}` : TNumber;

export declare type EvenNumber = 0 | 2 | 4 | 6 | 8;
export declare type UpperRoundingNumber = 5 | 6 | 7 | 8 | 9;
