import { Logable }		from "../interfaces/Logable.js";
import { Stringible }	from "../interfaces/stringible.js";
import { Negociacao }	from "./negociacao.js";

export class ListaNegociacoes implements Stringible, Logable {
	private aNegociacoes: Negociacao[] = [];

	adiciona(negociacao: Negociacao): void  {
		this.aNegociacoes.push(negociacao);
	}

	lista(): readonly Negociacao[] {
				// Spread Operator - Makes a Clone of the original Array
		return this.aNegociacoes;
	}

	public log(): void {
		console.log(
			this.toString()
		);
	}


	public toString(): any {
		return JSON.stringify(this.aNegociacoes, null, 4);
	}
}