import { Router, Response, Request } from "express";
import {IRouterMatcher, IRoute} from "express-serve-static-core";
import { CalcController } from "../controllers/Controller";

// interface IRouter extends IRouterMatcher<any>{
//     get(routePath: string, controller: CalcController): void;
//     post(routePath: string, controller: CalcController): void;
//     put(routePath: string, controller: CalcController): void;
//     delete(routePath: string, controller: CalcController): void;
// }

type Controller = (req: Request, res: Response) => void; //Callback function 

// const routersControl = Router()

export class CalcRouter{
    constructor(public routersControl: Router){}

    setGetRouter(routePath: string, controller: Controller){
        this.routersControl.get(routePath, controller);
    };

    setPostRouter(routePath: string, controller: Controller){
        this.routersControl.post(routePath, controller);
    };

    setPutRouter(routePath: string, controller: Controller){
       this.routersControl.put(routePath, controller);
    };

    setDelRouter(routePath: string, controller: Controller){
        this.routersControl.delete(routePath, controller);
    };

    getRouters(){
        return this.routersControl;
    }


}