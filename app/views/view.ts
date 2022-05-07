export class View {

	protected aElement:   HTMLElement;

	constructor(pSelector: string) {
		this.aElement   =   document.querySelector(pSelector);
	}

}