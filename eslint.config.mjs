import globals from "globals";
import pluginJs from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettierPlugin from "eslint-plugin-prettier";

export default [
	{
		ignores: ["dist/**/*", "tests/**/*"],
		files: ["**/*.{js,mjs,cjs,ts}"],
		languageOptions: {
			parser: tsParser,
			globals: {
				...globals.node,
				NodeJS: "readonly",
			},
		},
		plugins: {
			"@typescript-eslint": tsPlugin,
			prettier: prettierPlugin,
		},
		settings: {
			"import/resolver": {
				typescript: {
					alwaysTryTypes: true,
				},
			},
		},
		rules: {
			...pluginJs.configs.recommended.rules,
			...tsPlugin.configs.recommended.rules,
			"@typescript-eslint/no-empty-interface": [
				"error",
				{ allowSingleExtends: true },
			],
			"@typescript-eslint/no-empty-object-type": "off",
			"@typescript-eslint/no-explicit-any": [
				"error",
				{ fixToUnknown: false, ignoreRestArgs: true },
			],
			"@typescript-eslint/explicit-module-boundary-types": "off",
			"no-debugger": "error",
			"prettier/prettier": "error",
			"no-throw-literal": "error",
			"@typescript-eslint/ban-types": "off",
			"@typescript-eslint/no-unused-vars": [
				"error",
				{
					argsIgnorePattern: "^_",
					varsIgnorePattern: "^_",
					caughtErrorsIgnorePattern: "^_",
				},
			],
			"@typescript-eslint/no-namespace": "off",
			"no-restricted-syntax": [
				"warn",
				{
					selector:
						"CallExpression[callee.object.name='console'][callee.property.name=/^(log|warn|error|info|trace|dir)$/]",
					message:
						'"console" function is not recommanded, you should import and use "logger" service instead to get colored logs.',
				},
			],
			"no-redeclare": "off",
			"@typescript-eslint/no-unsafe-declaration-merging": "off",
		},
	},
	{
		files: ["src/**/*.ts"],
		rules: {
			"no-restricted-syntax": [
				"error",
				{
					selector:
						"CallExpression[callee.object.name='console'][callee.property.name=/^(log|warn|error|info|trace|dir)$/]",
					message:
						'"console" function is not allow in the souce code! Use throw Error instead or carefully "console.debug" function.',
				},
			],
		},
	},
];
