/** @module math */
import { numberOrZero } from './utils/index.js';

/**
 * Sum all numbers given by argument
 *
 * @function
 * @param {...number} numbers values to sum
 * @returns {number} sum result
 */
export function sum(...numbers) {
	return numbers.reduce((a, b) => numberOrZero(a) + numberOrZero(b), 0);
}
