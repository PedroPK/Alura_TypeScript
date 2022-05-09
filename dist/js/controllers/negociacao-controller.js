import { ListaNegociacoes } from "../models/listaNegociacoes.js";
import { Negociacao } from "../models/negociacao.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this.aListaNegociacoes = new ListaNegociacoes;
        this.aNegociacoesView = new NegociacoesView("#negociacoesView");
        this.aMessageView = new MensagemView("#mensagemView");
        this.aInputData = document.querySelector("#data");
        this.aInputQuantidade = document.querySelector("#quantidade");
        this.aInputValor = document.querySelector("#valor");
        this.updateView();
    }
    adiciona() {
        // Capture fields from View and creates a new Negociation
        const negociacao = this.criarNegociacao();
        // Clean up the View's Form from previous data
        this.limparFormulario();
        // Inserts the new Negociation in the List
        this.aListaNegociacoes.adiciona(negociacao);
        // Updates the View with new Negociation added
        this.updateView();
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
    updateView() {
        // Updates the View with the new Negociation
        this.aNegociacoesView.update(this.aListaNegociacoes);
        // Shows a success message to the User
        this.aMessageView.update("Negociação adicionada com sucesso!");
    }
}
