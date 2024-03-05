"use strict";

var _cliente = _interopRequireDefault(require("./cliente"));
var _impuestos = _interopRequireDefault(require("./impuestos"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var impuestos_cliente1 = new _impuestos["default"](1000000, 200000);
var cliente1 = new _cliente["default"]("Sigrid Müller", impuestos_cliente1);
console.log("Nombre Cliente: ".concat(cliente1.nombre));
console.log("Monto bruto anual: ".concat(impuestos_cliente1.montoBrutoAnual));
console.log("Deducciones: ".concat(impuestos_cliente1.deducciones));
console.log("Impuesto: ".concat(cliente1.calcularImpuesto(impuestos_cliente1.montoBrutoAnual, impuestos_cliente1.deducciones)));