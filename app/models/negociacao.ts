export class Negociacao {
    private _data           :   Date;
    private _quantidade     :   number;
    private _valor          :   number;

    constructor(pData: Date, pQuantidade: number, pValor: number) {
        this._data = pData;
        this._quantidade = pQuantidade;
        this._valor = pValor;
    }

    get data(): Date {
        return this._data;
    }

    get quantidade(): number {
        return this._quantidade;
    }

    get valor(): number {
        return this._valor;
    }

    get volume() : number {
        return this._quantidade * this._valor;
    }
}