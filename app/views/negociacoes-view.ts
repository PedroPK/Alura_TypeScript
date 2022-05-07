export class NegociacoesView {

    private aElement:   HTMLElement;

    constructor(pSeletor: string) {
        this.aElement   =   document.querySelector(pSeletor);
    }

    template(): string {
        const result = `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        `;

        return result;
    }

    update(): void {
        this.aElement.innerHTML = this.template();
    }
}