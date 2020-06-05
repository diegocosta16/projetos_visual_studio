// forma de documentacao em linha // 
// no java é possivel fazer o comentario de bloco ultilizando /* e fechando o bloco com */

// ESTE É UM TEXTO COMENTADO EM LINHA E NÃO APARECE PARA O USUARIO FINAL 

/* Este é um comentario de bloco e não aparace para o usuario final */

var nome,media, nota01, nota02, nota03;
nome = prompt("Digite o nome do aluno:")
nota01 = prompt("Digite nota 01 de "+nome+":")
nota02 = prompt("Digite nota 02 de "+nome+":")
nota03 = prompt("Digite nota 03 de "+nome+":")
media = (parseInt(nota01) + parseInt(nota02) + parseInt(nota03))/3

/* A media e a soma de n* esima notas divididos por n* notas. Ex. nota 01 + 02+ 03 / 3 */
/* If Else é a condição Se _Senão em javascript*/

    if (media>=60) 
        alert("Parabens " + nome + ". Você foi aprovado com " + media + " pontos!")    
    else 
        alert("Que pena "+ nome + ". Você foi reprovado com " + media + " pontos!")
    