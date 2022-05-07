export class ListaNegociacoes {
    constructor() {
        this.aNegociacoes = [];
    }
    adiciona(negociacao) {
        this.aNegociacoes.push(negociacao);
    }
    lista() {
        // Spread Operator - Makes a Clone of the original Array
        return this.aNegociacoes;
    }
}
