import { Negociacao } from "./negociacao.js";

export class ListaNegociacoes{
    private aNegociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao): void  {
        this.aNegociacoes.push(negociacao);
    }

    lista(): ReadonlyArray<Negociacao> {
                // Spread Operator - Makes a Clone of the original Array
        return this.aNegociacoes;
    }

}