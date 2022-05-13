export function escape() {
    return function (pTarget, pPropertyKey, pDescriptor) {
        const originalMethod = pDescriptor.value;
        pDescriptor.value = function (...args) {
            let result = originalMethod.apply(this, args);
            if (typeof result === 'string') {
                console.log(`@Escape in action at ${this.constructor.name} class, in the method ${pPropertyKey}()`);
                result =
                    result.replace(/<script>[\s\S]*?<\/script>/, '');
            }
            return result;
        };
        return pDescriptor;
    };
}
