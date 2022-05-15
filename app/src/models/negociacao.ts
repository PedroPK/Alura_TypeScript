export class Negociacao {
	

	constructor(
		private _data:				Date, 
		public readonly quantidade:	number, 
		public readonly valor:		number
	) {}
	
	public static createNegociacao(
		pDate:			string,
		pQuantidade:	string,
		pValor:			string
	) : Negociacao {
		const date: 		Date	= this.converterData(   pDate		);
		const quantidade:	number	= parseInt(			 	pQuantidade );
		const valor:		number 	= parseFloat(		   	pValor		)

		const negociacao = 
			new Negociacao(
				date,
				quantidade,
				valor
			);
		
		return negociacao;
	}

	private static converterData(pDataString: string): Date {
		/* Expressão Regular para localizar todos os Hífens, 
		usando g para indicar que é global
		*/
		const date	= 
			new Date(
				pDataString.replace("-", ",")	 
			);

		return date;
	}

	get data(): Date {
		const data = new Date(this._data.getTime());
		return data;
	}
	get volume() : number {
		return this.quantidade * this.valor;
	}

	public log(): void {
		console.log(
			this.toString()
		);
	}


	public toString(): any {
		return `
				Negociação
				- Data: ${this.data}
				- Quantidade: ${this.quantidade}
				- Valor: ${this.valor}
				- Volume: ${this.volume}
			`;
	}
}