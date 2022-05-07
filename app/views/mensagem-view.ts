export class MensagemView {

    private aElement: HTMLElement;

    constructor(pSelector: string) {
        this.aElement   =   document.querySelector(pSelector);
    }

    template( pMessage: string ): string {
        const result = `
            <p class="alert alert-info">${pMessage}</p>
        `;

        return result;
    }

    update( pMessage: string ): void {
        const template = this.template( pMessage );
        this.aElement.innerHTML = template;
    }

} 