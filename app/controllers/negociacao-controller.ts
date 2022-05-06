import { Negociacao } from "../models/negociacao.js";

export class NegociacaoController {
        private aInputData          :   HTMLInputElement;
        private aInputQuantidade    :   HTMLInputElement;
        private aInputValor         :   HTMLInputElement;

        constructor() {
            this.aInputData         =   document.querySelector("#data");
            this.aInputQuantidade   =   document.querySelector("#quantidade");
            this.aInputValor        =   document.querySelector("#valor");
        }

        adiciona(): void {
            const negociacao = 
                this.criarNegociacao();

            this.limparFormulario();

            console.log(negociacao);
        }

        criarNegociacao(): Negociacao {
            const date: Date    = this.converterData(   this.aInputData.value       );
            const quantidade    = parseInt(             this.aInputQuantidade.value );
            const valor         = parseFloat(           this.aInputValor.value      )

            const negociacao = 
                new Negociacao(
                    date,
                    quantidade,
                    valor
                );
            
            return negociacao;
        }

        converterData(pDataString: string): Date {
             /* Expressão Regular para localizar todos os Hífens, 
                usando g para indicar que é global
            */
                const regex = /-/g;
                const date          = new Date(     pDataString.replace(regex, ",")     );

                return date;
        }

        limparFormulario(): void {
            this.aInputData.value           =   "";
            this.aInputQuantidade.value     =   "";
            this.aInputValor.value          =   "";

            this.aInputData.focus();
        }
}