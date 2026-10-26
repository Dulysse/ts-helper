import { toCamelCase } from "./modules/toCamelCase";
import { toKebabCase } from "./modules/toKebabCase";
import { toPascalCase } from "./modules/toPascalCase";
import { toSnakeCase } from "./modules/toSnakeCase";

/**
 * #### ✨ List of `ts-helper` string functions ✨:
 * - {@link toCamelCase}
 * - {@link toPascalCase}
 * - {@link toKebabCase}
 * - {@link toSnakeCase}
 * ---------------------------
 * Do you have any ideas or recommendations for improvement?
 * #### Contact me!
 * @author Ulysse Dupont -->
 *  [my email](mailto:ulyssedupont2707@gmail.com)
 *  | [my github](https://github.com/Dulysse)
 *  | [my LinkedIn](https://www.linkedin.com/in/ulysse-dupont)
 */
export const str: {
	readonly toCamelCase: typeof toCamelCase;
	readonly toKebabCase: typeof toKebabCase;
	readonly toPascalCase: typeof toPascalCase;
	readonly toSnakeCase: typeof toSnakeCase;
} = <const>{
	toCamelCase,
	toKebabCase,
	toPascalCase,
	toSnakeCase,
};

export { toCamelCase, toKebabCase, toPascalCase, toSnakeCase };
