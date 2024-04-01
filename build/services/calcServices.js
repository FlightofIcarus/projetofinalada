"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verificaMes = void 0;
const calcular_1 = require("./calcular");
function verificaMes(valor, dias, taxa) {
    if (dias < 30) {
        return `Dias inferiores à 1 mês, portanto, não há juros. Seu valor é: ${valor}`;
    }
    else {
        return (0, calcular_1.calcular)(valor, dias, taxa);
    }
}
exports.verificaMes = verificaMes;
