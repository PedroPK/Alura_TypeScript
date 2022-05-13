var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { inspect } from "../decorators/inspector.js";
import { logExecutionTime } from "../decorators/log-execution-time.js";
export class View {
    constructor(pSelector) {
        const element = document.querySelector(pSelector);
        if (element) {
            this.aElement = document.querySelector(pSelector);
        }
        else {
            throw Error(`O Seletor ${pSelector} não foi encontrado no DOM.`);
        }
    }
    update(pMessage) {
        let template = this.template(pMessage);
        this.aElement.innerHTML = template;
    }
}
__decorate([
    logExecutionTime(),
    inspect
], View.prototype, "update", null);
