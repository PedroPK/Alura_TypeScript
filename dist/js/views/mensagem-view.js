import { View } from "./view.js";
export class MensagemView extends View {
    template(pMessage) {
        const result = `
			<p class="alert alert-info">${pMessage}</p>
		`;
        return result;
    }
}
