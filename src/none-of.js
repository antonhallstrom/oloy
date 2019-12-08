import * as R from 'ramda'

/**
 * Helper function for shouldForwardProps in styled components
 * It takes an list of propNames to NOT forward to the dom-element
 *
 * @function
 * @param {Array.*} list List of forbidden values
 * @param {*} value Value to check against list
 * @returns {boolean}
 * @example
 * const Component = styled('div', { shouldForwardProp: noneOf(['width', 'height']) })
 */
export const noneOf = R.complement(R.flip(R.contains))
