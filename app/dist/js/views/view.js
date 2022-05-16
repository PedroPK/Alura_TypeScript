export class View {
    constructor(pSelector) {
        const element = document.querySelector(pSelector);
        if (element) {
            this.aElement = document.querySelector(pSelector);
        }
        else {
            throw Error(`O Seletor ${pSelector} não foi encontrado no DOM.`);
        }
    }
    update(pMessage) {
        let template = this.template(pMessage);
        this.aElement.innerHTML = template;
    }
}
//# sourceMappingURL=view.js.map