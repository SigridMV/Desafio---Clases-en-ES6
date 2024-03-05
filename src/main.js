import Cliente from "./cliente";
import Impuestos from "./impuestos";

let impuestos_cliente1 = new Impuestos(1000000, 200000);
let cliente1 = new Cliente("Sigrid Müller", impuestos_cliente1);

console.log(`Nombre Cliente: ${cliente1.nombre}`);
console.log(`Monto bruto anual: ${impuestos_cliente1.montoBrutoAnual}`);
console.log(`Deducciones: ${impuestos_cliente1.deducciones}`);

console.log(
  `Impuesto: ${cliente1.calcularImpuesto(
    impuestos_cliente1.montoBrutoAnual,
    impuestos_cliente1.deducciones
  )}`
);
