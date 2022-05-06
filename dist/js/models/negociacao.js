export class Negociacao {
    constructor(pData, pQuantidade, pValor) {
        this._data = pData;
        this._quantidade = pQuantidade;
        this._valor = pValor;
    }
    get data() {
        return this._data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
}
