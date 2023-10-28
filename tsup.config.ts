import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/index.ts"],
	dts: true,
	target: "esnext",
	format: ["esm"],
	splitting: false,
	minify: true,
	keepNames: true,
	bundle: true,
	clean: true,
});
