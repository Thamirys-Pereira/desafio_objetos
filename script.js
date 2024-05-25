
let entrada = prompt("Digite a temperatura atual.");

function SimuladorClima(temperaturaInicial) {
  this.entrada = temperaturaInicial;

  this.obterTemperatura = function() {
    return this.entrada;
  }

  this.aumentarTemperatura = function(graus) {
    this.entrada += graus;
    alert("Temperatura aumentada para " + this.entrada + " graus.");
  }

  this.diminuirTemperatura = function(graus) {
    this.entrada -= graus;
    alert("Temperatura diminuída para " + this.entrada + " graus.");
  }
}

const simulador = new SimuladorClima(parseFloat(entrada)); 

alert("Temperatura inicial: " + simulador.obterTemperatura() + " graus.");

let aumento = parseFloat(prompt("Quantos graus deseja aumentar a temperatura?"));
simulador.aumentarTemperatura(aumento);

let diminuicao = parseFloat(prompt("Quantos graus deseja diminuir a temperatura?"));
simulador.diminuirTemperatura(diminuicao);


