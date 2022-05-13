// Wrapper function
export function domInjector(pSelector:	string) {
	// Decorator function
	return function (
		pTarget:		any,
		pPropertyKey:	string
	) {
		console.log(`Modifing Prototype ${pTarget.constructor.name} and adding Getter() to the Property ${pPropertyKey}`);

		// Method to get and HTMLElement from DOM
		const getter	=	function() {
			console.log(`Searchin Element at DOM with the Selector ${pSelector} to Inject in Property ${pPropertyKey}`);

			// Does a Selector Query at DOM
			const element	=	document.querySelector(pSelector);
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