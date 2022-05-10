import { NegociacaoController } from './controllers/negociacao-controller.js';

const controller	= new NegociacaoController();

const form		  = document.querySelector(".form");

if (form) {
	form.addEventListener(
		"submit", 
		event => {
			event.preventDefault();
			controller.adiciona();
		}
	);
} else {
	throw Error("Não foi possível inicializar a Aplicação. Verifique se o Formulário Web existe na página Index.html")
}