export function log(...pNegotiations) {
    for (let negotiation of pNegotiations) {
        negotiation.log();
    }
}
