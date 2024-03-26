import { Request, Response } from 'express';
import { calcular, verificaMes } from '../services/CalculatorService';


export class CalculatorController {

    static async homePage(req: Request, res: Response) {

        let resultado;

        res.render('layout', { body: '../views/home.ejs', resultado});

    }

    static async calcularDividendos(req: Request, res: Response) {
        
        const { valor, dias, taxa } = req.body;

        const investimento = parseFloat(valor);
        const diasInvestidos = parseFloat(dias);
        const taxaSelecionada = parseFloat(taxa);

        let resultado = verificaMes(investimento, diasInvestidos, taxaSelecionada);

        res.render('layout', { body: '../views/home.ejs', resultado });
    }
}


export default CalculatorController;