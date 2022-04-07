class Dom {
   constructor(selector) {
      this.element = typeof selector === "string"
         ? document.querySelector(selector)
         : selector
   }
}

export function $node(selector) {
   return new Dom(selector)
}

$node.create = (tagName, classes = "") => {
   const el = document.createElement(tagName)
   if (classes) {
      el.classList.add(classes)
   }
   return el
}

$node.addHtml = (node, html = "") => {
   if (html) {
      node.innerHTML = html
   }
   return node
}
