"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.p = void 0;
function p(v) {
    var r = v;
    for (var i = 1; i < arguments.length; i++) {
        r = arguments[i](r);
    }
    return r;
}
exports.p = p;
