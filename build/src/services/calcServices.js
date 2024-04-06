"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verificaMes = void 0;
const calcular_1 = require("./calcular");
function verificaMes(valor, meses, taxa) {
    if (meses < 1) {
        return { message: `Dias inferiores à 1 mês, portanto, não há juros. Seu valor é: ${valor}` };
    }
    else {
        return (0, calcular_1.calcular)(valor, meses, taxa);
    }
}
exports.verificaMes = verificaMes;
