import pick from 'lodash/pick'

const domRectProps = ['left', 'top', 'right', 'bottom', 'x', 'y', 'width', 'height']

/**
 * @param {HTMLElement} node
 */
export default (node: HTMLElement) => pick(node.getBoundingClientRect(), domRectProps)
