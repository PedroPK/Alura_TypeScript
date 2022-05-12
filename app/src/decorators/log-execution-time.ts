export function logExecutionTime(pInSeconds: boolean = false) {
	return function(
		// Se Decorator for colocado em um Método Estático, será a Função Construtora da Classe. Se não, será o Prototype da Classe
		// Ou seja, pode ser o Contrutor ou o Prototype da Classe
		pTarget:			any,					
		// Ao invocar um método de uma instância, será verificado se este existe na Classe.
		// Se não existir, buscará no Prototype da Classe, subindo um grau na Herança
		// Isso se repete ou até achar a definição do Método em um Prototype, ou chegar no Prototype raiz, e lançará um Erro de Execução
		
		// Nome do Método que foi Decorado
		pPropertyKey:		string,
		
		// Tem referência para o Método que queremos executar, com uma série de MetaDados dele
		pDescriptor:		PropertyDescriptor
	) {
		// Necessário manter o comportamento original do Método
		const metodoOriginal	=	pDescriptor.value;

		// Sobrescrevendo Método Original
		//									Captura os Parâmetros, se existirem, do Método original recebe
		pDescriptor.value		=	function(...args: Array<any>) {
			let timeDivisor				=	1;
			let timeUnit			=	'miliseconds';
			if ( pInSeconds ) {
				timeDivisor		=	1000;
				timeUnit	=	'seconds';
			}

			const	beginningTime	=	performance.now();

			// Invocar o Método Original
			//
			//										Contexto	
			//												Array de Parâmetros
			const resultado = metodoOriginal.apply(	this,	args);

			const	endTime			=	performance.now();

			// Imprime tempo de Execução do Método decorado, em Segundos
			console.log(`${pPropertyKey}(), Execution time: ${(endTime - beginningTime) / timeDivisor} ${timeUnit}`);

			return resultado;
		}

		return pDescriptor;
	}
}