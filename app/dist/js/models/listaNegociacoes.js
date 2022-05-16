export class ListaNegociacoes {
    constructor() {
        this.aNegociacoes = [];
    }
    adiciona(negociacao) {
        this.aNegociacoes.push(negociacao);
    }
    lista() {
        return this.aNegociacoes;
    }
    equals(pObject) {
        let result = false;
        const thisString = this.toString();
        const pObjectString = pObject.toString();
        if (thisString === pObjectString) {
            result = true;
        }
        return result;
    }
    log() {
        console.log(this.toString());
    }
    toString() {
        return JSON.stringify(this.aNegociacoes, null, 4);
    }
}
//# sourceMappingURL=listaNegociacoes.js.map