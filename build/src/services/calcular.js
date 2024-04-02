"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcular = void 0;
function calcular(valor, meses, taxa) {
    const rate = (valor, meses, taxa) => {
        return valor * ((1 + taxa) ** meses);
    };
    const montante = Number(rate(Number(valor), Number(meses), Number(taxa)).toFixed(2));
    const juros = Number((montante - Number(valor)).toFixed(2));
    const ROI = ((montante - Number(valor)) / Number(valor)).toFixed(2);
    const resultado = {
        Juros: juros,
        Montante: montante,
        ROI: Number(ROI)
    };
    return resultado;
    /*  const meses = Math.floor(meses / 30);
  
      let valorTotal = valor;
  
      for (let i = 0; i < meses; i++) {
          valorTotal = valorTotal + (valorTotal * taxa)
      }
  
  
      //para garantir que o resultado tenha apenas duas casas decimais.
      const valorTotalFormatado = Number (valorTotal.toFixed(2))
  
     // return parseFloat(valorTotalFormatado);
     */
}
exports.calcular = calcular;
