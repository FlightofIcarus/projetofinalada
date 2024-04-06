import "dotenv/config";
import  express, { NextFunction, Router }  from "express";
import { json, urlencoded, Request, Response } from "express";
import { ExpressServer } from "./Server";
import { CalcController } from "./controllers/Controller";
import { Service } from "./services/Service";
import { CalcRouter } from "./routes/CalcRouters";

// routerManager.setGetRouter("/", (req, res) => {controller.dividendCalculator})

function Factory() {
    const service = new Service();
    const controller = new CalcController(service);
    const router = Router()
    const routerManager = new CalcRouter(router)
    const Express = express();
    const server = new ExpressServer(Express);

    server.setGloblasMiddleware([json(), urlencoded()])

    routerManager.setPostRouter("/", controller.dividendCalculator)   

    // server.setLocalsMiddleware("/testes", []);

    const testeRoute = routerManager.getRouters();

    server.setRouter("/api/investcalc", testeRoute)

    const port = String(process.env.PORT);
    
    server.startServer(port);




    return server
}

const App = Factory()

export {App}
