
export function calcular(valor: number, dias: number, taxa: number): number {

    const meses = Math.floor(dias / 30);
    let valorTotal = valor;

    for (let i = 0; i < meses; i++) {
        valorTotal = valorTotal + (valorTotal * taxa)
    }
    
    //para garantir que o resultado tenha apenas duas casas decimais.
    const valorTotalFormatado = Number (valorTotal.toFixed(2))

   return valorTotalFormatado;
}

export function verificaMes(valor: number, dias: number, taxa: number) {
    if (dias < 30) {
        return `Dias inferiores à 1 mês, portanto, não há juros. Seu valor é: ${valor}`;
    }
    else {
        return calcular(valor, dias, taxa);

    }

}