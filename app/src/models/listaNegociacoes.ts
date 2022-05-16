import { ModelObject } from "../interfaces/model-object.js";
import { Negociacao }	from "./negociacao.js";

export class ListaNegociacoes implements ModelObject<ListaNegociacoes> {

	private aNegociacoes: Negociacao[] = [];

	adiciona(negociacao: Negociacao): void  {
		this.aNegociacoes.push(negociacao);
	}

	lista(): readonly Negociacao[] {
				// Spread Operator - Makes a Clone of the original Array
		return this.aNegociacoes;
	}

	equals(pObject: ListaNegociacoes): boolean {
		let result = false;

		const thisString	= this.toString();
		const pObjectString	=	pObject.toString();

		if ( thisString === pObjectString ) {
			result = true;
		}

		return result;
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