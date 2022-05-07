import { ListaNegociacoes } from "../models/listaNegociacoes.js";
import { Negociacao } from "../models/negociacao.js";
export class NegociacaoController {
    constructor() {
        this.aListaNegociacoes = new ListaNegociacoes;
        this.aInputData = document.querySelector("#data");
        this.aInputQuantidade = document.querySelector("#quantidade");
        this.aInputValor = document.querySelector("#valor");
    }
    adiciona() {
        const negociacao = this.criarNegociacao();
        this.limparFormulario();
        this.aListaNegociacoes.adiciona(negociacao);
        console.log(negociacao);
        console.log(this.aListaNegociacoes.lista());
    }
    criarNegociacao() {
        const date = this.converterData(this.aInputData.value);
        const quantidade = parseInt(this.aInputQuantidade.value);
        const valor = parseFloat(this.aInputValor.value);
        const negociacao = new Negociacao(date, quantidade, valor);
        return negociacao;
    }
    converterData(pDataString) {
        /* Expressão Regular para localizar todos os Hífens,
           usando g para indicar que é global
       */
        const regex = /-/g;
        const date = new Date(pDataString.replace(regex, ","));
        return date;
    }
    limparFormulario() {
        this.aInputData.value = "";
        this.aInputQuantidade.value = "";
        this.aInputValor.value = "";
        this.aInputData.focus();
    }
}
