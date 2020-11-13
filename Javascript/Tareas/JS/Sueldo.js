function EventListener() {
  document
    .getElementById("btnCalcular")
    .addEventListener("click", CalcularSueldo());
}

function CalcularSueldo() {
  var sueldo = Number(document.getElementById("sueldo").value);
  var imprimirpagosueldo = document.getElementById("imprimirsueldo");
  var descuento = document.getElementsByName("Grupo1");
  var pago = 0;

  for (var i = 0; i <= descuento.length; i++) {
    if (descuento[i].checked == 1) {
      pago = (sueldo * 0.1) + sueldo;
    } if (descuento[i].checked == 2) {
      pago = (sueldo * 0.5) + sueldo;
    }
}
imprimirpagosueldo.innerText = "El pago del empleado es de: $" + pago;
}
