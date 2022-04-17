class Dom {
   constructor(selector) {
      this.domNode = typeof selector === "string"
          ? document.querySelector(selector)
          : selector
   }

   html(html) {
      if (typeof html === "string") {
         this.domNode.innerHTML = html
         return this
      }
      return this.domNode.outerHTML.trim()
   }

   clear() {
      this.html("")
      return this
   }

   append(element) {
      this.domNode.appendChild(element.domNode)
      return this
   }
}

export function domMan(selector) {
   return new Dom(selector)
}

domMan.create = (tagName, classes = "") => {
   const el = document.createElement(tagName)
   if (classes) {
      el.classList.add(classes)
   }
   return domMan(el)
}
