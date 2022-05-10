import { WeekDay } from "../enums/weekDays.js";
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
        this.aSucessfullAdded = false;
        this.updateView();
    }
    adiciona() {
        const negociacao = Negociacao.createNegociacao(this.aInputData.value, this.aInputQuantidade.value, this.aInputValor.value);
        if (!this.isWorkday(negociacao.data)) {
            this.aSucessfullAdded = false;
            const message = "Negociações são aceitas apenas em dias úteis!";
            this.aMessageView.update(message);
            return;
        }
        this.limparFormulario();
        this.aListaNegociacoes.adiciona(negociacao);
        this.aSucessfullAdded = true;
        this.updateView();
    }
    isWorkday(pDate) {
        const result = pDate.getDay() > WeekDay.SUNDAY &&
            pDate.getDay() < WeekDay.SATURDAY;
        return result;
    }
    limparFormulario() {
        this.aInputData.value = "";
        this.aInputQuantidade.value = "";
        this.aInputValor.value = "";
        this.aInputData.focus();
    }
    updateView() {
        this.aNegociacoesView.update(this.aListaNegociacoes);
        if (this.aSucessfullAdded) {
            const message = "Negociação adicionada com sucesso!";
            this.aMessageView.update(message);
        }
    }
}
