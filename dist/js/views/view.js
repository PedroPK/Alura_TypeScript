export class View {
    constructor(pSelector, pEscape) {
        this.aEscape = false;
        this.aElement = document.querySelector(pSelector);
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
