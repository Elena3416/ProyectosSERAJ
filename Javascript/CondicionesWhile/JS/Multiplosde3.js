function EventListener() {
  document
    .getElementById("btncalcular")
    .addEventListener("click", CalcularMultiplo());
}

function CalcularMultiplo() {
  var imprimirlistado = document.getElementById("imprimirnumeros");
  imprimirlistado.innerText = "";
  var x = 50;

  while (x >= 5) {
      if(x % 3 == 0){
          var lista = document.createElement("li");
          lista.setAttribute("class", "list-group-item mt-2");
          lista.innerText = x;
          imprimirlistado.appendChild(lista);
      }
    x--;
  }
}
