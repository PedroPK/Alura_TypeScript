import { ListaNegociacoes } from "../models/listaNegociacoes.js";
import { View }			 	from "./view.js";

export class NegociacoesView extends View<ListaNegociacoes> {

	protected template(pListaNegociacoes: ListaNegociacoes): string {
		const result = `
			<table class="table table-hover table-bordered">
				${this.getTableHead()}
				<tbody>
					${
						pListaNegociacoes.lista().map(
							negociacao => {	 // Intl is going to format the Date by the Locale configured
								return `
									<tr>	
										<td>${this.formatDate(negociacao.data)}</td>
										<td>${negociacao.quantidade}</td>
										<td>${negociacao.valor}</td>
									</tr>
								`
							}
						).join("")	  // To convert the Array in a single entry, and without any separator caracter
					}
				</tbody>
			</table>
		`;

		return result;
	}

	private getTableHead(): string {
		const thead = `
			<thead>
				<tr>
					<th>DATA</th>
					<th>QUANTIDADE</th>
					<th>VALOR</th>
				</tr>
			</thead>
			`;
		
			return thead;
	}

	private formatDate(pDate: Date): string {
		const formater = new Intl.DateTimeFormat();
		const result = formater.format(pDate);

		return result;
	}

}