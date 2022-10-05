function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorDolar = parseFloat(valor);

  var valorReal = valorDolar * 5;
  console.log(valorReal);

  var valorElementoConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em real é R$ " + valorReal;
  valorElementoConvertido.innerHTML = valorConvertido;
}
