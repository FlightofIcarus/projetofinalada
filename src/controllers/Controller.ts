import { Service } from "../services/Service";
import {Request, Response} from "express-serve-static-core"


export class CalcController{
    constructor(protected service: Service){
    }

    dividendCalculator = (req: Request, res: Response):void => {
        const response = this.service.calc(req);
        res.setHeader('Content-Type', 'application/json');
        res.json(response);
    }


}

