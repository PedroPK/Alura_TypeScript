export function logExecutionTime() {
    return function (pTarget, pPropertyKey, pDescriptor) {
        const metodoOriginal = pDescriptor.value;
        pDescriptor.value = function (...args) {
            const beginningTime = performance.now();
            const resultado = metodoOriginal.apply(this, args);
            const endTime = performance.now();
            console.log(`${pPropertyKey}(), Execution time: ${(endTime - beginningTime) / 1000}`);
            return resultado;
        };
        return pDescriptor;
    };
}
