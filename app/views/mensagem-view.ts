import { View } from "./view.js";

export class MensagemView extends View<string> {

	template( pMessage: string ): string {
		const result = `
			<p class="alert alert-info">${pMessage}</p>
		`;

		return result;
	}

} 