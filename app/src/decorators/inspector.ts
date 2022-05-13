// If this Decorator does not receive parameters, a Wrapper function is not needed.
// But its highly recommended, to allow future modifications
export function inspect(	
	pTarget:		any,
	pPropertyKey:	string,
	pDescriptor:	PropertyDescriptor
) {
	// Stores the Original Method content
	const originalMethod	=	pDescriptor.value;

	pDescriptor.value	=	function (...args: any[]) {
		console.log(`--- Method: ${pPropertyKey}`);
		console.log(`----- Parameters: ${JSON.stringify(args)}`);

		// Execute the Original Method
		const result		=	originalMethod.apply(this, args);

		console.log(`------- Returns: ${JSON.stringify(result)}`);

		return result;
	}

	return pDescriptor;
}