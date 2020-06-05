// no javascrtip não precisa declarar os tipos de dados das variaveis. ele e conderado baixatipagem

var nota01, nota02, nome, passou;

nome = prompt("Digite o nome do aluno")
nota01 = prompt("Digite o valor da primeira nota de "+nome)
nota02 = prompt("Digite o valor da segunda nota de "+nome)

    if (parseInt(nota01)+parseInt(nota02)>60) 
        alert("Parabéns "+ nome +"!" + "você foi aprovado com "+ (parseInt(nota01)+parseInt(nota02)+"pontos"))
     else 
        alert("Que pena" + nome + "!" + "Você foi reprovado com"+ (parseInt(nota01)+parseInt(nota02)+"pontos.")
