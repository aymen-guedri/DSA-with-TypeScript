"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ex1_1 = require("./ex1");
var arr = [1, 3, 5, 7, 9, 11, 13];
console.log("Test 1 (should be true):", (0, ex1_1.default)(arr, 7));
console.log("Test 2 (should be false):", (0, ex1_1.default)(arr, 2));
console.log("Test 3 (should be true):", (0, ex1_1.default)(arr, 13));
console.log("Test 4 (should be false):", (0, ex1_1.default)([], 1));
