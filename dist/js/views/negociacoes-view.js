import { View } from "./view.js";
export class NegociacoesView extends View {
    template(pListaNegociacoes) {
        const result = `
			<table class="table table-hover table-bordered">
				${this.getTableHead()}
				<tbody>
					${pListaNegociacoes.lista().map(negociacao => {
            return `
									<tr>	
										<td>${this.formatDate(negociacao.data)}</td>
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
    getTableHead() {
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
    formatDate(pDate) {
        const formater = new Intl.DateTimeFormat();
        const result = formater.format(pDate);
        return result;
    }
}
