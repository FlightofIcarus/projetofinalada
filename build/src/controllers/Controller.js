"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalcController = void 0;
class CalcController {
    constructor(service) {
        this.service = service;
        this.dividendCalculator = (req, res) => {
            const response = this.service.calc(req);
            console.log(response);
            res.json(response);
        };
    }
}
exports.CalcController = CalcController;
