// Wrapper function
export function domInjector(
	pSelector:			string,
	pPrintConsoleLogs:	boolean	=	true
) {
	// Decorator function
	return function (
		pTarget:		any,
		pPropertyKey:	string
	) {
		if ( pPrintConsoleLogs ) {
			console.log(`Modifing Prototype ${pTarget.constructor.name} and adding Getter() to the Property ${pPropertyKey}`);
		}
		

		let element:	HTMLElement;
		// Method to get and HTMLElement from DOM
		const getter	=	function() {

			// If is not null, undefined, Zero or Empty String
			if ( !element ) {
				if ( pPrintConsoleLogs ) {
					console.log(`Searching Element at DOM with the Selector ${pSelector} to Inject in Property ${pPropertyKey}`);
				}

				//				Assuming that it will never return Null
				element		=	<HTMLElement>	document.querySelector(pSelector);
			}

			// Does a Selector Query at DOM
			//const element	=	document.querySelector(pSelector);
			return element;
		}

		// Adds a Getter do PropertyKey at Target Prototype
		Object.defineProperty(
			pTarget, 		// Prototype
			pPropertyKey,	// Property/Attribute
			{ get: getter }	// Getter to Property above
		);
	}
}