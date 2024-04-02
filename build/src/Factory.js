"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
require("dotenv/config");
const express_1 = __importStar(require("express"));
const express_2 = require("express");
const Server_1 = require("./Server");
const Controller_1 = require("./controllers/Controller");
const Service_1 = require("./services/Service");
const CalcRouters_1 = require("./routes/CalcRouters");
// routerManager.setGetRouter("/", (req, res) => {controller.dividendCalculator})
function Factory() {
    const service = new Service_1.Service();
    const controller = new Controller_1.CalcController(service);
    const router = (0, express_1.Router)();
    const routerManager = new CalcRouters_1.CalcRouter(router);
    const Express = (0, express_1.default)();
    const server = new Server_1.ExpressServer(Express);
    server.setGloblasMiddleware([(0, express_2.json)(), (0, express_2.urlencoded)()]);
    routerManager.setPostRouter("/", controller.dividendCalculator);
    // server.setLocalsMiddleware("/testes", []);
    const testeRoute = routerManager.getRouters();
    server.setRouter("/api/investcalc", testeRoute);
    const port = String(process.env.PORT);
    server.startServer(port);
    function fazLog(req, res) {
        console.log(`API InvestCalc on na porta ${port}`);
        res.send("enviou!");
    }
    return server;
}
const App = Factory();
exports.App = App;
