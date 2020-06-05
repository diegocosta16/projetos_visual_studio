
var nome, media, nota01, nota02;

nome = prompt("Digite o nome do aluno: ")
nota01 = prompt("Digite a primeira nota de " + nome + ":")
nota02 = prompt("Digite a segunda nota de " + nome + ":")
media = (parseInt(nota01) + parseInt(nota02)) / 2


    if (media>=70)
        alert(nome+ ", APROVADO COM " + media + "pontos!")
    else
    alert(nome + ", REPROVADO COM " + media + "pontos!")