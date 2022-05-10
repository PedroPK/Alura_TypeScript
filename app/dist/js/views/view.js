export class View {
    constructor(pSelector, pEscape) {
        this.aEscape = false;
        const element = document.querySelector(pSelector);
        if (element) {
            this.aElement = document.querySelector(pSelector);
        }
        else {
            throw Error(`O Seletor ${pSelector} não foi encontrado no DOM.`);
        }
        if (pEscape) {
            this.aEscape = pEscape;
        }
    }
    update(pMessage) {
        let template = this.template(pMessage);
        if (this.aEscape) {
            template = this.removeScriptTag(template);
        }
        this.aElement.innerHTML = template;
    }
    removeScriptTag(pTemplate) {
        const result = pTemplate.replace(/<script>[\s\S]*?<\/script>/, '');
        return result;
    }
}
