"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Poliza = void 0;
var Poliza = /** @class */ (function () {
    function Poliza(titular, numeroPoliza) {
        this.titular = titular;
        this.numeroPoliza = numeroPoliza;
    }
    Poliza.prototype.mostrarDetalle = function () {
        console.log("P\u00F3liza N\u00BA ".concat(this.numeroPoliza, " registrada a nombre de ").concat(this.titular, "."));
    };
    return Poliza;
}());
exports.Poliza = Poliza;
