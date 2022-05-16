import { Negociacao } from "../models/negociacao.js";
export class NegotiationService {
    obterNegociacoes() {
        console.log("obterNegociacoes() invoked at NegotiationService");
        return fetch("http://localhost:8080/dados")
            .then(response => response.json())
            .then((data) => {
            return data.map(todayData => {
                return new Negociacao(new Date(), todayData.vezes, todayData.montante);
            });
        });
    }
}
//# sourceMappingURL=negotiations-service.js.map