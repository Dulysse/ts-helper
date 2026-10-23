![https://raw.githubusercontent.com/Dulysse/ts-helper/refs/heads/main/assets/logo.svg](https://raw.githubusercontent.com/Dulysse/ts-helper/refs/heads/main/assets/logo.svg)

# 🛠 ts-helper 🛠

<i>A personal TypeScript playground for exploring the limits of TypeScript's type system and sharpening my skills. ✨</i>

## Getting started 🆙

### Prerequisites

Install TypeScript in your project

```shell
npm install typescript --save-dev
```

`Or`

```shell
yarn add typescript --dev
```

`Or`

```shell
pnpm i -D typescript
```

For best results, add this to your `tsconfig.json`

```json
{
	"compilerOptions": {
		"strictNullChecks": true, // highly recommended (required by few utilities)
		"strict": true, // this is optional, but enable whenever possible
		"lib": ["es2015"] // this is the lowest supported standard library
	}
}
```

## Usage 🤔

### ES module import ✅

```tsx
import type { Num, Arr, Str } from "@dulysse1/ts-helper";
// now you can create your types!
```

## Documentation 🧗

| Num                 | Op                    | Obj               | Arr             | Union           | Str               | Any         | Lab         | Class           | Brd             | Test          |
| ------------------- | --------------------- | ----------------- | --------------- | --------------- | ----------------- | ----------- | ----------- | --------------- | --------------- | ------------- |
| [Numbers](#numbers) | [Operator](#operator) | [Object](#object) | [Array](#array) | [Union](#union) | [String](#string) | [Any](#any) | [Lab](#lab) | [Class](#class) | [Brand](#brand) | [Test](#test) |

**Exports — overview**

This shows the exports currently provided from the `src/` directory.

- Num: [Increment](#num-increment), [Decrement](#num-decrement), [Greater](#num-greater), [Lower](#num-lower), [GreaterEq](#num-greatereq), [LowerEq](#num-lowereq), [IsPositive](#num-ispositive), [IsNegative](#num-isnegative), [Add](#num-add), [Subtract](#num-subtract), [Opposite](#num-opposite), [Range](#num-range), [Between](#num-between), [IsZero](#num-iszero), [Multiply](#num-multiply), [Divide](#num-divide), [Eval](#num-eval), [Factorial](#num-factorial), [Modulo](#num-modulo), [Power](#num-power), [IsFloat](#num-isfloat), [Compare](#num-compare), [Comparators](#num-comparators), [ParseInt](#num-parseint), [ParseFloat](#num-parsefloat), [IsEven](#num-iseven), [IsOdd](#num-isodd), [IsInteger](#num-isinteger), [Abs](#num-abs)
- Op: [Equal](#op-equal), [Satisfy](#op-satisfy), [And](#op-and), [Or](#op-or), [Not](#op-not), [Xor](#op-xor), [AndAll](#op-andall), [OrAll](#op-orall), [If](#op-if), [Fallback](#op-fallback), [IsEqual](#op-isequal), [IsAssignable](#op-isassignable)
- Obj: [Merge](#obj-merge), [KeyOf](#obj-keyof), [Intersection](#obj-intersection), [Omit](#obj-omit), [Partial](#obj-partial), [Required](#obj-required), [Prettify](#obj-prettify), [Rename](#obj-rename), [HasKey](#obj-haskey), [Filter](#obj-filter), [Update](#obj-update), [Reversed](#obj-reversed), [Exclude](#obj-exclude), [Tree](#obj-tree), [Entries](#obj-entries)[FromEntries](#obj-from-entries)
- Arr: [IsTuple](#arr-istuple), [Reverse](#arr-reverse), [Readable](#arr-readable), [Length](#arr-length), [At](#arr-at), [ToUnion](#arr-tounion), [IsReadonly](#arr-isreadonly), [Includes](#arr-includes), [Join](#arr-join), [First](#arr-first), [Last](#arr-last), [Count](#arr-count), [Concat](#arr-concat), [Flat](#arr-flat), [Fill](#arr-fill), [FillRange](#arr-fillrange), [Filter](#arr-filter), [Zip](#arr-zip), [Unique](#arr-unique), [Map](#arr-map), [Infer](#arr-infer), [Some](#arr-some), [IndexOf](#arr-indexof)
- Union: [Last](#union-last), [Exclude](#union-exclude), [ToArray](#union-toarray), [Count](#union-count), [First](#union-first), [IsUnion](#union-isunion), [Through](#union-through), [Has](#union-has), [OneOf](#union-oneof)
- Str: [IsExactString](#str-isexactstring), [ContainExactString](#str-containexactstring), [Split](#str-split), [Width](#str-width), [Replace](#str-replace), [ReplaceAll](#str-replaceall), [PlacedAt](#str-placedat), [Reversed](#str-reversed), [Repeat](#str-repeat), [TrimStart](#str-trimstart), [TrimEnd](#str-trimend), [Trim](#str-trim), [Count](#str-count), [Includes](#str-includes), [Infer](#str-infer), [Alphanumeric](#str-alphanumeric), [Special](#str-special), [ReplaceMap](#str-replacemap), [UnAccent](#str-unaccent), [ToCamelCase](#str-tocamelcase), [ToPascalCase](#str-topascalcase), [ToKebabCase](#str-tokebabcase), [ToSnakeCase](#str-tosnakecase), [AsciiMap](#str-asciimap), [AsciiCode](#str-asciicode), [AsciiRange](#str-asciirange), [IsUpperCase](#str-isuppercase), [IsLowerCase](#str-islowercase), [IsDigit](#str-isdigit), [Filter](#str-filter)
- Any: [Implicit](#any-implicit), [IsAny](#any-isany), [IsLiteral](#any-isliteral), [PrimitiveOf](#any-primitiveof), [IsPrimitive](#any-isprimitive)
- Lab: [TicTacToe](#lab-tictactoe), [Connect4](#lab-connect4)
- Class: [Constructor](#class-constructor)
- Brd: [Symbol](#brd-symbol), [IsBranded](#brd-isbranded), [Branded](#brd-branded)
- Test: [Describe](#test-describe), [It](#test-it), [Out](#test-out)

### Examples

<a id="test"></a>

<a id="test-describe"></a>

<a id="test-it"></a>

<a id="test-out"></a>

### 🧪 Test your own types

- Since version `1.3.0` you can test your own types like unit test with compiler check. Here is an example of usage with a type from my module:

```tsx
import { Test, type Num } from "@dulysse1/ts-helper";

Test.Describe(
	"Evaluation of mathematical expressions represented as string",
	Test.It<Num.Eval<"2+2*2">, 6>(),
	Test.It<Num.Eval<"20.2-4/2">, 18.2, typeof Test.Out.PASS>(),
	Test.It<Num.Eval<"HELLO">, number, typeof Test.Out.FAIL>(),
	Test.It<Num.Eval<"23.3/32323">, number, typeof Test.Out.PASS>(),
	//         [Tested type]  [Expected]  [Comparison result (optional)]
);

Test.Describe(
	"Check if a number is between two other numbers",
	Test.It<Num.Between<1, 1, 5>, true, typeof Test.Out.PASS>(),
	Test.It<Num.Between<0, 10, 20>, true, typeof Test.Out.FAIL>(),
	Test.It<Num.Between<number, 10, 7>, boolean, typeof Test.Out.PASS>(),
);
```

- Add the following script in your package.json:

```json
{
	"test:type": "npx tsc --extendedDiagnostics --noEmit"
}
```

- You can now run the command to check your tested types!

<a id="numbers"></a>

### 👉 `Numbers`

- ⚠️ Returns an absolute result with a precision of two decimals for numbers that don't reach compiler limits, otherwise it returns an `explicit result`. ⚠️

- New feature since version `1.2.6`! The multiply function allow one `float` type 🤯🤯🤯

![https://raw.githubusercontent.com/Dulysse/ts-helper/refs/heads/main/assets/multiply.png](https://raw.githubusercontent.com/Dulysse/ts-helper/refs/heads/main/assets/multiply.png)

- New feature since version `1.2.2`! Add and Substract functions allow `float` type 🤯🤯

![https://raw.githubusercontent.com/Dulysse/ts-helper/refs/heads/main/assets/float.png](https://raw.githubusercontent.com/Dulysse/ts-helper/refs/heads/main/assets/float.png)

- New feature since version `1.1.1`! Eval function return type for calculation 🤯

![https://raw.githubusercontent.com/Dulysse/ts-helper/refs/heads/main/assets/eval.png](https://raw.githubusercontent.com/Dulysse/ts-helper/refs/heads/main/assets/eval.png)

<a id="num-increment"></a>

- Increment a number by one

```tsx
import type { Num } from "@dulysse1/ts-helper";

type A = Num.Increment<5>; // 6
type B = Num.Increment<0>; // 1
```

<a id="num-decrement"></a>

- Decrement a number by one

```tsx
import type { Num } from "@dulysse1/ts-helper";

type A = Num.Decrement<5>; // 4
type B = Num.Decrement<0>; // -1
```

<a id="num-greater"></a>

- Check whether `A` is greater than `B`

```tsx
import type { Num } from "@dulysse1/ts-helper";

type A = Num.Greater<5, 3>; // true
type B = Num.Greater<3, 5>; // false
```

<a id="num-lower"></a>

- Check whether `A` is lower than `B`

```tsx
import type { Num } from "@dulysse1/ts-helper";

type A = Num.Lower<3, 5>; // true
type B = Num.Lower<5, 3>; // false
```

<a id="num-greatereq"></a>

- Check whether `A` is greater than or equal to `B`

```tsx
import type { Num } from "@dulysse1/ts-helper";

type A = Num.GreaterEq<5, 5>; // true
type B = Num.GreaterEq<4, 5>; // false
```

<a id="num-lowereq"></a>

- Check whether `A` is lower than or equal to `B`

```tsx
import type { Num } from "@dulysse1/ts-helper";

type A = Num.LowerEq<3, 3>; // true
type B = Num.LowerEq<4, 3>; // false
```

<a id="num-opposite"></a>

- Get the opposite of a number

```tsx
import type { Num } from "@dulysse1/ts-helper";

type A = Num.Opposite<5>; // -5
type B = Num.Opposite<-3>; // 3
```

<a id="num-range"></a>

- Generate a range of numbers between `Start` and `End`

```tsx
import type { Num } from "@dulysse1/ts-helper";

type A = Num.Range<1, 5>; // [1, 2, 3, 4, 5]
type B = Num.Range<5, 1>; // [5, 4, 3, 2, 1]
```

<a id="num-between"></a>

- Check if a number is between two other numbers

```tsx
import type { Num } from "@dulysse1/ts-helper";

type A = Num.Between<3, 1, 5>; // true
type B = Num.Between<6, 1, 5>; // false
```

<a id="num-iszero"></a>

- Check if a number is zero

```tsx
import type { Num } from "@dulysse1/ts-helper";

type A = Num.IsZero<0>; // true
type B = Num.IsZero<4>; // false
```

<a id="num-modulo"></a>

- Compute the modulo of two numbers

```tsx
import type { Num } from "@dulysse1/ts-helper";

type A = Num.Modulo<10, 3>; // 1
type B = Num.Modulo<8, 4>; // 0
```

<a id="num-power"></a>

- Raise a number to a given power

```tsx
import type { Num } from "@dulysse1/ts-helper";

type A = Num.Power<2, 3>; // 8
type B = Num.Power<5, 2>; // 25
```

<a id="num-compare"></a>

- Compare two numbers and return a comparison result

```tsx
import type { Num } from "@dulysse1/ts-helper";

type A = Num.Compare<2, 5>; // -1
type B = Num.Compare<5, 2>; // 1
type C = Num.Compare<5, 5>; // 0
```

<a id="num-comparators"></a>

- Expose the available comparison operators

```tsx
import type { Num } from "@dulysse1/ts-helper";

type Cmp = Num.Comparators; // { "<": ...; ">": ...; "==": ... }
```

<a id="num-isinteger"></a>

- Check if a number is an integer

```tsx
import type { Num } from "@dulysse1/ts-helper";

type A = Num.IsInteger<5>; // true
type B = Num.IsInteger<5.5>; // false
```

<a id="num-abs"></a>

- Get the absolute value of a number

```tsx
import type { Num } from "@dulysse1/ts-helper";

type A = Num.Abs<-5>; // 5
type B = Num.Abs<7>; // 7
```

<a id="num-ispositive"></a>

- Check if a number is `positive`

```tsx
import type { Num } from "@dulysse1/ts-helper";

type A = Num.IsPositive<-2343>; // false
type B = Num.IsPositive<134>; // true
type C = Num.IsPositive<0>; // true
```

<a id="num-add"></a>

- Add two numbers

```tsx
import type { Num } from "@dulysse1/ts-helper";

type A = Num.Add<10, 10>; // 20
type B = Num.Add<-10, 10>; // 0
type C = Num.Add<-23, -34>; // -57
type C = Num.Add<87.67, 10.34>; // 98.01  NEW!
```

<a id="num-subtract"></a>

- Substract two numbers

```tsx
import type { Num } from "@dulysse1/ts-helper";

type A = Num.Subtract<10, 10>; // 0
type B = Num.Subtract<10, -40>; // 50
type C = Num.Subtract<12.4, 3.2>; // 9.2  NEW!
```

<a id="num-multiply"></a>

- Multiply two numbers

```tsx
import type { Num } from "@dulysse1/ts-helper";

type A = Num.Multiply<10, 10>; // 100
type B = Num.Multiply<-6, 7>; // -42
type C = Num.Multiply<234, 783>; // number
```

<a id="num-divide"></a>

- Divide two numbers

```tsx
import type { Num } from "@dulysse1/ts-helper";

type A = Num.Divide<20, 10>; // 2
type B = Num.Divide<0, 7>; // 0
type C = Num.Divide<7, 0>; // number
```

<a id="num-factorial"></a>

- Get the `factorial` of one number

```tsx
import type { Num } from "@dulysse1/ts-helper";

type A = Num.Factorial<0>; // 1
type B = Num.Factorial<-3>; // -6
type C = Num.Factorial<5>; // 120
```

<a id="num-iseven"></a>

- Check if a number is `even`

```tsx
import type { Num } from "@dulysse1/ts-helper";

type A = Num.IsEven<0>; // true
type B = Num.IsEven<-3>; // false
type C = Num.IsEven<5.5>; // false
```

<a id="num-isodd"></a>

- Check if a number is `odd`

```tsx
import type { Num } from "@dulysse1/ts-helper";

type A = Num.IsOdd<0>; // false
type B = Num.IsOdd<-3>; // true
type C = Num.IsOdd<5.5>; // true
```

<a id="num-isfloat"></a>

- Check if a number is `float`

```tsx
import type { Num } from "@dulysse1/ts-helper";

type A = Num.IsFloat<0>; // false
type B = Num.IsFloat<-3>; // false
type C = Num.IsFloat<5.5>; // true
```

<a id="num-parsefloat"></a>

- Parse a string to `float` number

```tsx
import type { Num } from "@dulysse1/ts-helper";

type A = Num.ParseFloat<"0">; // 0
type B = Num.ParseFloat<"-3">; // -3
type C = Num.ParseFloat<"5.5">; // 5.5
```

<a id="num-parseint"></a>

- Parse a string to `integer` number

```tsx
import type { Num } from "@dulysse1/ts-helper";

type A = Num.ParseInt<"0">; // 0
type B = Num.ParseInt<"-3">; // -3
type C = Num.ParseInt<"5.5">; // 5
```

<a id="object"></a>

### 👉 `Object`

- Get keys of object by an optional filter

```tsx
import type { Obj } from "@dulysse1/ts-helper";

type A = Obj.KeyOf<{ a: string; b: number }, string>; // "a"
```

- Merge two type objects

```tsx
import type { Obj } from "@dulysse1/ts-helper";

type A = Obj.Merge<{ a: string }, { b: number }>; // { a: string; b: number; }
```

<a id="obj-merge"></a>

- Merge two object types into one

```tsx
import type { Obj } from "@dulysse1/ts-helper";

type A = Obj.Merge<{ a: string }, { b: number }>; // { a: string; b: number }
```

<a id="obj-keyof"></a>

- Get keys of an object by optional value filtering

```tsx
import type { Obj } from "@dulysse1/ts-helper";

type A = Obj.KeyOf<{ a: string; b: number; c: boolean }, string>; // "a"
type B = Obj.KeyOf<{ a: string; b: number }, number>; // "b"
```

<a id="obj-intersection"></a>

- Intersect two object types

```tsx
import type { Obj } from "@dulysse1/ts-helper";

type A = Obj.Intersection<{ a: string }, { a: string; b: number }>; // { a: string }
```

<a id="obj-omit"></a>

- Omit specific keys from an object type

```tsx
import type { Obj } from "@dulysse1/ts-helper";

type A = Obj.Omit<{ a: string; b: number; c: boolean }, "b" | "c">; // { a: string }
```

<a id="obj-partial"></a>

- Make every object property optional

```tsx
import type { Obj } from "@dulysse1/ts-helper";

type A = Obj.Partial<{ a: string; b: number }>; // { a?: string; b?: number }
```

<a id="obj-required"></a>

- Make every object property required

```tsx
import type { Obj } from "@dulysse1/ts-helper";

type A = Obj.Required<{ a?: string; b?: number }>; // { a: string; b: number }
```

<a id="obj-prettify"></a>

- Flatten complex type intersections into a readable object

```tsx
import type { Obj } from "@dulysse1/ts-helper";

type A = Obj.Prettify<{ a: string } & { b: number }>; // { a: string; b: number }
```

<a id="obj-rename"></a>

- Rename object keys without changing the value type

```tsx
import type { Obj } from "@dulysse1/ts-helper";

type A = Obj.Rename<{ a: string }, "a", "b">; // { b: string }
```

<a id="obj-haskey"></a>

- Check whether a key exists in an object type

```tsx
import type { Obj } from "@dulysse1/ts-helper";

type A = Obj.HasKey<{ a: string }, "a">; // true
type B = Obj.HasKey<{ a: string }, "b">; // false
```

<a id="obj-filter"></a>

- Filter object keys by value type

```tsx
import type { Obj } from "@dulysse1/ts-helper";

type A = Obj.Filter<{ a: string; b: number; c: boolean }, string | number>; // { a: string; b: number }
```

<a id="obj-update"></a>

- Update the value type of an existing key

```tsx
import type { Obj } from "@dulysse1/ts-helper";

type A = Obj.Update<{ count: number }, "count", string>; // { count: string }
```

<a id="obj-reversed"></a>

- Reverse the key order of an object type

```tsx
import type { Obj } from "@dulysse1/ts-helper";

type A = Obj.Reversed<{ a: "x"; b: "y"; c: "z" }>; // { x: 'a'; y: 'b'; z: 'c'; }
```

<a id="obj-exclude"></a>

- Exclude one or more keys from an object type

```tsx
import type { Obj } from "@dulysse1/ts-helper";

type A = Obj.Exclude<{ a: string; b: number; c: boolean }, "a" | "c">; // { b: number }
```

<a id="obj-tree"></a>

- Work with nested object trees and recursive structures

```tsx
import type { Obj } from "@dulysse1/ts-helper";

type A = Obj.Tree<{ user: { name: string } }>; // { user: { name: string } }
```

<a id="obj-entries"></a>

- Extract object entries as a union of `[key, value]` tuples

```tsx
import { type Obj, obj } from "@dulysse1/ts-helper";

type A = Obj.Entries<{ a: string; b: number }>; // [["a", string], ["b", number]]

const a = obj.entries({
	id: 11,
	name: "Diego",
	age: 43,
}); // TYPED [["id", 11], ["name", "Diego"], ["age", 43]]
```

<a id="obj-from-entries"></a>

- Get object from given entries union of `[key, value]` tuples

```tsx
import { type Obj, obj } from "@dulysse1/ts-helper";

type A = Obj.FromEntries<[["a", string], ["b", number]]>; // { a: string; b: number }

const a = obj.fromEntries([
	["id", 11],
	["name", "Diego"],
	["age", 43],
]); // TYPED { id: 11; name: "Diego"; age: 43; }
```

<a id="string"></a>

### 👉 `String`

- Infer filter logic to a string (`since v1.3.0`)

```tsx
import type { Str } from "@dulysse1/ts-helper";

function checkEmail<T extends string>(
	email: Str.Infer<
		T,
		{
			minChar: 5;
			maxChar: 40;
			pattern: `${string}@${string}.${"com" | "fr" | "us"}`;
		}
	>,
) {
	//...
}

checkEmail(""); // ERROR ❌
checkEmail("demo@d"); // ERROR ❌
checkEmail("demo@domain.com"); // ✅
```

- Transform a string to `camelCase` or `snake_case` or `kebab-case` or `PascalCase`
  (`since v1.4.1`)

```tsx
import type { Str, str } from "@dulysse1/ts-helper";

type A = Str.ToCamelCase<"hello world">; // "helloWorld"
type B = Str.ToPascalCase<"hello world">; // "HelloWorld"

// Typescript implementation example:
const a = str.toCamelCase("This text will be converted into camel Case"); // "thisTextWillBeConvertedIntoCamelCase"
const b = str.toSnakeCase("Hello World"); // "hello_world"
```

- Split a string to array

```tsx
import type { Str } from "@dulysse1/ts-helper";

type A = Str.Split<"coucou">; // ["c", "o", "u", "c", "o", "u"]
type B = Str.Split<"coucou", "c">; // ["ou", "ou"]
```

- Replace all iteration of one character

```tsx
import type { Str } from "@dulysse1/ts-helper";

type A = Str.ReplaceAll<"coucou", "c", "x">; // "xouxou"
```

<a id="str-isexactstring"></a>

- Check whether a string is exactly a specific literal value

```tsx
import type { Str } from "@dulysse1/ts-helper";

type A = Str.IsExactString<"hello", "hello">; // true
type B = Str.IsExactString<"hello", "world">; // false
```

<a id="str-split"></a>

- Split a string into an array of characters

```tsx
import type { Str } from "@dulysse1/ts-helper";

type A = Str.Split<"coucou">; // ["c", "o", "u", "c", "o", "u"]
```

<a id="str-containexactstring"></a>

- Check whether a string contains an exact substring

```tsx
import type { Str } from "@dulysse1/ts-helper";

type A = Str.ContainExactString<"hello world", "world">; // true
```

<a id="str-width"></a>

- Measure the printable width of a string

```tsx
import type { Str } from "@dulysse1/ts-helper";

type A = Str.Width<"Hi">; // 2
type B = Str.Width<"é">; // 1
```

<a id="str-replace"></a>

- Replace the first matching occurrence in a string

```tsx
import type { Str } from "@dulysse1/ts-helper";

type A = Str.Replace<"hello world", "world", "there">; // "hello there"
```

<a id="str-replaceall"></a>

- Replace all occurrences of one character or substring

```tsx
import type { Str } from "@dulysse1/ts-helper";

type A = Str.ReplaceAll<"coucou", "c", "x">; // "xouxou"
```

<a id="str-placedat"></a>

- Insert a string at a specific index

```tsx
import type { Str } from "@dulysse1/ts-helper";

type A = Str.PlacedAt<"abcd", "X", 2>; // "abXd"
```

<a id="str-reversed"></a>

- Reverse a string

```tsx
import type { Str } from "@dulysse1/ts-helper";

type A = Str.Reversed<"abc">; // "cba"
```

<a id="str-repeat"></a>

- Repeat a string a given number of times

```tsx
import type { Str } from "@dulysse1/ts-helper";

type A = Str.Repeat<"ha", 3>; // "hahaha"
```

<a id="str-trimstart"></a>

- Remove leading whitespace from a string

```tsx
import type { Str } from "@dulysse1/ts-helper";

type A = Str.TrimStart<"  hello">; // "hello"
```

<a id="str-trimend"></a>

- Remove trailing whitespace from a string

```tsx
import type { Str } from "@dulysse1/ts-helper";

type A = Str.TrimEnd<"hello  ">; // "hello"
```

<a id="str-trim"></a>

- Trim spaces from both ends of a string

```tsx
import type { Str } from "@dulysse1/ts-helper";

type A = Str.Trim<"  hello  ">; // "hello"
```

<a id="str-count"></a>

- Count the number of characters in a string

```tsx
import type { Str } from "@dulysse1/ts-helper";

type A = Str.Count<"hello">; // 5
```

<a id="str-includes"></a>

- Check whether a string contains a given substring

```tsx
import type { Str } from "@dulysse1/ts-helper";

type A = Str.Includes<"hello world", "world">; // true
```

<a id="str-infer"></a>

- Infer a string shape from a pattern or constraint

```tsx
import type { Str } from "@dulysse1/ts-helper";

type A = Str.Infer<"hello", { minChar: 3; maxChar: 10 }>; // "hello"
```

<a id="str-alphanumeric"></a>

- Access the built-in alphanumeric character sets

```tsx
import type { Str } from "@dulysse1/ts-helper";

type A = Str.Alphanumeric["a_z"]; // ["a", "b", "c", ..., "z"]
type B = Str.Alphanumeric["0_9"]; // ["0", "1", "2", ..., "9"]
```

<a id="str-special"></a>

- Use the special-character union from the library

```tsx
import type { Str } from "@dulysse1/ts-helper";

type A = Str.Special; // "!" | "@" | "#" | ...
type B = Extract<Str.Special, "-">; // "-"
```

<a id="str-replacemap"></a>

- Replace characters using a map of replacements

```tsx
import type { Str } from "@dulysse1/ts-helper";

type A = Str.ReplaceMap<"a-b-c", { a: "x"; b: "y" }>; // "x-y-c"
```

<a id="str-unaccent"></a>

- Remove accents from a string

```tsx
import type { Str } from "@dulysse1/ts-helper";

type A = Str.UnAccent<"café">; // "cafe"
```

<a id="str-tocamelcase"></a>

- Convert a string to camelCase

```tsx
import type { Str } from "@dulysse1/ts-helper";

type A = Str.ToCamelCase<"hello world">; // "helloWorld"
```

<a id="str-topascalcase"></a>

- Convert a string to PascalCase

```tsx
import type { Str } from "@dulysse1/ts-helper";

type A = Str.ToPascalCase<"hello world">; // "HelloWorld"
```

<a id="str-tokebabcase"></a>

- Convert a string to kebab-case

```tsx
import type { Str } from "@dulysse1/ts-helper";

type A = Str.ToKebabCase<"helloWorld">; // "hello-world"
```

<a id="str-tosnakecase"></a>

- Convert a string to snake_case

```tsx
import type { Str } from "@dulysse1/ts-helper";

type A = Str.ToSnakeCase<"helloWorld">; // "hello_world"
```

<a id="str-asciimap"></a>

- Read the ASCII mapping object for a character

```tsx
import type { Str } from "@dulysse1/ts-helper";

type A = Str.AsciiMap["A"]; // 65
type B = Str.AsciiMap["B"]; // 66
```

<a id="str-asciicode"></a>

- Get the ASCII code of a character

```tsx
import type { Str } from "@dulysse1/ts-helper";

type A = Str.AsciiCode<"A">; // 65
```

<a id="str-asciirange"></a>

- Build an ASCII range between two numeric codes

```tsx
import type { Str } from "@dulysse1/ts-helper";

type A = Str.AsciiRange<65, 67>; // ["A", "B", "C"]
```

<a id="str-isuppercase"></a>

- Check whether a string is uppercase

```tsx
import type { Str } from "@dulysse1/ts-helper";

type A = Str.IsUpperCase<"HELLO">; // true
```

<a id="str-islowercase"></a>

- Check whether a string is lowercase

```tsx
import type { Str } from "@dulysse1/ts-helper";

type A = Str.IsLowerCase<"hello">; // true
```

<a id="str-isdigit"></a>

- Check whether a string is made of digits

```tsx
import type { Str } from "@dulysse1/ts-helper";

type A = Str.IsDigit<"123">; // true
```

<a id="str-filter"></a>

- Filter a string using allowed or excluded character sets

```tsx
import type { Str } from "@dulysse1/ts-helper";

type A = Str.Filter<"a1b2", { allowedChars: ["a", "b"] }>; // "ab"
type B = Str.Filter<"a1b2", { excludedChars: ["0", "1", "2"] }>; // "ab"
```

<a id="array"></a>

### 👉 `Array`

All Array-related utilities grouped with practical examples. Import Arr (and Num when useful) once and reuse in the examples below.

```tsx
import type { Arr, Num } from "@dulysse1/ts-helper";

// Map examples
type M1 = Arr.Map<[1, 2, 3], `2 * ${number}`, "eval">; // [2, 4, 6]
type M2 = Arr.Map<[1, 2, 3], string>; // ["1", "2", "3"]
type M3 = Arr.Map<[1, 2, 3], "a">; // ["a", "a", "a"]

// Filter examples
type F1 = Arr.Filter<[1, 2, 3, "4"], string>; // ["4"]
type F2 = Arr.Filter<[2, 3, 4, "5"], Num.Range<1, 3>[number]>; // [2, 3]

// Fill / FillRange / Length
type Filled = Arr.Fill<3, number>; // [number, number, number]
type FilledConst = Arr.Fill<3, 0>; // [0, 0, 0]
type Range13 = Arr.FillRange<1, 3>; // [1, 2, 3]
type L = Arr.Length<[1, 2, 3]>; // 3

// At / First / Last / IndexOf
type At1 = Arr.At<[10, 20, 30], 1>; // 20
type First1 = Arr.First<[10, 20, 30]>; // 10
type Last1 = Arr.Last<[10, 20, 30]>; // 30
type Idx = Arr.IndexOf<[1, 2, 3], 2>; // 1

// Concat / Flat / Zip / Unique
type Concat = Arr.Concat<[1], [2]>; // [1, 2]
type Flat = Arr.Flat<[[1], [2]]>; // [1, 2]
type Z = Arr.Zip<[1, 2], ["a", "b"]>; // [[1, 'a'], [2, 'b']]
type U = Arr.Unique<[1, 1, 2]>; // [1, 2]

// Some / Includes / ToUnion / Map to strings
type SomeTrue = Arr.Some<[true, false]>; // true
type Inc = Arr.Includes<[1, 2], 2>; // true
type ToU = Arr.ToUnion<[1, 2, 3]>; // 1 | 2 | 3
type MapStr = Arr.Map<[1, 2, 3], string>; // ['1','2','3']

// Tuple / Readable / IsReadonly / Reverse
type IsT = Arr.IsTuple<[1, 2]>; // true
type Read = Arr.Readable<[1, 2]>; // readonly [1, 2]
type IsRO = Arr.IsReadonly<readonly [1, 2]>; // true
type Rev = Arr.Reverse<[1, 2, 3]>; // [3, 2, 1]
```

Notes:

- Use Num utilities (Range, etc.) when you need numeric helpers inside array transforms (shown above).
- These examples are type-level and intended to be used with `import type` in your TypeScript code.

<a id="arr-istuple"></a>

- Check whether a type is a tuple

```tsx
import type { Arr } from "@dulysse1/ts-helper";

type A = Arr.IsTuple<[1, 2, 3]>; // true
type B = Arr.IsTuple<number[]>; // false
```

<a id="arr-reverse"></a>

- Reverse the order of a tuple

```tsx
import type { Arr } from "@dulysse1/ts-helper";

type A = Arr.Reverse<[1, 2, 3]>; // [3, 2, 1]
```

<a id="arr-readable"></a>

- Mark an array as readonly

```tsx
import type { Arr } from "@dulysse1/ts-helper";

type A = Arr.Readable<[1, 2, 3]>; // readonly [1, 2, 3]
```

<a id="arr-length"></a>

- Read the length of a tuple

```tsx
import type { Arr } from "@dulysse1/ts-helper";

type A = Arr.Length<["a", "b", "c"]>; // 3
```

<a id="arr-at"></a>

- Access an item by index

```tsx
import type { Arr } from "@dulysse1/ts-helper";

type A = Arr.At<[10, 20, 30], 1>; // 20
```

<a id="arr-tounion"></a>

- Convert a tuple into a union

```tsx
import type { Arr } from "@dulysse1/ts-helper";

type A = Arr.ToUnion<[1, 2, 3]>; // 1 | 2 | 3
```

<a id="arr-isreadonly"></a>

- Check if an array is readonly

```tsx
import type { Arr } from "@dulysse1/ts-helper";

type A = Arr.IsReadonly<readonly [1, 2]>; // true
```

<a id="arr-includes"></a>

- Check if a tuple includes a value

```tsx
import type { Arr } from "@dulysse1/ts-helper";

type A = Arr.Includes<[1, 2, 3], 2>; // true
```

<a id="arr-join"></a>

- Join tuple items into a string

```tsx
import type { Arr } from "@dulysse1/ts-helper";

type A = Arr.Join<["a", "b", "c"], ", ">; // "a, b, c"
```

<a id="arr-first"></a>

- Get the first item of a tuple

```tsx
import type { Arr } from "@dulysse1/ts-helper";

type A = Arr.First<[10, 20, 30]>; // 10
```

<a id="arr-last"></a>

- Get the last item of a tuple

```tsx
import type { Arr } from "@dulysse1/ts-helper";

type A = Arr.Last<[10, 20, 30]>; // 30
```

<a id="arr-count"></a>

- Count the number of items in a tuple

```tsx
import type { Arr } from "@dulysse1/ts-helper";

type A = Arr.Count<[1, 2, 3]>; // 3
```

<a id="arr-concat"></a>

- Concatenate two tuples

```tsx
import type { Arr } from "@dulysse1/ts-helper";

type A = Arr.Concat<[1, 2], [3, 4]>; // [1, 2, 3, 4]
```

<a id="arr-flat"></a>

- Flatten a nested tuple array

```tsx
import type { Arr } from "@dulysse1/ts-helper";

type A = Arr.Flat<[[1], [2, 3]]>; // [1, 2, 3]
```

<a id="arr-fill"></a>

- Fill a tuple with a value

```tsx
import type { Arr } from "@dulysse1/ts-helper";

type A = Arr.Fill<3, number>; // [number, number, number]
```

<a id="arr-fillrange"></a>

- Fill a range of values

```tsx
import type { Arr } from "@dulysse1/ts-helper";

type A = Arr.FillRange<1, 3>; // [1, 2, 3]
```

<a id="arr-filter"></a>

- Filter values of a tuple by a predicate

```tsx
import type { Arr, Num } from "@dulysse1/ts-helper";

type A = Arr.Filter<[1, 2, 3, "4"], string>; // ["4"]
type B = Arr.Filter<[2, 3, 4, "5"], Num.Range<1, 3>[number]>; // [2, 3]
```

<a id="arr-zip"></a>

- Zip two tuples into pairs

```tsx
import type { Arr } from "@dulysse1/ts-helper";

type A = Arr.Zip<[1, 2], ["a", "b"]>; // [[1, "a"], [2, "b"]]
```

<a id="arr-unique"></a>

- Remove duplicate values from a tuple

```tsx
import type { Arr } from "@dulysse1/ts-helper";

type A = Arr.Unique<[1, 1, 2, 2, 3]>; // [1, 2, 3]
```

<a id="arr-map"></a>

- Map each value of a tuple to another type

```tsx
import type { Arr } from "@dulysse1/ts-helper";

type A = Arr.Map<[1, 2, 3], string>; // ["1", "2", "3"]
```

<a id="arr-infer"></a>

- Infer a tuple based on a complex pattern

```tsx
import type { Arr } from "@dulysse1/ts-helper";

type A = Arr.Infer<[1, 2, 3], number>; // [number, number, number]
```

<a id="arr-some"></a>

- Check whether at least one item matches a condition

```tsx
import type { Arr } from "@dulysse1/ts-helper";

type A = Arr.Some<[false, true, false]>; // true
```

<a id="arr-indexof"></a>

- Find the index of a value inside a tuple

```tsx
import type { Arr } from "@dulysse1/ts-helper";

type A = Arr.IndexOf<[1, 2, 3], 2>; // 1
```

<a id="any"></a>

### 👉 `Any`

- Use a strict any type : The only valid way to use `any` as type. it's provide you to override the default eslint `@typescript-eslint/no-explicit-any` rule. But be careful ! Don't use this type in your code for bad reasons.

```tsx
declare type IAnyFunction = (...args: Any.Implicit[]) => Any.Implicit; // "right way !"

const name: Any.Implicit = {}; // "wrong way !"
```

<a id="any-isany"></a>

- Check whether a type is exactly `any`

```tsx
import type { Any } from "@dulysse1/ts-helper";

type A = Any.IsAny<any>; // true
type B = Any.IsAny<string>; // false
```

<a id="any-isliteral"></a>

- Check whether a type is a literal value rather than a broader primitive

```tsx
import type { Any } from "@dulysse1/ts-helper";

type A = Any.IsLiteral<"hello">; // true
type B = Any.IsLiteral<string>; // false
```

<a id="any-primitiveof"></a>

- Extract the primitive equivalent of a type

```tsx
import type { Any } from "@dulysse1/ts-helper";

type A = Any.PrimitiveOf<string>; // string
```

<a id="any-isprimitive"></a>

- Check whether a type is a primitive value

```tsx
import type { Any } from "@dulysse1/ts-helper";

type A = Any.IsPrimitive<string>; // true
type B = Any.IsPrimitive<{ a: string }>; // false
```

<a id="union"></a>

### 👉 `Union`

- Make a union of object types discriminable and safe with `Union.OneOf`

```tsx
import type { Union } from "@dulysse1/ts-helper";

type UserMessage =
	| { type: "text"; text: string }
	| { type: "image"; src: string };

type SafeMessage = Union.OneOf<
	[{ type: "text"; text: string }, { type: "image"; src: string }]
>;

const ok: SafeMessage = { type: "text", text: "hello" };
// const bad: SafeMessage = { type: "text", text: "hello", src: "x" }; // Error
```

- Check if a value type is included in a union

```tsx
import type { Union } from "@dulysse1/ts-helper";

type A = Union.Has<"a" | "b" | "c", "b">; // true

type B = Union.Has<"a" | "b" | "c", "d">; // false
```

- Access a union member by index and get the last member

```tsx
import type { Union } from "@dulysse1/ts-helper";

type A = Union.Through<1 | 2 | 3, 1>; // 2

type B = Union.Last<1 | 2 | 3>; // 3
```

<a id="union-last"></a>

- Get the last member of a union

```tsx
import type { Union } from "@dulysse1/ts-helper";

type A = Union.Last<"a" | "b" | "c">; // "c"
```

<a id="union-exclude"></a>

- Exclude members from a union

```tsx
import type { Union } from "@dulysse1/ts-helper";

type A = Union.Exclude<"a" | "b" | "c", "b">; // "a" | "c"
```

<a id="union-toarray"></a>

- Convert a union to a tuple-like array

```tsx
import type { Union } from "@dulysse1/ts-helper";

type A = Union.ToArray<"a" | "b">; // ["a", "b"]
```

<a id="union-count"></a>

- Count the members of a union

```tsx
import type { Union } from "@dulysse1/ts-helper";

type A = Union.Count<"a" | "b" | "c">; // 3
```

<a id="union-first"></a>

- Get the first member of a union

```tsx
import type { Union } from "@dulysse1/ts-helper";

type A = Union.First<"a" | "b" | "c">; // "a"
```

<a id="union-isunion"></a>

- Check whether a type is a union

```tsx
import type { Union } from "@dulysse1/ts-helper";

type A = Union.IsUnion<"a" | "b">; // true
type B = Union.IsUnion<string>; // false
```

<a id="union-through"></a>

- Read a union member at a given offset

```tsx
import type { Union } from "@dulysse1/ts-helper";

type A = Union.Through<1 | 2 | 3, 1>; // 2
```

<a id="union-has"></a>

- Check whether a union contains a value

```tsx
import type { Union } from "@dulysse1/ts-helper";

type A = Union.Has<"a" | "b" | "c", "b">; // true
```

<a id="union-oneof"></a>

- Enforce a discriminated union of object literals

```tsx
import type { Union } from "@dulysse1/ts-helper";

type A = Union.OneOf<
	[{ type: "text"; text: string }, { type: "image"; src: string }]
>;
```

<a id="operator"></a>

### 👉 `Operator`

- Compose boolean logic in type-space with `Op.If`, `Op.And`, `Op.Or`, and `Op.IsEqual`

```tsx
import type { Op } from "@dulysse1/ts-helper";

type A = Op.If<true, "yes", "no">; // "yes"
type B = Op.And<true, false>; // false
type C = Op.Or<true, false>; // true
type D = Op.IsEqual<"a", "a">; // true
```

- Use chained conditions to build type-safe guards

```tsx
import type { Op } from "@dulysse1/ts-helper";

type Result<T extends boolean> = Op.If<T, "allowed", "blocked">;

type Ok = Result<Op.AndAll<[true, true, true]>>; // "allowed"
```

<a id="op-equal"></a>

- Check whether two values are structurally equal

```tsx
import type { Op } from "@dulysse1/ts-helper";

type A = Op.Equal<1, 1>; // true
```

<a id="op-and"></a>

- Combine two boolean types with logical AND

```tsx
import type { Op } from "@dulysse1/ts-helper";

type A = Op.And<true, false>; // false
```

<a id="op-or"></a>

- Combine two boolean types with logical OR

```tsx
import type { Op } from "@dulysse1/ts-helper";

type A = Op.Or<true, false>; // true
```

<a id="op-satisfy"></a>

- Satisfy a type constraint with a conditional type

```tsx
import type { Op } from "@dulysse1/ts-helper";

type A = Op.Satisfy<1, number>; // 1
```

<a id="op-not"></a>

- Negate a boolean type

```tsx
import type { Op } from "@dulysse1/ts-helper";

type A = Op.Not<true>; // false
```

<a id="op-xor"></a>

- Exclusive-or between boolean types

```tsx
import type { Op } from "@dulysse1/ts-helper";

type A = Op.Xor<true, false>; // true
```

<a id="op-andall"></a>

- Check whether all values in a tuple are true

```tsx
import type { Op } from "@dulysse1/ts-helper";

type A = Op.AndAll<[true, true, true]>; // true
```

<a id="op-orall"></a>

- Check whether at least one value in a tuple is true

```tsx
import type { Op } from "@dulysse1/ts-helper";

type A = Op.OrAll<[false, false, true]>; // true
```

<a id="op-if"></a>

- Conditionnally select a type based on a boolean

```tsx
import type { Op } from "@dulysse1/ts-helper";

type A = Op.If<true, "yes", "no">; // "yes"
```

<a id="op-fallback"></a>

- Return a fallback when a type is unknown or invalid

```tsx
import type { Op } from "@dulysse1/ts-helper";

type A = Op.Fallback<undefined, string>; // string
```

<a id="op-isequal"></a>

- Check exact equality between two types

```tsx
import type { Op } from "@dulysse1/ts-helper";

type A = Op.IsEqual<"a", "a">; // true
```

<a id="op-isassignable"></a>

- Check whether one type is assignable to another

```tsx
import type { Op } from "@dulysse1/ts-helper";

type A = Op.IsAssignable<string, any>; // true
```

<a id="brand"></a>

### 👉 `Brand`

- Create nominal types with `Brd.Branded` to avoid accidental mixing of primitive values

```tsx
import type { Brd } from "@dulysse1/ts-helper";

type UserId = Brd.Branded<string, "userId">;
type Email = Brd.Branded<string, "email">;

type IsUserId = Brd.IsBranded<UserId, "userId">; // true
type NotEmail = Brd.IsBranded<string, "userId">; // false
```

<a id="brd-symbol"></a>

- Use the hidden brand symbol as the nominal marker

```tsx
import type { Brd } from "@dulysse1/ts-helper";

type A = Brd.Symbol; // unique symbol
```

<a id="brd-isbranded"></a>

- Check whether a type is branded with a given tag

```tsx
import type { Brd } from "@dulysse1/ts-helper";

type A = Brd.IsBranded<Brd.Branded<string, "userId">, "userId">; // true
```

<a id="brd-branded"></a>

- Apply a brand tag to a primitive type

```tsx
import type { Brd } from "@dulysse1/ts-helper";

type UserId = Brd.Branded<string, "userId">;
```

<a id="class"></a>

<a id="class-constructor"></a>

### 👉 `Class`

- Model constructor signatures with `Class.Constructor`

```tsx
import type { Class } from "@dulysse1/ts-helper";

type UserCtor = Class.Constructor<
	[string, number],
	{ name: string; age: number }
>;
type UserInstance = InstanceType<UserCtor>; // { name: string; age: number }
```

<a id="lab"></a>

<a id="lab-tictactoe"></a>

<a id="lab-connect4"></a>

### `Lab`

- Explore experimental type-level games and logic examples

```tsx
import type { Lab } from "@dulysse1/ts-helper";

type Game = Lab.TicTacToe<[[0, 0, 0], [0, 0, 0], [0, 0, 0]]>;

type AnotherGame = Lab.Connect4<
	[
		[0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0],
	]
>;
```

### And many more besides! 😲

- New feature since version `1.2.3`! There is now a `lab` with experimental types to show the power of `@dulysse1/ts-helper`!

![https://raw.githubusercontent.com/Dulysse/ts-helper/refs/heads/main/assets/tictactoe.png](https://raw.githubusercontent.com/Dulysse/ts-helper/refs/heads/main/assets/tictactoe.png)

![https://raw.githubusercontent.com/Dulysse/ts-helper/refs/heads/main/assets/connect4.png](https://raw.githubusercontent.com/Dulysse/ts-helper/refs/heads/main/assets/connect4.png)

## Do you have any ideas or recommendations for improvement? 🤔

## Contact me! 😃

Author: [Ulysse Dupont](https://www.linkedin.com/in/ulysse-dupont-994848197)

Contact: ulyssedupont2707@gmail.com
