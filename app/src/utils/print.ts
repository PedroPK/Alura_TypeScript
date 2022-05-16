import { Logable } from "../interfaces/Logable.js";
import { Stringible } from "../interfaces/stringible.js";
import { ListaNegociacoes } from "../models/listaNegociacoes.js";
import { Negociacao } from "../models/negociacao.js";

export function log(...pNegotiations: Array<Logable>): void {
	for ( let negotiation of pNegotiations ) {
		negotiation.log();
	}
}