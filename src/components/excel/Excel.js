import {domMan} from "@core/Dom"

export class Excel {
    constructor(selector, options) {
        this.entryPoint = document.querySelector(selector)
        this.components = options.components || []
    }

    getStructure() {
        const root = domMan.create("div", "excel")

        this.components.forEach(Component => {
            const element = domMan.create("div", Component.className)
            const component = new Component(element)
            element.html(component.toHTML())
            root.append(element)
        })

        return root
    }

    render() {
        this.entryPoint.append(this.getStructure())
    }
}
