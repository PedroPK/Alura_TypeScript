export class View<T> {

	protected aElement:   HTMLElement;

	constructor(pSelector: string) {
		this.aElement   =   document.querySelector(pSelector);
	}

	template( pMessage: T ): string {
		throw Error("Inheritant class should implement this method");
	}

	update( pMessage: T ): void {
		const template = this.template( pMessage );
		this.aElement.innerHTML = template;
	}

}