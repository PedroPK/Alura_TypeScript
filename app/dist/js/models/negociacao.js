export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    static createNegociacao(pDate, pQuantidade, pValor) {
        const date = this.converterData(pDate);
        const quantidade = parseInt(pQuantidade);
        const valor = parseFloat(pValor);
        const negociacao = new Negociacao(date, quantidade, valor);
        return negociacao;
    }
    static converterData(pDataString) {
        const date = new Date(pDataString.replace("-", ","));
        return date;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
}
