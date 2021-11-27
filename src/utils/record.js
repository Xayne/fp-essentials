"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recFilter = exports.recMap = exports.recToArr = exports.recTryGet = exports.recFold = exports.arrToRec = exports.morph_ = exports.morphFlipped = exports.morph = void 0;
var maybe_1 = require("../data/maybe");
var morph = function (props) { return function (val) { return Object.assign({}, val, props); }; };
exports.morph = morph;
var morphFlipped = function (val) { return function (props) { return (0, exports.morph)(props)(val); }; };
exports.morphFlipped = morphFlipped;
var morph_ = function (f) { return function (val) { return Object.assign({}, val, f(val)); }; };
exports.morph_ = morph_;
var arrToRec = function (select) { return function (arr) {
    var mutBox = {};
    arr.forEach(function (v, i) {
        var _a = select(v, i), k = _a[0], o = _a[1];
        mutBox[k] = o;
    });
    return mutBox;
}; };
exports.arrToRec = arrToRec;
var recFold = function (rec, initial, folder) { return Object.entries(rec).reduce(function (a, _a) {
    var k = _a[0], v = _a[1];
    return folder(a, v, k);
}, initial); };
exports.recFold = recFold;
var recTryGet = function (k) { return function (rec) { return rec.hasOwnProperty(k) ? (0, maybe_1.Just)(rec[k]) : maybe_1.None; }; };
exports.recTryGet = recTryGet;
var recToArr = function (proj) { return function (rec) { return Object.entries(rec).map(function (_a) {
    var k = _a[0], v = _a[1];
    return proj(v, k);
}); }; };
exports.recToArr = recToArr;
var recMap = function (proj) { return function (rec) {
    var r = {};
    Object.entries(rec)
        .forEach(function (_a) {
        var k = _a[0], v = _a[1];
        return r[k] = proj(v, k);
    });
    return r;
}; };
exports.recMap = recMap;
var recFilter = function (filter) { return function (rec) {
    var r = {};
    Object.entries(rec)
        .forEach(function (_a) {
        var k = _a[0], v = _a[1];
        return filter(k, v) ? r[k] = v : undefined;
    });
    return r;
}; };
exports.recFilter = recFilter;
