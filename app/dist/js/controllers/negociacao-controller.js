var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { domInjector } from "../decorators/dom-injector.js";
import { inspect } from "../decorators/inspector.js";
import { logExecutionTime } from "../decorators/log-execution-time.js";
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
        const printTypeOfInputs = true;
        if (printTypeOfInputs) {
            console.log(`${typeof document.querySelector("#data")}`);
            console.log(`${typeof document.querySelector("#quantidade")}`);
            console.log(`${typeof document.querySelector("#valor")}`);
        }
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
    import() {
        fetch("http://localhost:8080/dados")
            .then(response => response.json())
            .then((data) => {
            return data.map(todayData => {
                return new Negociacao(new Date(), todayData.vezes, todayData.montante);
            });
        })
            .then(todayNegotiations => {
            for (let negotiation of todayNegotiations) {
                this.aListaNegociacoes.adiciona(negotiation);
            }
            this.aNegociacoesView.update(this.aListaNegociacoes);
        });
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
__decorate([
    domInjector("#data")
], NegociacaoController.prototype, "aInputData", void 0);
__decorate([
    domInjector("#quantidade")
], NegociacaoController.prototype, "aInputQuantidade", void 0);
__decorate([
    domInjector("#valor")
], NegociacaoController.prototype, "aInputValor", void 0);
__decorate([
    logExecutionTime(true),
    inspect
], NegociacaoController.prototype, "adiciona", null);
