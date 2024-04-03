export function calcular(valor: number, meses: number, taxa: number): object {

    if (typeof valor !== 'number' && typeof meses !== 'number' && typeof taxa !== 'number'){
        throw new Error('Um ou mais valores não são válidos! Insira apenas números')
    } else {

    const rate = (valor:number , meses:number, taxa: number) => {
        return valor * ((1 + taxa) ** meses);
    }
    const montante = Number(rate(Number(valor), Number(meses), Number(taxa)).toFixed(2));

    const juros = Number((montante - Number(valor)).toFixed(2));

    const ROI = ((montante - Number(valor)) / Number(valor)).toFixed(2);

    const resultado = {
        Juros: juros,
        Montante: montante,
        ROI: Number(ROI)
    }

    return resultado;

}
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

