export function domInjector(pSelector) {
    return function (pTarget, pPropertyKey) {
        console.log(`Modifing Prototype ${pTarget.constructor.name} and adding Getter() to the Property ${pPropertyKey}`);
        const getter = function () {
            console.log(`Searchin Element at DOM with the Selector ${pSelector} to Inject in Property ${pPropertyKey}`);
            const element = document.querySelector(pSelector);
            return element;
        };
        Object.defineProperty(pTarget, pPropertyKey, { get: getter });
    };
}
