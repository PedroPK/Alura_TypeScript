export function inspect() {
	return function(
		pTarget:		any,
		pPropertyKey:	string,
		pDescriptor:	PropertyDescriptor
	) {
		// Stores the Original Method content
		const originalMethod	=	pDescriptor.value;

		pDescriptor.value	=	function (...args: any[]) {
			console.log(`--- Method: ${pPropertyKey}`);
			console.log(`----- Parameters: ${JSON.stringify(args)}`);

			const result		=	originalMethod.apply(this, args);

			console.log(`------- Returns: ${JSON.stringify(result)}`);

			return result;
		}

		return pDescriptor;
	}
}