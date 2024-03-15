import { Request, Response } from 'express';

export class CalculatorController {

    static async homePage(req: Request, res: Response) {

        let resultado = 110;

        res.render('layout', { body: '../views/home.ejs', resultado });

    }
}


export default CalculatorController