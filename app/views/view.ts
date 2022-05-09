export abstract class View<T> {

	protected	aElement:   HTMLElement;
	private		aEscape:	boolean		=	false;

	constructor(pSelector: string, pEscape?: boolean) {
		this.aElement   =   document.querySelector(pSelector);

		if ( pEscape ) {
			this.aEscape	=	pEscape;
		}
	}

	protected abstract template( pMessage: T ): string;

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