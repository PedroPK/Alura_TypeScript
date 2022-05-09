export abstract class View<T> {

	protected aElement:   HTMLElement;

	constructor(pSelector: string) {
		this.aElement   =   document.querySelector(pSelector);
	}

	protected abstract template( pMessage: T ): string;

	update( pMessage: T ): void {
		const template = this.template( pMessage );
		this.aElement.innerHTML = template;
	}

}