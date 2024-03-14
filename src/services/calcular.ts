export function calcular(valor: number, dias: number): number {

    const meses = Math.floor(dias / 30);

    let valorTotal = valor;

    for (let i = 0; i < meses; i++) {
        valorTotal = valorTotal + (valorTotal * 0.1)
    }

    //para garantir que o resultado tenha apenas duas casas decimais.
    const valorTotalFormatado = Number (valorTotal.toFixed(2))

    //console.log(valorTotalFormatado);
   // return parseFloat(valorTotalFormatado);
   return valorTotalFormatado;
}

