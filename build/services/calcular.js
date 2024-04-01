"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcular = void 0;
function calcular(valor, dias, taxa) {
    const meses = Math.floor(dias / 30);
    let valorTotal = valor;
   
    
    for (let i = 0; i < meses; i++) {
        valorTotal = valorTotal + (valorTotal * taxa);
    }
    //para garantir que o resultado tenha apenas duas casas decimais.
    const valorTotalFormatado = Number(valorTotal.toFixed(2));
    // return parseFloat(valorTotalFormatado);
    return valorTotalFormatado;
}
exports.calcular = calcular;
