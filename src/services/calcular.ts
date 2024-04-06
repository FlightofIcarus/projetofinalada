export function calcular(valor: number, meses: number, taxa: number): object {

    if (typeof valor !== 'number' || typeof meses !== 'number' || typeof taxa !== 'number'){
        throw new Error('Um ou mais valores não são válidos! Insira apenas números.')
    } else if (valor <0 || meses <0 || taxa <0) {
        throw new Error('um ou mais valores são números negativos! Insira apenas valores positivos.')
    }
    else {

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
}

