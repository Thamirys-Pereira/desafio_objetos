
function SimuladorClima(temperaturaInicial) {
    this.temperatura = temperaturaInicial;
  
    
    this.obterTemperatura = function() {
      return this.temperatura;
    }
  
    
    this.aumentarTemperatura = function(graus) {
      this.temperatura += graus;
      console.log("Temperatura aumentada para " + this.temperatura + " graus.");
    }
  
   
    this.diminuirTemperatura = function(graus) {
      this.temperatura -= graus;
      console.log("Temperatura diminuída para " + this.temperatura + " graus.");
    }
  }
  
  
  var simulador = new SimuladorClima(20);
  
  
  console.log("Temperatura inicial: " + simulador.obterTemperatura() + " graus.");
  
  
  simulador.aumentarTemperatura(5);
  
  
  simulador.diminuirTemperatura(3);
  

  