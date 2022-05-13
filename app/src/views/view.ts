import { inspect }			from "../decorators/inspector.js";
import { logExecutionTime }	from "../decorators/log-execution-time.js";

export abstract class View<T> {

	protected	aElement:   HTMLElement;
	private		aEscape:	boolean		=	false;

	constructor(pSelector: string, pEscape?: boolean) {
		const element	=   document.querySelector(pSelector);
		if ( element ) {
			this.aElement   =   document.querySelector(pSelector)	as HTMLInputElement;
		} else {
			throw Error(`O Seletor ${pSelector} não foi encontrado no DOM.`);
		}

		if ( pEscape ) {
			this.aEscape	=	pEscape;
		}
	}

	// Abstract Method that has to be implemented by all subclasses
	protected abstract template( pMessage: T ): string;

	/** 
	 * Has 2 Decorators applyed in this Method, adding new funcionalities to it
	 * The Declaration order of them chances the behavior of decorated method
	 */ 
	@logExecutionTime()
	@inspect()
	public update( pMessage: T ): void {
		let template = this.template( pMessage );

		if ( this.aEscape ) {
			template = this.removeScriptTag(template);
		}
		
		this.aElement.innerHTML = template;
	}

	private removeScriptTag(pTemplate: string): string {
		const result =
			pTemplate.replace(
				/<script>[\s\S]*?<\/script>/, 
				''
			);
		
		return result;
	}

}