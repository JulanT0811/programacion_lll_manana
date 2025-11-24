"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolizaVida = exports.Poliza = void 0;
var Poliza = /** @class */ (function () {
    function Poliza(aseguradora, tipoPoliza) {
        this.aseguradora = aseguradora;
        this.tipoPoliza = tipoPoliza;
    }
    Poliza.prototype.procesarPoliza = function () {
        console.log('Póliza en proceso de validación');
    };
    return Poliza;
}());
exports.Poliza = Poliza;
var PolizaVida = /** @class */ (function (_super) {
    __extends(PolizaVida, _super);
    function PolizaVida() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PolizaVida;
}(Poliza));
exports.PolizaVida = PolizaVida;
