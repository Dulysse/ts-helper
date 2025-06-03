![https://raw.githubusercontent.com/Dulysse/ts-helper/refs/heads/main/assets/logo.svg](https://raw.githubusercontent.com/Dulysse/ts-helper/refs/heads/main/assets/logo.svg)

# 🛠 ts-helper 🛠

- <i>Typescript library for type helpers ✨</i>

## Getting Started 🆙

### Prerequisites

Install `Typescript` on your project

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

## How to use ? 🤔

### With EcmaScript module ✅

```tsx
import type { Num, Arr, Str } from "@dulysse1/ts-helper";
// now you can create your types!
```

## Documentation 🧗

### Here some examples:

### 👉 `Numbers`

- ⚠️ Returns an absolute result for numbers that don't reach compiler limits, otherwise it returns an `explicit result`. ⚠️

- New feature since version `1.2.6`! The multiply function allow one `float` type 🤯🤯🤯

![https://raw.githubusercontent.com/Dulysse/ts-helper/refs/heads/main/assets/multiply.png](https://raw.githubusercontent.com/Dulysse/ts-helper/refs/heads/main/assets/multiply.png)

- New feature since version `1.2.2`! Add and Substract functions allow `float` type 🤯🤯

![https://raw.githubusercontent.com/Dulysse/ts-helper/refs/heads/main/assets/float.png](https://raw.githubusercontent.com/Dulysse/ts-helper/refs/heads/main/assets/float.png)

- New feature since version `1.1.1`! Eval function return type for calculation 🤯

![https://raw.githubusercontent.com/Dulysse/ts-helper/refs/heads/main/assets/eval.png](https://raw.githubusercontent.com/Dulysse/ts-helper/refs/heads/main/assets/eval.png)

- Check if a number is `positive`

```tsx
import type { Num } from "@dulysse1/ts-helper";

type A = Num.IsPositive<-2343>; // false
type B = Num.IsPositive<134>; // true
type C = Num.IsPositive<0>; // true
```

- Add two numbers

```tsx
import type { Num } from "@dulysse1/ts-helper";

type A = Num.Add<10, 10>; // 20
type B = Num.Add<-10, 10>; // 0
type C = Num.Add<-23, -34>; // -57
type C = Num.Add<87.67, 10.34>; // 98.01  NEW!
```

- Substract two numbers

```tsx
import type { Num } from "@dulysse1/ts-helper";

type A = Num.Subtract<10, 10>; // 0
type B = Num.Subtract<10, -40>; // 50
type C = Num.Subtract<12.4, 3.2>; // 9.2  NEW!
```

- Multiply two numbers

```tsx
import type { Num } from "@dulysse1/ts-helper";

type A = Num.Multiply<10, 10>; // 100
type B = Num.Multiply<-6, 7>; // -42
type C = Num.Multiply<234, 783>; // number
```

- Divide two numbers

```tsx
import type { Num } from "@dulysse1/ts-helper";

type A = Num.Divide<20, 10>; // 2
type B = Num.Divide<0, 7>; // 0
type C = Num.Divide<7, 0>; // number
```

- Get the `factorial` of one number

```tsx
import type { Num } from "@dulysse1/ts-helper";

type A = Num.Factorial<0>; // 1
type B = Num.Factorial<-3>; // -6
type C = Num.Factorial<5>; // 120
```

- Check if a number is `even`

```tsx
import type { Num } from "@dulysse1/ts-helper";

type A = Num.IsEven<0>; // true
type B = Num.IsEven<-3>; // false
type C = Num.IsEven<5.5>; // false
```

- Check if a number is `odd`

```tsx
import type { Num } from "@dulysse1/ts-helper";

type A = Num.IsOdd<0>; // false
type B = Num.IsOdd<-3>; // true
type C = Num.IsOdd<5.5>; // true
```

- Check if a number is `float`

```tsx
import type { Num } from "@dulysse1/ts-helper";

type A = Num.IsFloat<0>; // false
type B = Num.IsFloat<-3>; // false
type C = Num.IsFloat<5.5>; // true
```

- Parse a string to `float` number

```tsx
import type { Num } from "@dulysse1/ts-helper";

type A = Num.ParseFloat<"0">; // 0
type B = Num.ParseFloat<"-3">; // -3
type C = Num.ParseFloat<"5.5">; // 5.5
```

- Parse a string to `integer` number

```tsx
import type { Num } from "@dulysse1/ts-helper";

type A = Num.ParseInt<"0">; // 0
type B = Num.ParseInt<"-3">; // -3
type C = Num.ParseInt<"5.5">; // 5
```

### 👉 `Object`

- Get keys of object by an optional filter

```tsx
import type { Obj } from "@dulysse1/ts-helper";

type A = Obj.KeyOf<{ a: string; b: number }, string>; // "a"
```

- Merge two type objects

```tsx
import type { Obj } from "@dulysse1/ts-helper";

type A = type A = Obj.Merge<
 { a: string; },
 { b: number; }
>; // { a: string; b: number; }
```

### 👉 `String`

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

### 👉 `Array`

- Check if array is a `tuple`

```tsx
import type { Arr } from "@dulysse1/ts-helper";

type A = Arr.IsTuple<number[]>; // false
type B = Arr.IsTuple<[1, 2, 3]>; // true
```

- Reverse an array

```tsx
import type { Arr } from "@dulysse1/ts-helper";

type A = Arr.Reverse<[1, 2, 3]>; // [3, 2, 1]
```

### 👉 `Any`

- Use a strict any type : The only valid way to use `any` as type. it's provide you to override the default eslint `@typescript-eslint/no-explicit-any` rule. But be careful ! Don't use this type in your code for bad reasons.

```tsx
declare type IAnyFunction = (...args: Any.Strict[]) => Any.Strict; // "right way !"

const name: Any.Strict = {}; // "wrong way !"
```

### And many more besides! 😲

- New feature since version `1.2.3`! There is now a `lab` with experimental types to show the power of `@dulysse1/ts-helper`!

![https://raw.githubusercontent.com/Dulysse/ts-helper/refs/heads/main/assets/tictactoe.png](https://raw.githubusercontent.com/Dulysse/ts-helper/refs/heads/main/assets/tictactoe.png)

![https://raw.githubusercontent.com/Dulysse/ts-helper/refs/heads/main/assets/connect4.png](https://raw.githubusercontent.com/Dulysse/ts-helper/refs/heads/main/assets/connect4.png)

## Do you have any ideas or recommendations for improvement? 🤔

## Contact me! 😃

Author: [Ulysse Dupont](https://www.linkedin.com/in/ulysse-dupont-994848197)

Contact: ulyssedupont2707@gmail.com
