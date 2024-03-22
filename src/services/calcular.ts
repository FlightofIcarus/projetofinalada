export function calcular(valor: number, dias: number, taxa: number): number {

    const meses = Math.floor(dias / 30);
    let valorTotal = valor;

    for (let i = 0; i < meses; i++) {
        valorTotal = valorTotal + (valorTotal * taxa)
    }
    
    //para garantir que o resultado tenha apenas duas casas decimais.
    const valorTotalFormatado = Number (valorTotal.toFixed(2))

   // return parseFloat(valorTotalFormatado);
   return valorTotalFormatado;
}

