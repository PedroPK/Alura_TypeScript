import { ListaNegociacoes } from "../models/listaNegociacoes.js";

export class NegociacoesView {

    private aElement:   HTMLElement;

    constructor(pSeletor: string) {
        this.aElement   =   document.querySelector(pSeletor);
    }

    template(pListaNegociacoes: ListaNegociacoes): string {
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
                    ${
                        pListaNegociacoes.lista().map(
                            negociacao => {
                                return `
                                    <tr>
                                        <td>?</td>
                                        <td>${negociacao.quantidade}</td>
                                        <td>${negociacao.valor}</td>
                                    </tr>
                                `
                            }
                        ).join("")      // To convert the Array in a single entry, and without any separator caracter
                    }
                </tbody>
            </table>
        `;

        return result;
    }

    update(pListaNegociacoes: ListaNegociacoes): void {
        const template = this.template(pListaNegociacoes);
        console.log(template);
        this.aElement.innerHTML = template;
    }
}