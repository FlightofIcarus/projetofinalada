"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpressServer = void 0;
class ExpressServer {
    constructor(httpManager) {
        this.httpManager = httpManager;
    }
    setGloblasMiddleware(middlewares) {
        this.httpManager.use(middlewares);
    }
    ;
    setLocalsMiddleware(path, middlewares, extraConfigs) {
        this.httpManager.use(path, middlewares);
    }
    ;
    setRouter(path, router) {
        this.httpManager.use(path, router);
    }
    ;
    startServer(port) {
        this.httpManager.listen(port, () => {
            console.log(`API InvestCalc on na porta ${port}`);
        });
    }
    ;
}
exports.ExpressServer = ExpressServer;
