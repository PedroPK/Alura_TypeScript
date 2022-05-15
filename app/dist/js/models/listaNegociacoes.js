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
    log() {
        console.log(this.toString());
    }
    toString() {
        return JSON.stringify(this.aNegociacoes, null, 4);
    }
}
