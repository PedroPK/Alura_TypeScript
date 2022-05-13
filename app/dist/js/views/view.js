var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { inspect } from "../decorators/inspector.js";
import { logExecutionTime } from "../decorators/log-execution-time.js";
export class View {
    constructor(pSelector, pEscape) {
        this.aEscape = false;
        const element = document.querySelector(pSelector);
        if (element) {
            this.aElement = document.querySelector(pSelector);
        }
        else {
            throw Error(`O Seletor ${pSelector} não foi encontrado no DOM.`);
        }
        if (pEscape) {
            this.aEscape = pEscape;
        }
    }
    update(pMessage) {
        let template = this.template(pMessage);
        if (this.aEscape) {
            template = this.removeScriptTag(template);
        }
        this.aElement.innerHTML = template;
    }
    removeScriptTag(pTemplate) {
        const result = pTemplate.replace(/<script>[\s\S]*?<\/script>/, '');
        return result;
    }
}
__decorate([
    logExecutionTime(),
    inspect()
], View.prototype, "update", null);
