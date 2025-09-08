//require("./fileOne"); //here we did include fileOne module in app module
// const { z, calcSum } = require("./fileOne");

const { z } = require("./fileOne");
const { calcSum, calcMultiplication } = require("./calculate");
let a = 10;
var b = 20;
console.log(z);
calcSum(a, b);
calcMultiplication(a, b);
/*
CJS way:
require("./fileOne") & module.exports = { z, calcSum };
 "type":"commonjs" //BY Default

MJS way:
export const z = 210; & import { z, calcSum } from "./fileOne.js";
=> in mjs you have to give full path name with extension
*/
