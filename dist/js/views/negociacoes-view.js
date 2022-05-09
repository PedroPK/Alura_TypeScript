import { View } from "./view.js";
export class NegociacoesView extends View {
    template(pListaNegociacoes) {
        const result = `
			<table class="table table-hover table-bordered">
				<thead>
					<tr>
						<th>DATA</th>
						<th>QUANTIDADE</th>
						<th>VALOR</th>
					</tr>
				</thead>
				<tbody>
					${pListaNegociacoes.lista().map(negociacao => {
            return `
									<tr>	
										<td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
										<td>${negociacao.quantidade}</td>
										<td>${negociacao.valor}</td>
									</tr>
								`;
        }).join("") // To convert the Array in a single entry, and without any separator caracter
        }
				</tbody>
			</table>
		`;
        return result;
    }
}
