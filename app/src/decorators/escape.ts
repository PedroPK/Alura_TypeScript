export function escape(pPrintConsoleLog:	boolean	=	true) {
	return function (
		pTarget:		any,
		pPropertyKey:	string,
		pDescriptor:	PropertyDescriptor
	) {
		// Storing the Original Method content
		const originalMethod	=	pDescriptor.value;

		pDescriptor.value	=	function(...args:Array<any>) {
			// Execute the Original Method
			let result		=	originalMethod.apply(this, args);

			// Tests if its a String, before try to remove any <Script> tag
			if ( typeof result	=== 'string' ) {
				if (pPrintConsoleLog) {
					console.log(`@Escape in action at ${this.constructor.name} class, in the method ${pPropertyKey}()`)
				}

				// Execute the Escape funcionality
				result	=	
					result.replace(
						/<script>[\s\S]*?<\/script>/, 
						''
					);
			}
			return result;
		}

		return	pDescriptor;

	}
}