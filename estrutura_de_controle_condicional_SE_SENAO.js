
function acaoBotao() {

    var primeiroNumero, segundoNumero, operacao, resultado

    primeiroNumero = prompt("Digite o primeiro valor: ")
    operacao = prompt("Escolha a operação: ")
    segundoNumero = prompt("Digite o seundo valor: ")
    
        if (operacao = "+"){
            resultado = parseInt(primeiroNumero) + parseInt(segundoNumero)
        } 
            else if (operação = "-") {
            resultado = parseInt(primeiroNumero) - parseInt(segundoNumero)
        } 
            else if (operacao = "*") {
                resultado = parseInt(primeiroNumero) * parseInt(segundoNumero)
            }
            else if (operacao = "/") {
                resultado = parseInt(primeiroNumero) / parseInt(segundoNumero)
            }
            
            document.getElementById("paragrafo").innerText = resultado


    
}

