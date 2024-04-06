import { calcular } from './calcular';

export function verificaMes(valor: number, meses: number, taxa: number) {
    if (meses < 1) {
        return {message: `Dias inferiores à 1 mês, portanto, não há juros. Seu valor é: ${valor}`};
    }
    else {
        return calcular(valor, meses, taxa);

    }

} 