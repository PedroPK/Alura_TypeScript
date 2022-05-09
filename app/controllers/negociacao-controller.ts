import { ListaNegociacoes } from "../models/listaNegociacoes.js";
import { Negociacao } from "../models/negociacao.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {

	private aInputData		  	:   HTMLInputElement;
	private aInputQuantidade	:   HTMLInputElement;
	private aInputValor		 	:   HTMLInputElement;

	private aListaNegociacoes   =   new ListaNegociacoes;

	private aSucessfullAdded	:	boolean;
	
	private aNegociacoesView	=   new NegociacoesView("#negociacoesView");
	private aMessageView		=   new MensagemView("#mensagemView");

	constructor() {
		this.aInputData		 	=   document.querySelector("#data");
		this.aInputQuantidade   =   document.querySelector("#quantidade");
		this.aInputValor		=   document.querySelector("#valor");
		this.aSucessfullAdded	=	false;

		this.updateView();
	}

	public adiciona(): void {
		// Capture fields from View and creates a new Negociation
		const negociacao = 
			this.criarNegociacao();
		
		/*  Workday Rule
		 *	 - Negociations are done only from Mondays to Fridays
		 *	
		 *	The getDay() method from Date returns a Number to represent the Day of Week
		 *	It starts in 0 for Sunday and goes to 6 for Saturday
		 *	So, we should accept only values from 1 to 5, excluding 0 and 6
		 */
		if ( !this.isWorkday(negociacao.data) ) {
			this.aSucessfullAdded	=	false;
			const message = "Negociações são aceitas apenas em dias úteis!";
			this.aMessageView.update(message);

			return;		// Early return
		}

		// Clean up the View's Form from previous data
		this.limparFormulario();

		// Inserts the new Negociation in the List
		this.aListaNegociacoes.adiciona(negociacao);
		this.aSucessfullAdded	=	true;

		// Updates the View with new Negociation added
		this.updateView();
	}

	/**
	 * Evaluates if the Date is from Monday to Friday
	 * 
	 * Workday Rule
	 *	 - Negociations are done only from Mondays to Fridays
	 *	
	 *	The getDay() method from Date returns a Number to represent the Day of Week
	 *	It starts in 0 for Sunday and goes to 6 for Saturday
	 *	So, we should accept only values from 1 to 5, excluding 0 and 6
	 * 
	 * @param	pDate
	 * 
	 * @returns	boolean
	 */
	private isWorkday(pDate: Date): boolean {
		const SUNDAY = 0;
		const SATURDAY = 6;

		const result = 
			pDate.getDay() > SUNDAY &&
			pDate.getDay() < SATURDAY;
		
		return result;
	}

	private criarNegociacao(): Negociacao {
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

	private converterData(pDataString: string): Date {
			/* Expressão Regular para localizar todos os Hífens, 
			usando g para indicar que é global
		*/
			const regex = /-/g;
			const date		  = new Date(	 pDataString.replace(regex, ",")	 );

			return date;
	}

	private limparFormulario(): void {
		this.aInputData.value		   =   "";
		this.aInputQuantidade.value	 =   "";
		this.aInputValor.value		  =   "";

		this.aInputData.focus();
	}

	private updateView(): void {
		// Updates the View with the new Negociation
		this.aNegociacoesView.update(this.aListaNegociacoes);

		if ( this.aSucessfullAdded ) {
			const message = "Negociação adicionada com sucesso!";
			// Shows a success message to the User
			this.aMessageView.update(message);
		}
	}

}