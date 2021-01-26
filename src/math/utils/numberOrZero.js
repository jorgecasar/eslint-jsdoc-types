/** @module math/utils */
/**
 * Check if argument is a number otherwise return zero
 *
 * @function
 * @param {*} value Value to check
 * @returns {number} given number or zero
 */
export function numberOrZero(value) {
	return Number.isNaN(value) ? 0 : value;
}
