import { DayNegotiation }	from "../interfaces/day-negotiation.js";
import { Negociacao } 		from "../models/negociacao.js";

export class NegotiationService {

	public obterNegociacoes(): Promise<Negociacao[]> {
		console.log("obterNegociacoes() invoked at NegotiationService")

		return fetch("http://localhost:8080/dados")
			// Convert the Data fetched to a JSON Object
			.then(response => response.json())

			// Convert the JSON into an Array
			.then((data:	DayNegotiation[])	=> {

					// Convert each Array's Element into a Negotiation
					return data.map(
						todayData => {
							return new Negociacao(
								new Date(), 
								todayData.vezes, 
								todayData.montante)
					})
				}
			)
	}

}