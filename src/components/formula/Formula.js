import {ExcelComponent} from "@core/ExcelComponent";

export class Formula extends ExcelComponent {
    static className = "excel__formula"

    formulaTemplate = `
      <div class="formula-info">fx</div>
      <div class="formula-input" contenteditable="true" spellcheck="false"></div>
`

    toHTML() {
        return this.formulaTemplate
    }
}
