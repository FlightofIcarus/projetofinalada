"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
class Service {
    calc(req) {
        const data = req.body;
        const rate = (number, time, tax) => {
            return number * ((1 + tax) ** time);
        };
        const montante = Number(rate(Number(data.valor), Number(data.tempo), Number(data.taxa)).toFixed(2));
        //valor * ((1 + 0,01)**tempo)
        const juros = montante - Number(data.valor);
        const ROI = ((montante - Number(data.valor)) / Number(data.valor)).toFixed(2);
        const result = {
            Juros: juros,
            Montante: montante,
            ROI: Number(ROI)
        };
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
