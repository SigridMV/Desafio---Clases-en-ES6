export default class Cliente {
  constructor(nombre, impuesto) {
    this._nombre = nombre;
    this._impuesto = impuesto;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nuevo_nombre) {
    this._nombre = nuevo_nombre;
  }

  // Método de cálculo
  calcularImpuesto(montoBrutoAnual, deducciones) {
    return ((montoBrutoAnual- deducciones) * 21) / 100;
  }
}