"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrTakeLast = exports.arrHead = void 0;
var maybe_1 = require("../data/maybe");
var arrHead = function (arr) { return arr.length > 0 ? (0, maybe_1.Just)(arr[0]) : maybe_1.None; };
exports.arrHead = arrHead;
var arrTakeLast = function (c) { return function (arr) { return arr.slice(Math.max(arr.length - c, 0)); }; };
exports.arrTakeLast = arrTakeLast;
