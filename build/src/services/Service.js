"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
const calcServices_1 = require("./calcServices");
class Service {
    calc(req) {
        const data = req.body;
        const result = (0, calcServices_1.verificaMes)(Number(data.valor), Number(data.tempo), Number(data.taxa));
        //valor * ((1 + 0,01)**tempo)
        return result;
    }
}
exports.Service = Service;
// Qual o melhor banco para investir em CDB 2023?
//Base CDI: 0,00989/mês ou 0,1273/ano
// Banco Neon: 110% do CDI;
// Paraná Banco: 110% do CDI;
// PagBank: a partir de 100% do CDI;
// C6 Bank: 101% do CDI;
// BTG Pactual: 103% do CDI;
// Banco Pan: 103% do CDI;
// Banco Inter: 100% do CDI;
// Banco Itaú – 100% do CDI.
