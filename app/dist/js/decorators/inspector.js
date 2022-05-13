export function inspect() {
    return function (pTarget, pPropertyKey, pDescriptor) {
        const originalMethod = pDescriptor.value;
        pDescriptor.value = function (...args) {
            console.log(`--- Method: ${pPropertyKey}`);
            console.log(`----- Parameters: ${JSON.stringify(args)}`);
            const result = originalMethod.apply(this, args);
            console.log(`------- Returns: ${JSON.stringify(result)}`);
            return result;
        };
        return pDescriptor;
    };
}
