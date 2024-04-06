//cálculo de montante Juros compostos: valor * ((1 + 0,01)**tempo)



function calcularMontante(valorInvestido: number, time: number, tax: number): number {
    
    const result = (valorInvestido * ((1 + tax) ** time)).toFixed(2);

    return Number(result);
};

function calcularJuros(montante: number, valorInvestido: number): number {
    
    const result = (montante - valorInvestido).toFixed(2);

    return Number(result);
}

function calcularROI(montante: number, valorInvestido: number): number {
    
    const result = ((montante - valorInvestido) / valorInvestido).toFixed(2);

    return Number(result);
}

type ResultObject = {
    Juros: number,
    Montante: number,
    ROI: number
};


function calcularResultadoInvestimento (valorInvestido: number, time: number, tax: number): ResultObject{

    const montante = calcularMontante(valorInvestido, time, tax);
    
    const juros = calcularJuros(montante, valorInvestido);
    
    const ROI = calcularROI(montante, valorInvestido);
    
    const result = {
        Juros: juros,
        Montante: montante,
        ROI: Number(ROI)
    };

    return result;
};

export { calcularResultadoInvestimento };