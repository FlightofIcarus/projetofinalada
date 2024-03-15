import {calcular} from './calcular';

export function verificaMes(valor: number, dias: number, taxa: number) {
        if (dias < 30){
             return `Dias inferiores à 1 mês, portanto, não há juros. Seu valor é: ${valor}`;
    }
    else {
        return calcular(valor, dias, taxa);
        
         } 

}

