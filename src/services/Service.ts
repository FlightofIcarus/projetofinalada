import { Request } from "express-serve-static-core";
import { calcularResultadoInvestimento } from "../utils/calcularDividendos";
import { validaRequest } from "../utils/validaRequest";


export class Service {

    calc(req: Request) {
        const data = req.body;
        
        try {
            
            validaRequest(data);

            const { valor: valorInvestido, tempo: tempoInvestido, taxa: taxaInvestimento } = data;

            const result = calcularResultadoInvestimento(valorInvestido, tempoInvestido, taxaInvestimento);
            
            return result;

        } catch (error) {
            return error
        }

    }
}
