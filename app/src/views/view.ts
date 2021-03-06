export abstract class View<T> {

	protected	aElement:   HTMLElement;

	constructor(pSelector: string) {
		const element	=   document.querySelector(pSelector);
		if ( element ) {
			this.aElement   =   document.querySelector(pSelector)	as HTMLInputElement;
		} else {
			throw Error(`O Seletor ${pSelector} não foi encontrado no DOM.`);
		}
	}

	// Abstract Method that has to be implemented by all subclasses
	protected abstract template( pMessage: T ): string;

	/** 
	 * Has 2 Decorators applyed in this Method, adding new funcionalities to it
	 * The Declaration order of them chances the behavior of decorated method
	 */ 
	public update( pMessage: T ): void {
		let template = this.template( pMessage );

		this.aElement.innerHTML = template;
	}

}