import { Express, Request, Response, json, urlencoded } from "express";
import express from "express";
import { CalcController } from "./controllers/Controller";

//delete é uma palavra reservada do JS/TS, lembrar!

interface IExpressInstance extends Express{}


interface IServer {

    setGloblasMiddleware(middlewares: any[]): void;

    setLocalsMiddleware(path: string, middlewares: any[], extraConfigs?: any): void;

    setRouter(path: string, router: any): void;

    startServer(port: string | number): void;
    
}

export class ExpressServer implements IServer{
   
    constructor(private httpManager: IExpressInstance){}

    setGloblasMiddleware(middlewares: any[]): void {
        this.httpManager.use(middlewares)
    };

    setLocalsMiddleware(path: string, middlewares: any[], extraConfigs?: any): void {
        
        this.httpManager.use(path, middlewares)
    };

    setRouter(path: string, router: any): void {
        this.httpManager.use(path, router)
    };

    startServer(port: string | number): void {
        this.httpManager.listen(port, () => {
            console.log(`API InvestCalc on na porta ${port}`);
            
        })
    };

}