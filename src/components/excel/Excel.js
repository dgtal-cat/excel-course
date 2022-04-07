import {$node} from "@core/Dom"

export class Excel {
    constructor(selector, options) {
        this.element = document.querySelector(selector)
        this.components = options.components || []
    }
    getRoot() {
        const root = $node.create("div", "excel")

        this.components.forEach(Component => {
            const element = $node.create("div", Component.className)
            const component = new Component(element)
            root.appendChild($node.addHtml(element, component.toHTML()))
        })

        return root
    }
    render() {
        this.element.append(this.getRoot())
    }
}
