import { View } from "./view.js";

export class MensagemView extends View{

	template( pMessage: string ): string {
		const result = `
			<p class="alert alert-info">${pMessage}</p>
		`;

		return result;
	}

	update( pMessage: string ): void {
		const template = this.template( pMessage );
		this.aElement.innerHTML = template;
	}

} 