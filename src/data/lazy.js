"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lzFlatMap = exports.lzMap = exports.Lazy = void 0;
var Lazy = /** @class */ (function () {
    function Lazy(f) {
        var _this = this;
        this._get = function () {
            var r = f();
            _this.resolve(r);
            return r;
        };
    }
    Object.defineProperty(Lazy.prototype, "v", {
        get: function () {
            return this._get();
        },
        enumerable: false,
        configurable: true
    });
    Lazy.prototype.resolve = function (v) {
        this._get = function () { return v; };
    };
    Lazy.pure = function (v) { return new Lazy(function () { return v; }); };
    Lazy.from = function (f) { return new Lazy(f); };
    return Lazy;
}());
exports.Lazy = Lazy;
var lzMap = function (f) { return function (l) { return Lazy.from(function () { return f(l.v); }); }; };
exports.lzMap = lzMap;
var lzFlatMap = function (f) { return function (l) { return Lazy.from(function () { return f(l.v).v; }); }; };
exports.lzFlatMap = lzFlatMap;
