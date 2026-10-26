import { defineConfig } from "tsup";

export default defineConfig({
	entry: {
		index: "src/index.ts",
		"any/index": "src/any/index.ts",
		"array/index": "src/array/index.ts",
		"brand/index": "src/brand/index.ts",
		"class/index": "src/class/index.ts",
		"lab/index": "src/lab/index.ts",
		"numeric/index": "src/numeric/index.ts",
		"object/index": "src/object/index.ts",
		"operator/index": "src/operator/index.ts",
		"string/index": "src/string/index.ts",
		"test/index": "src/test/index.ts",
		"union/index": "src/union/index.ts",
	},
	dts: true,
	target: "esnext",
	format: ["esm"],
	splitting: false,
	bundle: true,
	clean: true,
});
