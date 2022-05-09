export class View {
    constructor(pSelector) {
        this.aElement = document.querySelector(pSelector);
    }
    update(pMessage) {
        const template = this.template(pMessage);
        this.aElement.innerHTML = template;
    }
}
