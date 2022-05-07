export class NegociacoesView {
    constructor(pSeletor) {
        this.aElement = document.querySelector(pSeletor);
    }
    template() {
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
    update() {
        this.aElement.innerHTML = this.template();
    }
}
