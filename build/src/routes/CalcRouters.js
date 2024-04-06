"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalcRouter = void 0;
// const routersControl = Router()
class CalcRouter {
    constructor(routersControl) {
        this.routersControl = routersControl;
    }
    setGetRouter(routePath, controller) {
        this.routersControl.get(routePath, controller);
    }
    ;
    setPostRouter(routePath, controller) {
        this.routersControl.post(routePath, controller);
    }
    ;
    setPutRouter(routePath, controller) {
        this.routersControl.put(routePath, controller);
    }
    ;
    setDelRouter(routePath, controller) {
        this.routersControl.delete(routePath, controller);
    }
    ;
    getRouters() {
        return this.routersControl;
    }
}
exports.CalcRouter = CalcRouter;
