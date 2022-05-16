export function logExecutionTime(pInSeconds = false) {
    return function (pTarget, pPropertyKey, pDescriptor) {
        const metodoOriginal = pDescriptor.value;
        pDescriptor.value = function (...args) {
            let timeDivisor = 1;
            let timeUnit = 'miliseconds';
            if (pInSeconds) {
                timeDivisor = 1000;
                timeUnit = 'seconds';
            }
            const beginningTime = performance.now();
            const resultado = metodoOriginal.apply(this, args);
            const endTime = performance.now();
            console.log(`${pPropertyKey}(), Execution time: ${(endTime - beginningTime) / timeDivisor} ${timeUnit}`);
            return resultado;
        };
        return pDescriptor;
    };
}
//# sourceMappingURL=log-execution-time.js.map