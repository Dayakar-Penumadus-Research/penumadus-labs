export const select = selector => document.querySelector(selector)

export const applyStylesToChildren = (node, ...styles) => {
  for (const { classList } of node.children) classList.add(...styles)
}
