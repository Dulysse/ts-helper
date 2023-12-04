![https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-ar21.png](https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-ar21.png)

# 🛠 ts-helper 🛠

#### <i>Typescript library for type helpers ✨</i>

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

### 👉 Numbers

```tsx
import type { Num } from "@dulysse1/ts-helper";

type A = Num.IsPositive<-23>; // false
type B = Num.IsPositive<10>; // true
type C = Num.IsPositive<0>; // true
```

### 👉 Array

#### Check if array is a `tuple`

```tsx
import type { Arr } from "@dulysse1/ts-helper";

type A = Arr.IsTuple<number[]>; // false
type B = Arr.IsTuple<[1, 2, 3]>; // true
```

#### Reverse an array

```tsx
import type { Arr } from "@dulysse1/ts-helper";

type A = Arr.Reverse<[1, 2, 3]>; // [3, 2, 1]
```

## Do you have any ideas or recommendations for improvement? 🤔

## Contact me! 😃

Author: [Ulysse Dupont](https://www.linkedin.com/in/ulysse-dupont-994848197)

Contact: ulyssedupont2707@gmail.com
