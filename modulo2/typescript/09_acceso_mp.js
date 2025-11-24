"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Poliza = void 0;
var Poliza = /** @class */ (function () {
    function Poliza(asegurado) {
        this.idInterno = 'PLZ99182898982988';
        this.asegurado = asegurado;
        this.generarNumeroPoliza();
    }
    Poliza.prototype.generarNumeroPoliza = function () {
        this.numeroPoliza = (new Date()).toDateString;
    };
    Poliza.prototype.getNumeroPoliza = function () {
        return this.numeroPoliza;
    };
    Poliza.prototype.getAttributes = function () {
        return {
            asegurado: this.asegurado,
            numeroPoliza: this.numeroPoliza,
            id: this.idInterno
        };
    };
    return Poliza;
}());
exports.Poliza = Poliza;
