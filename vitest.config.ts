import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	test: {
		fileParallelism: true,
		watch: false,
		bail: 1,
		reporters: ["tree"],
		logHeapUsage: true,
		coverage: {
			include: ["./src/**/*"],
			enabled: true,
			thresholds: {
				functions: 100,
				lines: 100,
				branches: 100,
				statements: 100,
			},
		},
	},
	plugins: [tsconfigPaths()],
});
