"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var calcServices_1 = require("./services/calcServices");
var valorFinal = (0, calcServices_1.verificaMes)(100.25, 30, 0.02);
console.log("o valor final é:", valorFinal);
