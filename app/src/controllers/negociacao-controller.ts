import { domInjector } 			from "../decorators/dom-injector.js";
import { inspect } 				from "../decorators/inspector.js";
import { logExecutionTime } 	from "../decorators/log-execution-time.js";
import { WeekDay }				from "../enums/weekDays.js";
import { ListaNegociacoes }		from "../models/listaNegociacoes.js";
import { Negociacao }			from "../models/negociacao.js";
import { NegotiationService } 	from "../services/negotiations-service.js";
import { MensagemView }			from "../views/mensagem-view.js";
import { NegociacoesView }		from "../views/negociacoes-view.js";

export class NegociacaoController {

	// DOM Elements
	@domInjector("#data")
	private aInputData		  	:   HTMLInputElement;

	@domInjector("#quantidade")
	private aInputQuantidade	:   HTMLInputElement;

	@domInjector("#valor")
	private aInputValor		 	:   HTMLInputElement;

	// List of added Negotiations
	private aListaNegociacoes   =   new ListaNegociacoes;

	// Flag of Negotiation successfullu added
	private aSucessfullAdded	:	boolean;
	
	// Views
	private aNegociacoesView	=   new NegociacoesView("#negociacoesView");
	private aMessageView		=   new MensagemView("#mensagemView");

	// Service
	private aNegociacaoService	=	new NegotiationService();

	constructor() {
		const printTypeOfInputs		=	true;
		if ( printTypeOfInputs ) {
			console.log(`${typeof document.querySelector("#data")}`);
			console.log(`${typeof document.querySelector("#quantidade")}`);
			console.log(`${typeof document.querySelector("#valor")}`);
		}

		this.aSucessfullAdded	=	false;

		this.updateView();
	}

	@logExecutionTime(true)		// If this Decorator receive any Parameters, it should use Parenthesis
	@inspect				// If this Decorator do not receive any Parameters, the Parenthesis cannot be used
	public adiciona(): void {
		// Capture fields from View and creates a new Negotiation
		const negociacao = 
			Negociacao.createNegociacao(
				this.aInputData			.value,
				this.aInputQuantidade	.value,
				this.aInputValor		.value
			);

		/*  Workday Rule
		 *	 - Negotiations are done only from Mondays to Fridays
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

		// Inserts the new Negotiation in the List
		this.aListaNegociacoes.adiciona(negociacao);
		this.aSucessfullAdded	=	true;

		// Updates the View with new Negotiation added
		this.updateView();

		// Log the Negotiation(s)
		negociacao.log();
		this.aListaNegociacoes.log();
	}

	public import(): void {
		this.aNegociacaoService.obterNegociacoes()

			// List of Negotiations
			.then(todayNegotiations	=> {
					for ( let negotiation of todayNegotiations ) {
						this.aListaNegociacoes.adiciona(negotiation);
					}
					this.aNegociacoesView.update(this.aListaNegociacoes);
				}
			)
		;
	}

	/**
	 * Evaluates if the Date is from Monday to Friday
	 * 
	 * Workday Rule
	 *	 - Negotiations are done only from Mondays to Fridays
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
		const result = 
			pDate.getDay() > WeekDay.SUNDAY &&
			pDate.getDay() < WeekDay.SATURDAY;
		
		return result;
	}

	private limparFormulario(): void {
		this.aInputData.value		   =   "";
		this.aInputQuantidade.value	 =   "";
		this.aInputValor.value		  =   "";

		this.aInputData.focus();
	}

	private updateView(): void {
		// Updates the View with the new Negotiation
		this.aNegociacoesView.update(this.aListaNegociacoes);

		if ( this.aSucessfullAdded ) {
			const message = "Negociação adicionada com sucesso!";
			// Shows a success message to the User
			this.aMessageView.update(message);
		}
	}

}