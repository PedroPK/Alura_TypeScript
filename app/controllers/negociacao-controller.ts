import { ListaNegociacoes } from "../models/listaNegociacoes.js";
import { Negociacao } from "../models/negociacao.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
		private aInputData		  :   HTMLInputElement;
		private aInputQuantidade	:   HTMLInputElement;
		private aInputValor		 :   HTMLInputElement;

		private aListaNegociacoes   =   new ListaNegociacoes;
		
		private aNegociacoesView	=   new NegociacoesView("#negociacoesView");
		private aMessageView		=   new MensagemView("#mensagemView");

		constructor() {
			this.aInputData		 =   document.querySelector("#data");
			this.aInputQuantidade   =   document.querySelector("#quantidade");
			this.aInputValor		=   document.querySelector("#valor");

			this.aNegociacoesView.update(this.aListaNegociacoes);
		}

		adiciona(): void {
			// Capture fields from View and creates a new Negociation
			const negociacao = 
				this.criarNegociacao();

			// Clean up the View's Form from previous data
			this.limparFormulario();

			// Inserts the new Negociation in the List
			this.aListaNegociacoes.adiciona(negociacao);

			// Updates the View with the new Negociation
			this.aNegociacoesView.update(this.aListaNegociacoes);

			// Shows a success message to the User
			this.aMessageView.update("Negociação adicionada com sucesso!");

			console.log(negociacao);
			console.log(this.aListaNegociacoes.lista());
		}

		criarNegociacao(): Negociacao {
			const date: Date	= this.converterData(   this.aInputData.value	   );
			const quantidade	= parseInt(			 this.aInputQuantidade.value );
			const valor		 = parseFloat(		   this.aInputValor.value	  )

			const negociacao = 
				new Negociacao(
					date,
					quantidade,
					valor
				);
			
			return negociacao;
		}

		converterData(pDataString: string): Date {
			 /* Expressão Regular para localizar todos os Hífens, 
				usando g para indicar que é global
			*/
				const regex = /-/g;
				const date		  = new Date(	 pDataString.replace(regex, ",")	 );

				return date;
		}

		limparFormulario(): void {
			this.aInputData.value		   =   "";
			this.aInputQuantidade.value	 =   "";
			this.aInputValor.value		  =   "";

			this.aInputData.focus();
		}
}